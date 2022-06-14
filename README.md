# ItChat API Types

### Installation 
```s
$ npm i @itchatapp/types
```


### Example Usage
```ts
// for deno runtime 
// import type { Message } from 'https://deno.land/x/itchatjs_types/mod.ts'
import type { Message } from '@itchatapp/types'

const message: Message = {
    id: 0,
    author_id: 0,
    channel_id: 0,
    content: 'Hi'
}
```