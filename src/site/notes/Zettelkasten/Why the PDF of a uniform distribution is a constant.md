---
{"dg-publish":true,"permalink":"/Zettelkasten/Why the PDF of a uniform distribution is a constant/","tags":["statistics"],"noteIcon":1,"created":"2024-12-21T21:17:26.342+09:00"}
---

This was probably a waste of time - but nonetheless I think the resulting proof was useful for me.

Basically I wanted to prove why the PDF of a uniform distribution had to be a constant, under the definition that a uniform distribution is one where the probability that $x_{1} < X < x_{2}$ is linearly dependent only on the length of the interval, i.e. $x_{2} - x_{1}$.[^1]

If $P(x_{1}<X<x_{2}) = k(x_{2}-x_{1})$ then we can say that

$$
\begin{align}
f(x) &= \frac{d}{dx} F(x) \\
 & =\frac{d}{dx} F(x) - 0 \\
 & =\frac{d}{dx} (F(x) - F(a)) \\
 & = \frac{d}{dx} k(x - a) \\
 & = k.    
\end{align}
$$

Done.
Let's not discuss how long that took me to come up with…

[^1]: There are other definitions where you just impose that the PDF is a constant, but I think my intuition surrounding PDFs is a not great, so thought this would be a good exercise.
