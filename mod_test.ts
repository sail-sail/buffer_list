import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Buffer } from "https://deno.land/std@0.140.0/node/buffer.ts";
import { BufferList } from "./mod.ts";

Deno.test("bufferList", function() {
  const bufferList = new BufferList();
  bufferList.append(Buffer.from('abcd'));
  
  assertEquals(bufferList.length, 4);
  assertEquals(bufferList.get(0), 97);
  assertEquals(bufferList.get(1), 98);
  assertEquals(bufferList.get(2), 99)
  assertEquals(bufferList.get(3), 100)
  assertEquals(bufferList.get(4), undefined)
});
