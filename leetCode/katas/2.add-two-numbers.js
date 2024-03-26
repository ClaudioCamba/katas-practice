/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
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
var addTwoNumbers = (l1, l2)=> {
    const length = l1.length > l2.length? l1.length : l2.length;
    const newArray = [];
    let carry = null;

    for (let i = 0; i < length; i++) {

        let num1 = l1[i] || 0, num2 = l2[i] || 0;
        let num = num1 + num2;

        if (carry){ 
            num += carry;
            carry = null;
        }

        if (num < 10){
            newArray.push(num);
        } else {
            carry = Number(num.toString()[0])
            newArray.push(Number(num.toString()[1]));
        }
    }

    if (carry){ newArray.push(carry) }

    return newArray;
};
// @lc code=end

module.exports = addTwoNumbers;

