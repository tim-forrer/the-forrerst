---
{"tags":[],"difficulty":"easy","source":"https://leetcode.com/problems/two-sum/","dg-publish":true,"dg-note-icon":"2","permalink":"/Zettelkasten/Two Sum (Programming Problem)/","dgPassFrontmatter":true,"noteIcon":"2","created":"2024-11-08T23:25:11.408+09:00","updated":"2024-11-14T09:16:07.150+09:00"}
---

# Problem
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

# Solution
To ensure that `nums` is only passed through once, store each index of `nums` in a hash map with a key that is equal to `target - value` so that for each further element of `nums`, checking the hash map for the further element and finding a result means that we know the two elements which sum to the target.

```go
func twoSum(nums []int, target int) []int {
  trackingMap := make(map[int]int, len(nums))

  for i, v := range nums { 
    if j, exists := trackingMap[v]; exists {
      // if v is already in the tracking map
      // then this means we have already accessed
      // a value v' that satisfies v + v' == target
      // so we just return the current index of v (i)
      // and the index of the previous v' (j)
      return []int{j, i}
    }
    trackingMap[target-v]=i //
  }
  return []int{}
}
```