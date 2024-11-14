---
{"dg-publish":true,"permalink":"/Zettelkasten/Pointers (Go)/","tags":["go"],"noteIcon":"1","created":"2024-11-08T00:13:14.031+09:00","updated":"2024-11-14T09:15:50.217+09:00"}
---


Rather than storing a value, a pointer stores the memory address of some value.

In particular, this means that whenever the value of the thing a pointer points at changes, the pointer's value also changes.

```go
i := 42

p := &i // p points to i's memory address
i = 2
fmt.Println(*p) // 2 (same as i's current value)

p = i
i = 100
fmt.Println(p) // Still 2!
```