// Doubly Linked List

import Node from './Node';

export default class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
    this.messages = {
      failure: 'Failure: non-existent node in this list.',
      success: 'Node was successfully removed.'
    };
  }

  add = (value) => {
    const node = new Node(value);

    if (this._length > 0) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this._length++;

    return node;
  }

  searchNodeAt = (position) => {
    let currentNode = this.head;
    let count = 1;

    // 1st use-case: an invalid position
    if (this._length === 0 || position < 1 || position > this._length) {
      throw new Error(this.messages.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  remove = (position) => {
    let currentNode = this.head;
    let count = 1;
    let beforeNodeToDelete = null;
    let afterNodeToDelete = null;

    // 1st use-case: an invalid position
    if (this._length === 0 || position < 1 || position > this._length) {
      throw new Error(this.messages.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
      this.head = currentNode.next;

      // there is a second node
      if (!this.head) {
        this.head.previous = null;
      // there is no second node
      } else {
        this.tail = null;
      }

    // 3rd use-case: the last node is removed
    } else if (position === this._length) {
      this.tail = this.tail.previous;
      this.tail.next = null;

    // 4th use-case: a middle node is removed
    } else {
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }

      beforeNodeToDelete = currentNode.previous;
      afterNodeToDelete = currentNode.next;

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.previous = beforeNodeToDelete;
    }

    this._length--;

    return this.messages.success;
  }
}
