export function headerParser(header: string){
  const res = new Map<string, string>()
  for (const o of header.split("\r\n")){
    let [k,v] = o.split(/: */)
    res.set(k, v)
  }
  return res
}

export function toStringMapAsHeader(header: Map<string, string>){
  const res = []
  for (const [k, v] of header){
    res.push(`${k}: ${v}`)
  }
  return res.join("\r\n")
}

export function parseLspMessage(src: string){
  const [header, body] = src.split(/\r\n\r\n/)
  return {
    header: headerParser(header),
    body: body
  }
}