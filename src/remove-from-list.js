const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // If the list is empty, return it as is
  if (!l) {
    return l;
  }

  // Handle the case where the head node(s) need to be removed
  while (l && l.value === k) {
    l = l.next;
  }

  let currentNode = l;

  // Traverse the list, removing nodes as necessary
  while (currentNode && currentNode.next) {
    if (currentNode.next.value === k) {
      // Skip over the node with value k
      currentNode.next = currentNode.next.next;
    } else {
      // Move to the next node if the current one doesn't need removal
      currentNode = currentNode.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
