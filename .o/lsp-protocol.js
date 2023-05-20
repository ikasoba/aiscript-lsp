// src/lsp-protocol.ts
function headerParser(header) {
  const res = /* @__PURE__ */ new Map();
  for (const o of header.split("\r\n")) {
    let [k, v] = o.split(/: */);
    res.set(k, v);
  }
  return res;
}
function toStringMapAsHeader(header) {
  const res = [];
  for (const [k, v] of header) {
    res.push(`${k}: ${v}`);
  }
  return res.join("\r\n");
}
function parseLspMessage(src) {
  const [header, body] = src.split(/\r\n\r\n/);
  return {
    header: headerParser(header),
    body
  };
}
export {
  headerParser,
  parseLspMessage,
  toStringMapAsHeader
};
