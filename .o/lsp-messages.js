// src/lsp-messages.ts
var ResourceOperationKind = /* @__PURE__ */ ((ResourceOperationKind2) => {
  ResourceOperationKind2["Create"] = "create";
  ResourceOperationKind2["Rename"] = "rename";
  ResourceOperationKind2["Delete"] = "delete";
  return ResourceOperationKind2;
})(ResourceOperationKind || {});
var FailureHandlingKind = /* @__PURE__ */ ((FailureHandlingKind2) => {
  FailureHandlingKind2["Abort"] = "abort";
  FailureHandlingKind2["Transactional"] = "transactional";
  FailureHandlingKind2["TextOnlyTransactional"] = "textOnlyTransactional";
  FailureHandlingKind2["Undo"] = "undo";
  return FailureHandlingKind2;
})(FailureHandlingKind || {});
var MarkupKind = /* @__PURE__ */ ((MarkupKind2) => {
  MarkupKind2["PlainText"] = "plaintext";
  MarkupKind2["Markdown"] = "markdown";
  return MarkupKind2;
})(MarkupKind || {});
export {
  FailureHandlingKind,
  MarkupKind,
  ResourceOperationKind
};
