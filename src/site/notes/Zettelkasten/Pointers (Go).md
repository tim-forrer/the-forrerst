---
{"dg-publish":true,"permalink":"/Zettelkasten/Pointers (Go)/","tags":["seedling","go"],"noteIcon":"1","created":"2024-11-08T00:13:14.031+09:00","updated":"2024-11-08T00:21:20.266+09:00"}
---


Rather than storing a value, a pointer stores the memory address of some value.


```go
i := 42

p := &i // p points to i's memory address
i = 2
fmt.Println(*p) // 2 (same as i's current value)

p = i
i = 100
fmt.Println(p) // Still 2!
```