# buffer_list (BufferList)

A Deno Buffer list collector, reader and streamer thingy.

buffer_list is a storage object for collections of Node Buffers, exposing them with the main Buffer readable API. Also works as a duplex stream so you can collect buffers from a stream that emits them and emit buffers to a stream that consumes them!

The original buffers are kept intact and copies are only done as necessary. Any reads that require the use of a single original buffer will return a slice of that buffer only (which references the same memory as the original buffer). Reads that span buffers perform concatenation as required and return the results transparently.

fork by https://github.com/rvagg/bl

## usage
```ts
import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Buffer } from "https://deno.land/std@0.140.0/node/buffer.ts";
import { BufferList } from "https://deno.land/x/buffer_list@v1.0.0/mod.ts";

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
```
