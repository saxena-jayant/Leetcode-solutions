/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1,...nums2]
    newArr = newArr.sort((a, b) => a - b);
    if(newArr.length%2){
      return newArr[parseInt(newArr.length/2)]
    }
    else{
      return ((newArr[parseInt(newArr.length/2)-1]+newArr[parseInt(newArr.length/2)])/2)
    }
};