/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

//   Definition for singly-linked list.
//   function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//  }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // console.log(list1,list2)
    // if(list1!=null && list2!=null){
    //     console.log(list1.val,list2)
    //     // console.log(list2.val)
    //     if(list1.val<=list2.val){
    //         list1.next=mergeTwoLists(list1.next,list2);
    //         return list1;
    //     }
    //     else{
    //         list2.next=mergeTwoLists(list1,list2.next);
    //         return list2;
    //     }
    // }
    // console.log(list1,list2)
    // if(list1==null){
    //     return list2;
    // } else {
    //     return list1;
    // }
};
// @lc code=end

module.exports = mergeTwoLists;