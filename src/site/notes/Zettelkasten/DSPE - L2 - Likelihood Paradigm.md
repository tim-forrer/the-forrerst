---
{"dg-publish":true,"permalink":"/Zettelkasten/DSPE - L2 - Likelihood Paradigm/","tags":["statistics"],"noteIcon":1,"created":"2024-12-21T19:41:25.944+09:00"}
---


The Law of Likelihood:
Suppose there are two hypotheses, $A, B$. An observation that $X = x$ is evidence that supports the hypotheses which has the greater probability of observing $X= x$.
The likelihood ratio measures the strength of that evidence.

For example: $p_{A}(X = x) = \frac{1}{2}$, $p_{B}(X=x)= \frac{3}{4}$, then observing $X=x$ supports $B$ over $A$ because according to $B$ we are more likely to observe this outcome.
The strength of this evidence is given by the likelihood ratio

$$
\frac{3}{4} \div \frac{1}{2} = \frac{3}{2}.
$$

Note that the Law of Likelihood only talks about how an observation supports *one hypothesis over another*, not of any hypothesis in isolation.

>[!question]- A counter-example to the Law of Likelihood?
>Suppose I have a deck of 52 cards, which I shuffle and then turn over the top card. It's an ace of spades.
>Suppose also that I have two hypotheses:
>- $H_{1}$: All 52 cards are aces of spades.
>- $H_{N}$: It's a normal deck of cards.
>
>The observation seems like quite strong evidence (likelihood ratio of 52) supporting $H_{1}$, but this can feel unintuitive.
>Basically, the Law of Likelihood as given here completely ignores prior beliefs. Intuitions are basically built on them, so it's natural that this divergence should occur.
