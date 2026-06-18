/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Step 1: Convert linked lists to arrays
    let arr1 = [], arr2 = [];
    while (l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        arr2.push(l2.val);
        l2 = l2.next;
    }

    // Step 2: Your original loop with small fix
    let arr = [];
    let total = Math.max(arr1.length, arr2.length);
    let extra = 0;

    for (let i = 0; i < total; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0) + extra;
        arr.push(sum % 10);
        extra = Math.floor(sum / 10);
    }

    if (extra > 0) {
        arr.push(extra);
    }

    // Step 3: Convert result array to linked list
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
};

