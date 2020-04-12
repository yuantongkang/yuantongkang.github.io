---
tags: 
  - 算法
  - 链表
---
# 判断链表是否有环
- 快慢指针

```js
// 快慢指针
let hasCycle = function(head) {
  if (!head) return false;
  let walker = head;
  let runner = head;

  while (walker.next && (runner.next && runner.next.next)) {
    if (walker.next == runner.next.next) {
      return true;
    }
    walker = walker.next;
    runner = runner.next.next;
  }
  return false;
};
```

- 利用 HashSet

```js
function hasCycle(head){
  if (!head) return false;
  let linkLoop = new Set()
  let walker = head
  while(walker){
    if(linkLoop.has(walker)){
      return true
    }else{
      linkLoop.add(walker)
      walker = walker.next
    }
  }
  return false
}

```