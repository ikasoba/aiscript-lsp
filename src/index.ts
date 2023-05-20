import { Parser } from "@syuilo/aiscript";
import { Node } from "@syuilo/aiscript/built/node";

export type Result<T, E = never, F extends boolean = boolean> = (
  F extends true
    ? {
        type: "ok"
        value: T
      }
    : {
        type: "err"
        value: E
        message: string
      }
)

export const parse = (s: string): Result<Node[], [number, number] | null> => {
  try {
    return {type: "ok", value: Parser.parse(s)}
  }catch(e: any){
    const m = e instanceof Error ? e.message.match(/Line ([0-9]+):([0-9]+)/) : null
    if (!m)return {type: "err", value: null, message: ""}
    return {type: "err", value: m.slice(1).map(x => parseInt(x) - 1) as [number, number], message: (e as any).message}
  }
}