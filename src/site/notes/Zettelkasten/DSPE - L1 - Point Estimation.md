---
{"dg-publish":true,"permalink":"/Zettelkasten/DSPE - L1 - Point Estimation/","tags":["statistics","forecasting"],"noteIcon":1,"created":"2024-12-20T18:59:38.159+09:00"}
---

# Introduction
Let $\theta$ be a parameter of $X$ that we wish to estimate (the mean, variance, etc.).
We estimate it by some function $\phi(X_{1},\dots,X_{n})$ of the sample

$$
\hat{\theta} := \phi(X_{1},\dots,X_{n}).
$$

Any function of a sample is a *statistic*.
An estimator is a specific kind of statistic - one that estimates the parameter $\theta$.

>[!note]
>$\hat{\theta}$ is a *random variable*.
>The observed value is the estimate.

Example:
The sample mean $\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_{i}$ is an estimator of the population mean, $E[X]$.

# Ranking estimators
There is no "unique" estimator for a given $\theta$. Indeed, I can claim that any statistic is an estimate of $\theta$ - there's no requirement that it is a "good" one.

So what makes a "good" estimator?
This is not such a simple question to answer - it depends how you measure it, which involves a degree of arbitrary-ness.

## Mean-squared error
A common metric used to compare estimators is the MSE:

$$
E(\hat{\theta}-\theta)^{2}.
$$

It's common because it possess some nice properties.

## Choosing an estimator
An estimator $X$ is better than $Y$ if for all $\theta \in \Theta, E(X-\theta)^{2}\leq E(Y-\theta)^{2}$ and there exists $\theta' \in \Theta$ such that the inequality is strict.
In this case $Y$ is called *inadmissible*.
Any estimator that is not inadmissible is *admissible*.

What about if both $X, Y$, are admissible (i.e. neither is better than the other)?
Then there are a couple of options available.

### Subjective strategy
We might decide that there is a prior distribution of the parameter $\theta$.
In this case we may choose the estimator that minimises the integral of the estimator over the parameter (on average it is better).

This is a kind of Bayesian way to do things.

### Minimax strategy
We may instead decide to choose the one which is better than the other in their respective worst case scenarios.

### Combination strategy
By combining the two estimators (say take the average of them), it might be possible to construct an even better estimator.

## Best Linear Unbiased Estimator (BLUE)
None of the above strategies is the most commonly employed.
Instead, it is usual to define a class of estimators, within which the best is found.

One such class is that of *linear unbiased estimators*.

- Linear estimator: An estimator that is a linear combination of the random variable sample.
- Unbiased estimator: An estimator such that for all possible values of $\theta$, $E(\hat{\theta}) = \theta$. E.g. my $\theta$ might happen to be $1$, and my estimator might be just $\hat{\theta} = 1$, which would be good for that particular value of $\theta$, but not great for any others. An unbiased estimator estimates the true value on average (e.g. if we had many experiments).

So a Linear Unbiased Estimator is an estimator that is, well, linear and unbiased.

>[!question] Why is this a good class of estimator?
>No reason in particular - but it is a mathematically "nice" class of estimator to work with.

Theorem:
Amongst all linear, unbiased estimators of the population mean, the sample mean is the best.
As an equation:

$$
MSE[\bar{X}] \leq MSE\left[ \sum_{i=1}^{n} a_{i} X_{i}\right].
$$

Proof:

$$
\begin{align}
MSE\left[ \sum_{i=1}^{n}a_{i}X_{i} \right]
 & = E\left( \left( \sum_{i}a_{i}X_{i} \right) - \mu \right)^{2} \\
 & = E\left( \left( \sum_{i}a_{i}X_{i} \right)^{2} - 2\mu\left( \sum_{i}a_{i}X_{i} \right) + \mu^{2} \right) \\
 & = E \left( \sum_{i}a_{i}X_{i} \right)^{2} - 2\mu E \left( \sum_{i}a_{i}X_{i} \right) + \mu^{2} \\
 & = E \left( \sum_{i}a_{i}X_{i} \right)^{2} - \mu^{2}.
\end{align}
$$

(Note that this is actually the variance of the estimator).
Since the estimator is unbiased, we have that

$$
\mu 
= E\left( \sum_{i}a_{i}X_{i} \right)
= \sum_{i}a_{i}E(X_{i})
= \sum_{i}a_{i}\mu.
$$

So $\sum_{i}a_{i} = 1$.
The set of $a_{i}$ that minimises this is given by $\frac{1}{n}$ - this can be shown using [[Zettelkasten/Lagrange Multipliers\|Lagrange multipliers]], with Lagrangian:

$$
\mathcal{L} = E\left( \sum_{i}a_{i}X_{i} \right)^{2} - \lambda\left(\left( \sum_{i}a_{i} \right) - 1 \right).
$$

## Asymptotic properties
It can be useful to think about the behaviour of an estimator as the sample size grows larger.
Asymptotic approximation is the consideration of the sample size going to infinity.

In such a scenario, $\hat{\theta}$ is a *consistent* estimator if[^1]

$$
\underset{n \to \infty}{\text{plim}}\;\hat{\theta} = \theta.
$$

Essentially this means that as the sample size grows larger, the estimate gets closer to the true value.

Another useful property is *asymptotic normality* - that the distribution $\hat{\theta}$ (or more generally, any statistic) tends to a normal distribution.

[^1]: See this note on [[Zettelkasten/Plim\|plim]].
