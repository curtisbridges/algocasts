// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let num = 0
    let node = this.head
    while (node) {
      num++
      node = node.next
    }

    return num
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) return null

    let node = this.head
    while (node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head?.next
  }

  removeLast() {
    if (!this.head) return
    if (!this.head.next) return this.clear()

    let prev = this.head
    let node = this.head.next
    while (node.next) {
      prev = node
      node = node.next
    }

    prev.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    const node = new Node(data)
    if (last) last.next = node
    else this.head = node
  }

  getAt(index) {
    if (index > this.size()) return null

    let node = this.head
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return node
      }

      node = node.next
    }
  }

  removeAt(index) {
    if (!this.head) return

    if (index === 0) {
      this.head = this.head.next
      return
    }
    if (index >= this.size()) return

    const prev = this.getAt(index - 1)
    prev.next = prev.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const prev = this.getAt(index  -  1) ?? this.getLast()
    const node = new Node(data, prev.next)
    prev.next = node
  }

  forEach( fn ) {
    let node = this.head
    while (node) {
      fn(node)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
