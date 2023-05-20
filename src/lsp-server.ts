import * as fs from "fs";
import {DidChangeTextDocumentParams, TextDocumentSyncKind, InitializeResult, RequestMessage, Diagnostic, DocumentDiagnosticParams, DiagnosticClientCapabilities, PublishDiagnosticsParams} from "vscode-languageserver-protocol"
import {isJSONRPCResponse, JSONRPC, JSONRPCClient, JSONRPCID, JSONRPCRequest, JSONRPCResponse, JSONRPCServer} from "json-rpc-2.0"
import { parseLspMessage, toStringMapAsHeader } from "./lsp-protocol";
import { Duplex } from "stream";
import {parse} from "./index.js"

const stream = await fs.createWriteStream("./log.txt", {flags: "w"})
const con = new console.Console(stream)

export function main(output: Duplex, input: Duplex){
  const waitingRequestList = new Map<string | number, (v: any) => void>()

  const server = new JSONRPCServer();
  const client = new JSONRPCClient((value: JSONRPCRequest) => {
    return new Promise(resolve => {
      const body = JSON.stringify(value)
      if (value.id != null){
        waitingRequestList.set(value.id, resolve)
      }
      const res = Buffer.concat(
        [
          Buffer.from(
            toStringMapAsHeader(new Map([
              ["Content-Length", Buffer.byteLength(body, "utf-8").toString()],
              ["Content-Type", "application/vscode-jsonrpc; charset=utf-8"]
            ]))
            + "\r\n\r\n",
            "utf-8"
          ),
          Buffer.from(body, "utf-8")
        ]
      )
      con.log(res.toString("utf-8"))
      output.write(
        res.toString("utf-8")
      )
    })
  })

  server.addMethod("initialize", (body: RequestMessage) => {
    return {
      capabilities: {
        textDocumentSync: 1,
        workspace: {

        }
      },
      serverInfo: {
        name: "aiscript-lsp",
        version: "0.1.0"
      }
    } satisfies InitializeResult
  })

  server.addMethod("initialized", async () => {
    return null
  })

  server.addMethod("shutdown", () => {
    stream.close()
    return null
  })

  server.addMethod("exit", () => {
    process.exit()
  })

  server.addMethod("textDocument/didOpen", (value) => {
    con.log(value)
  })

  server.addMethod("textDocument/didChange", async (value: DidChangeTextDocumentParams) => {
    const src = value.contentChanges[0].text.replace(/\r\n|\r/, "\n")
    const res = parse(src)
    client.requestAdvanced({
      jsonrpc: JSONRPC,
      method: "textDocument/publishDiagnostics",
      params: {
        uri: value.textDocument.uri,
        diagnostics: []
      } satisfies PublishDiagnosticsParams
    })
    if (res.type == "err"){
      con.log(res)
      client.requestAdvanced({
        jsonrpc: JSONRPC,
        method: "textDocument/publishDiagnostics",
        params: {
          uri: value.textDocument.uri,
          diagnostics: [
            {
              range: {
                start: {line: res.value?.[0] ?? 0, character: res.value?.[1] ?? 0},
                end: {line: res.value?.[0] ?? 0, character: res.value?.[1] ?? 0}
              },
              message: res.message
            }
          ]
        } satisfies PublishDiagnosticsParams
      })
    }
  })

  let buf = ""

  input.setEncoding("utf8")
  input.on("data", async (data: string) => {
    buf += data
    const rawRequest = parseLspMessage(buf)
    con.log(rawRequest)
    if (!rawRequest.body)return;
    con.log(buf)
    buf = ""
    const req: JSONRPCRequest | JSONRPCResponse = JSON.parse(rawRequest.body)
    if (isJSONRPCResponse(req)){
      con.log("is Response")
      if (req.id == null)return;
      const resolve = waitingRequestList.get(req.id)
      if (resolve){
        resolve(req)
      }
      return
    }
    const jsonrpcResponse = JSON.stringify(await server.receive(req))
    const res = Buffer.concat(
      [
        Buffer.from(
          toStringMapAsHeader(new Map([
            ["Content-Length", Buffer.byteLength(jsonrpcResponse, "utf-8").toString()],
          ]))
          + "\r\n\r\n",
          "utf-8"
        ),
        Buffer.from(jsonrpcResponse, "utf-8")
      ]
    )
    if (req.id == null)return;
    con.log(res.toString("utf-8"))
    output.write(
      res.toString("utf-8")
    )
  })
}

main(process.stdout, process.stdin)