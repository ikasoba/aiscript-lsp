export type JsonObject = {[k: string]: JsonAny}
export type JsonArray = JsonAny[]
export type JsonPrimitive = string | number | boolean | null
export type JsonAny = JsonPrimitive | JsonArray | JsonObject

export interface Message {
	jsonrpc: string;
}

export interface RequestMessage extends Message {

	/**
	 * リクエストID。
	 */
	id: number | string;

	/**
	 * 実行されるメソッド。
	 */
	method: string;

	/**
	 * メソッドのパラメータ。
	 */
	params?: JsonArray | JsonObject;
}

export interface ResponseMessage extends Message {
	/**
	 * リクエストID。
	 */
	id: number | string | null;

	/**
	 * リクエストの結果。成功時は必須である。
	 * メソッドがエラーを返した場合はこのプロパティは存在してはならない。
	 */
	result?: string | number | boolean | JsonObject | null;

	/**
	 * リクエストが失敗した場合のエラー。
	 */
	error?: ResponseError;
}

export interface ResponseError {
	/**
	 * 発生したエラー種別を表す数字。
	 */
	code: number;

	/**
	 * エラーの概要を表す文字列。
	 */
	message: string;

	/**
	 * エラーについての情報を付加するプリミティブまたは構造化された値。
	 * 省略可能。
	 */
	data?: JsonAny;
}

enum ErrorCodes {
	// JSON RPC で定義されたもの。
	ParseError = -32700,
	InvalidRequest = -32600,
	MethodNotFound = -32601,
	InvalidParams = -32602,
	InternalError = -32603,
	serverErrorStart = -32099,
	serverErrorEnd = -32000,
	ServerNotInitialized = -32002,
	UnknownErrorCode = -32001,

	// このプロトコルで定義されたもの。
	RequestCancelled = -32800,
	ContentModified = -32801
}

export interface NotificationMessage extends Message {
	/**
	 * 実行されるメソッド。
	 */
	method: string;

	/**
	 * 通知のパラメータ。
	 */
	params?: JsonArray | JsonObject;
}

export interface CancelParams {
	/**
	 * キャンセル対象のリクエストID。
	 */
	id: number | string;
}

export type ProgressToken = number | string;
export interface ProgressParams<T> {
	/**
	 * クライアントまたはサーバから提供されるプログレストークン。
	 */
	token: ProgressToken;

	/**
	 * プログレスデータ。
	 */
	value: T;
}

export type DocumentUri = string;

const EOL = ['\n', '\r\n', '\r'] as const;
export type EOL = ['\n', '\r\n', '\r'][number]

export interface Position {
	/**
	 * ドキュメント内の行位置 (0始まり)。
	 */
	line: number;

	/**
	 * ドキュメント内の行中の文字オフセット (0始まり)。行は文字列として表現される
	 * と仮定し、`character` の値は `character` と `caracter + 1` 間のすき間を表
	 * 現する。
	 *
	 * `character` の値が行の長さを越えた場合はデフォルトでは行の長さに戻る。
	 */
	character: number;
}

export interface Range {
	/**
	 * 範囲の開始位置。
	 */
	start: Position;

	/**
	 * 範囲の終了位置。
	 */
	end: Position;
}

export interface Location {
	uri: DocumentUri;
	range: Range;
}

export interface LocationLink {

	/**
	 * このリンクの原点のスパン
	 *
	 * マウス操作の下線付きスパンとして使われる。デフォルトではマウス位置の単語の
	 * 範囲が使われる。
	 */
	originSelectionRange?: Range;

	/**
	 * このリンクのターゲットリソースの識別子。
	 */
	targetUri: DocumentUri;

	/**
	 * このリンクの対象範囲。ターゲットが例えばシンボルの場合、対象範囲はこのシン
	 * ボルを含む範囲で、先頭/末尾の空白は含まれないが、コメントなど他のものは全
	 * て含まれる。これは通常エディタでレンジをハイライトするときに使われる。
	 */
	targetRange: Range;

	/**
	 * このリンクを辿るときに選択し、表示するべき範囲。例えば関数名。
	 * `targetRange` に含まれている必要がある。`DocumentSymbol#range` も参照。
	 */
	targetSelectionRange: Range;
}

export interface Diagnostic {
	/**
	 * メッセージが適用される範囲。
	 */
	range: Range;

	/**
	 * 診断結果の重大度。省略可能。省略した場合、クライアント次第で診断結果をエ
	 * ラー、警告、情報、ヒントとして解釈する。
	 */
	severity?: number;

	/**
	 * UI に表示されるであろう診断結果コード。
	 */
	code?: number | string;

	/**
	 * 'export typescript' や 'super lint' のようなこの診断結果を提供したソースを表わす
	 * 可読な文字列。
	 */
	source?: string;

	/**
	 * 診断結果のメッセージ。
	 */
	message: string;

	/**
	 * 診断結果についての追加のメタデータ。
	 *
	 * @since 3.15.0
	 */
	tags?: DiagnosticTag[];

	/**
	 * 関連する診断情報の配列、例えばスコープ内のシンボル名が衝突した場合このプロ
	 * パティから全ての定義をマークできる。
	 */
	relatedInformation?: DiagnosticRelatedInformation[];
}

enum DiagnosticSeverity {
	/**
	 * エラーを報告する。
	 */
	Error = 1,
	/**
	 * 警告を報告する。
	 */
	Warning = 2,
	/**
	 * 情報を報告する。
	 */
	Information = 3,
	/**
	 * ヒントを報告する。
	 */
	Hint = 4
}

/**
 * 診断タグ
 *
 * @since 3.15.0
 */
enum DiagnosticTag {
	/**
	 * 使われていない、または不要なコード。
	 *
	 * クライアントはエラー下線の代わりに、このタグをフェードアウトすることで診
	 * 断結果を表示できる。
	 */
	Unnecessary = 1,
	/**
	 * 非推奨または廃止されたコード。
	 *
	 * クライアントはこのタグの打ち消し線で診断結果を表示できる。
	 */
	Deprecated = 2
}

/**
 * 診断結果の関連メッセージとソースコードの位置を表わす。これはスコープ内のシン
 * ボルが被っているときなど診断結果の原因やそれに関連するコードの位置を指し示す
 * ために使われるべきである。
 */
export interface DiagnosticRelatedInformation {
	/**
	 * 診断結果に関連する位置。
	 */
	location: Location;

	/**
	 * 診断結果のメッセージ。
	 */
	message: string;
}

export interface Command {
	/**
	 * コマンドのタイトル、`save` など。
	 */
	title: string;
	/**
	 * 実際のコマンドハンドラの識別子。
	 */
	command: string;
	/**
	 * コマンドハンドラに渡すべき引数。
	 */
	arguments?: any[];
}

export interface TextEdit {
	/**
	 * 操作されるテキストドキュメントのレンジ。ドキュメントにテキストを挿入するた
	 * めにはレンジを start === end として指定する。
	 */
	range: Range;

	/**
	 * 挿入される文字列。削除操作をするためには空文字列を使う。
	 */
	newText: string;
}

export interface TextDocumentEdit {
	/**
	 * 変更するテキストドキュメント。
	 */
	textDocument: VersionedTextDocumentIdentifier;

	/**
	 * 適用する変更。
	 */
	edits: TextEdit[];
}

/**
 * ファイル作成時のオプション。
 */
export interface CreateFileOptions {
	/**
	 * 存在するファイルを上書きする。`ignoreIfExists` より優先される。
	 */
	overwrite?: boolean;
	/**
	 * 存在する場合は何もしない。
	 */
	ignoreIfExists?: boolean;
}

/**
 * ファイル作成操作
 */
export interface CreateFile {
	/**
	 * 作成
	 */
	kind: 'create';
	/**
	 * 作成するリソース。
	 */
	uri: DocumentUri;
	/**
	 * オプション
	 */
	options?: CreateFileOptions;
}

/**
 * ファイルリネームオプション
 */
export interface RenameFileOptions {
	/**
	 * 存在するファイルを上書きする。`ignoreIfExists` より優先される。
	 */
	overwrite?: boolean;
	/**
	 * 存在する場合は何もしない。
	 */
	ignoreIfExists?: boolean;
}

/**
 * リネーム操作
 */
export interface RenameFile {
	/**
	 * リネーム
	 */
	kind: 'rename';
	/**
	 * 古い(存在している)位置。
	 */
	oldUri: DocumentUri;
	/**
	 * 新しい位置。
	 */
	newUri: DocumentUri;
	/**
	 * リネームオプション。
	 */
	options?: RenameFileOptions;
}

/**
 * ファイル削除オプション
 */
export interface DeleteFileOptions {
	/**
	 * フォルダが指定されたとき、コンテントを再帰的に削除する。
	 */
	recursive?: boolean;
	/**
	 * ファイルが存在しない場合は何もしない。
	 */
	ignoreIfNotExists?: boolean;
}

/**
 * ファイル削除操作
 */
export interface DeleteFile {
	/**
	 * 削除
	 */
	kind: 'delete';
	/**
	 * 削除するファイル。
	 */
	uri: DocumentUri;
	/**
	 * 削除オプション。
	 */
	options?: DeleteFileOptions;
}

export interface WorkspaceEdit {
	/**
	 * 存在するリソースへの変更を保持する。
	 */
	changes?: { [uri: DocumentUri]: TextEdit[]; };

	/**
	 * ドキュメントへの変更は、クライアントが
	 * `workspace.workspaceEdit.resourceOperations` を提供しているかに依存して、
	 * それぞれのテキストドキュメントの編集が扱う指定したバージョンのテキストド
	 * キュメントである n 個の異なるテキストドキュメントへの変更を表現する
	 * `TextDocumentEdit` の配列または `TextDocumentEdit` の配列にファイル/フォル
	 * ダの作成、リネーム、削除操作を混ぜたもののいずれかが含むことができる。
	 *
	 * クライアントがバージョン管理されたドキュメントを操作できるかどうかはクライ
	 * アントが `workspace.workspaceEdit.documentChanges` を提供するかどうかで表
	 * 現される。
	 *
	 * クライアントが `documentChanges` か
	 * `workspace.workspaceEdit.resourceOperations` のいずれかをサポートしている
	 * 場合、`changes` プロパティにただの `TextEdit` の配列を使うことがサポートさ
	 * れる。
	 */
	documentChanges?: (TextDocumentEdit[] | (TextDocumentEdit | CreateFile | RenameFile | DeleteFile)[]);
}

export interface WorkspaceEditClientCapabilities {
	/**
	 * クライアントは `WorkspaceEdit` でバージョン管理されたドキュメントの変更を
	 * サポートする。
	 */
	documentChanges?: boolean;

	/**
	 * クライアントがサポートするリソース操作。クライアントは少なくともファイルと
	 * フォルダへの 'create'、'rename'、'delete' をサポートすべきである。
	 *
	 * @since 3.13.0
	 */
	resourceOperations?: ResourceOperationKind[];

	/**
	 * ワークスペースへの編集が失敗した場合のクライアントの処理方法。
	 *
	 * @since 3.13.0
	 */
	failureHandling?: FailureHandlingKind;
}

export enum ResourceOperationKind {

	/**
	 * 新規ファイルやフォルダを作成することをサポートする。
	 */
	Create = 'create',

	/**
	 * 既存ファイルやフォルダをリネームすることをサポートする。
	 */
	Rename = 'rename',

	/**
	 * 既存ファイルやフォルダを削除することをサポートする。
	 */
	Delete = 'delete'
}

export enum FailureHandlingKind {

	/**
	 * ワークスペースへの変更を適用する際、一つでも変更が失敗した場合単純に破棄さ
	 * れる。失敗した操作の前に実行された操作は実行されたままである。
	 */
	Abort = 'abort',

	/**
	 * 全ての操作はトランザクショナルに実行される。つまり、ワークスペースには全て
	 * 成功するか全て変更しないかのどちらかのみが適用される。
	 */
	Transactional = 'transactional',


	/**
   * テキストファイルへの変更のみからなるワークスペースの編集はランザクショナル
   * に実行される。変更に含まれるリソースへの変更(ファイルの作成、リネーム、削
   * 除)には `abort` が適用される。
	 */
	TextOnlyTransactional = 'textOnlyTransactional',

	/**
	 * クライアントはすでに実行した操作を undo しようとする。しかし、その実行が成
	 *  功することは保証されない。
	 */
	Undo = 'undo'
}

export interface TextDocumentIdentifier {
	/**
	 * テキストドキュメントの URI。
	 */
	uri: DocumentUri;
}

export interface TextDocumentItem {
	/**
	 * テキストドキュメントの URI。
	 */
	uri: DocumentUri;

	/**
	 * テキストドキュメントの言語識別子。
	 */
	languageId: string;

	/**
	 * このドキュメントのバージョン番号(undo/redo を含む変更後に増加する)。
	 */
	version: number;

	/**
	 * 開かれたテキストドキュメントの中身。
	 */
	text: string;
}

export interface VersionedTextDocumentIdentifier extends TextDocumentIdentifier {
	/**
	 * このドキュメントのバージョン番号。バージョン管理されたテキストドキュメント
	 * の識別子がサーバからクライアントに送信され、エディタに開かれていない(サー
	 * バが open 通知をまだ受けていない)場合、サーバはディスクにある中身が真でバー
	 * ジョンは既知であることを示すため `null` を送信することができる(ドキュメン
	 * トコンテントの所有権で指定されている通り)。
	 * ドキュメントのバージョン番号は undo/redo を含むドキュメントへの変更で増加
	 * する。数字は連続である必要はない。
	 */
	version: number | null;
}

export interface TextDocumentPositionParams {
	/**
	 * テキストドキュメント。
	 */
	textDocument: TextDocumentIdentifier;

	/**
	 * テキストドキュメント内の位置。
	 */
	position: Position;
}

export interface DocumentFilter {
	/**
	 * `export typescript` のような言語識別子。
	 */
	language?: string;

	/**
	 * `file` や `untitled` のような URI のスキーマ(#Uri.scheme)。
	 */
	scheme?: string;

	/**
	 * `*.{ts,js}` のような glob パターン。
	 *
	 * glob パターンは次の構文を持つ:
	 * - `*` はパス区切りの中の1文字以上にマッチする
	 * - `?` はパス区切りの中の1文字にマッチする
	 * - `**` はパス区切りが無いことも含む任意の数のパス区切りにマッチする
	 * - `{}` は条件のグループ化(例えば、`*.{ts,js}` は全ての export typeScript と JavaScript ファイルにマッチする)
	 * - `[]` はパス区切りの中のマッチする文字の範囲を示す(例えば、`example.[0-9]` は `example.0`、`example.1`、… にマッチする)
	 * - `[!...]` はパス区切りの中のマッチしない文字の範囲を示す(例えば、`example.[!0-9]` は`example.a`、`example.b`、にはマッチするが `example.0` にはマッチしない)
	 */
	pattern?: string;
}

export type DocumentSelector = DocumentFilter[];

/**
 * `initialize` リクエストで返される静的な登録オプション。
 */
export interface StaticRegistrationOptions {
	/**
	 * リクエストを登録するために使われる ID。この ID はリクエストを解除するため
	 * に使うことができる。Registration#id も参照。
	 */
	id?: string;
}

/**
 * 一般的なテキストドキュメント登録オプション。
 */
export interface TextDocumentRegistrationOptions {
	/**
	 * 登録のスコープを識別するためのドキュメントセレクタ。null の場合クライアン
	 * ト側で提供されるドキュメントセレクタが使用される。
	 */
	documentSelector: DocumentSelector | null;
}

/**
 * クライアントがサポートする `Hover` や `ParameterInfo` や `CompletionItem` な
 * どのさまざまな結果のコンテントタイプを表わす。
 *
 * `MarkupKinds` は `$` から始まってはいけないことに注意する。これは内部的な用
 * 途のために予約されている。
 */
export enum MarkupKind {
	/**
	 * plaintext はコンテントフォーマットとしてサポートされている
	 */
	PlainText = 'plaintext',

	/**
	 * markdown はコンテントフォーマットとしてサポートされている
	 */
	Markdown = 'markdown'
}

/**
 * `MarkupContent` リテラルはその種別フラグで処理される中身の文字列値を表わす。
 * 現在はマークアップ種別として `plaintext` と `markdown` がサポートされている。
 *
 * 種別が `markdown` の場合値には GitHub issue のようなコードブロックを含めるこ
 * とができる。
 * https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting を参照。
 *
 * JavaScript/export typeScript を用いてこのような文字列を構成する方法の例を示す:
 * ```export typescript
 * let markdown: MarkdownContent = {
 *  kind: MarkupKind.Markdown,
 *	value: [
 *		'# Header',
 *		'Some text',
 *		'```export typescript',
 *		'someCode();',
 *		'```'
 *	].join('\n')
 * };
 * ```
 *
 * *注意* クライアントは返ってきた markdown をサニタイズするかもしれない。クラ
 * イアントはスクリプト実行を避けるために markdown から HTML を削除することを決
 * 定できる。
 */
export interface MarkupContent {
	/**
	 * マークアップ種別
	 */
	kind: MarkupKind;

	/**
	 * コンテンツ
	 */
	value: string;
}

export interface WorkDoneProgressBegin {

	kind: 'begin';

	/**
   * 進行状況の必須のタイトル。行われた操作種別を簡潔に伝えるために使われる。
	 *
	 * 例えば: "Indexing" または "Linking dependencies"。
	 */
	title: string;

	/**
	 * ユーザが時間のかかる操作をキャンセルできるようにするためにキャンセルボタン
	 * を表示すべきかどうかを制御する。キャンセルをサポートしていないクライアント
	 * はこの設定を無視できる。
	 */
	cancellable?: boolean;

	/**
	 * オプション、進行状況の詳細。`title` の捕捉的な情報を含む。
	 *
	 * 例: "3/25 files", "project/src/module2", "node_modules/some_dep"
	 * セットされてない場合、以前のメッセージ(存在する場合)は有効のままである。
	 */
	message?: string;

	/**
	 * 画面に表示するオプションの進捗率(100は100%と考える)。与えられない場合は無
	 * 限の進捗率が仮定され、クライアントは後続のレポート通知の `percentage` 値を
	 * 無視できる。
	 *
	 * この値は単調に増加すべきである。クライアントはこのルールに従っていない値を
	 * 無視してもよい。
	 */
	percentage?: number;
}

export interface WorkDoneProgressReport {

	kind: 'report';

	/**
	 * キャンセルボタンの有効無効を制御する。このプロパティは `WorkDoneProgressStart` ペイロードでキャンセルボタンが要求された場合のみ有効である。
	 *
	 * キャンセルをサポートしていない、またはボタンの有効無効の制御をサポートして
	 * いないクライアントはこの設定を無視できる。
	 */
	cancellable?: boolean;

	/**
	 * オプション、進行状況の詳細。`title` の捕捉的な情報を含む。
	 *
	 * 例: "3/25 files", "project/src/module2", "node_modules/some_dep"
	 * セットされてない場合、以前のメッセージ(存在する場合)は有効のままである。
	 */
	message?: string;

	/**
	 * 画面に表示するオプションの進捗率(100は100%と考える)。与えられない場合は無
	 * 限の進捗率が仮定され、クライアントは後続のレポート通知の `percentage` 値を
	 * 無視できる。
	 *
	 * この値は単調に増加すべきである。クライアントはこのルールに従っていない値を
	 * 無視してもよい。
	 */
	percentage?: number;
}

export interface WorkDoneProgressEnd {

	kind: 'end';

	/**
	 * オプション、操作の結果を示すなどの最後のメッセージを指す。
	 */
	message?: string;
}

export interface WorkDoneProgressParams {
	/**
	 * 作業進行状況を報告するために使われるオプションのトークン。
	 */
	workDoneToken?: ProgressToken;
}

export interface WorkDoneProgressOptions {
	workDoneProgress?: boolean;
}