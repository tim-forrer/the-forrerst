---
{"dg-publish":true,"permalink":"/Zettelkasten/Plim/","tags":["statistics"],"noteIcon":"1","created":"2024-12-21T14:38:04.590+09:00"}
---


Suppose $\{ X_{n} \}_{n}$ is a sequence of random variables. Then this sequence converges to $Y$ in probability if $\forall\delta>0,\forall\epsilon>0, \exists N$ such that $\forall n\geq N$:

$$
P(|X_{n} - Y| > \epsilon) < \delta.
$$

In other words, $X_{n}$ resembles $Y$ more and more as $n$ increases.
This can be written as

$$
\underset{n \to \infty}{\text{plim}} \; P(|X_{n} - Y| > \epsilon) = 0.
$$

Or as even more short-form

$$
\underset{n \to \infty}{\text{plim}} \; X_{n} = Y.
$$
