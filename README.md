# ItChat API Types

### Installation 
```s
$ npm i @itchatapp/types
```


### Example Usage
```ts
// for deno runtime 
// import type { APIMessage } from 'https://deno.land/x/itchatjs_types/mod.ts'
import type { APIMessage } from '@itchatapp/types'

const message: APIMessage = {
    id: 0,
    author_id: 0,
    channel_id: 0,
    content: 'Hi'
}
```