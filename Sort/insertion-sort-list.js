const insertionSortList = head => {
  if (head === null) return head;
  const dummyHead = new NodeList(0);
  dummyHead.next = head;
  let lastSorted = head,
    curr = head.next;
  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummyHead;
      while (prev.next.val <= curr.val) {
        prev = prev.next;
      }
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next;
  }
  return dummyHead.next;
};
