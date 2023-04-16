const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

class Queue {
  // constructor() {
  //   this.head = null;
  //   this.tail = null;
  // }

  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this;
  }

  enqueue(value) {
    let head;
    let cur = null;

    if (head === undefined) {
      head = this;
      this.value = value;
      this.next = cur;
    } else {
      head.next = this.value;
      this.next = null;
    }


    return head;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue,
};
