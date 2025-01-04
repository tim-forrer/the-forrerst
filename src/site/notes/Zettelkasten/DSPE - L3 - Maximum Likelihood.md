---
{"dg-publish":true,"permalink":"/Zettelkasten/DSPE - L3 - Maximum Likelihood/","noteIcon":1,"created":"2024-12-27T15:24:55.926+09:00"}
---


# Continuous Functions
The definition of the likelihood function does not extend immediately to continuous functions, because the probability of any outcome is $0$.

However, we can say that in real life we only ever have a finite precision, so if we "measure" $x$, what we've really done is measure any outcome in the interval $(x-\epsilon, x+\epsilon)$, because we can't distinguish between values in this interval.

So $L(\theta) = P_{\theta}(X \in (x-\epsilon, x+\epsilon))$ which is

$$
\int _{x-\epsilon}^{x + \epsilon}p_{\theta}(x') \, dx'
\approx 2\epsilon p_{\theta}(x)
$$

when $\epsilon$ is very small.
Furthermore, likelihoods are only meaningful up to a constant, so $2\epsilon$ term can be dropped.

So for continuous functions we say that

$$
L(\theta;x) = p_{\theta}(x).
$$

# Combining Likelihoods
Suppose we have independent $X_{1}, X_{2}$, where we are told that they share a parameter $\theta$. Then the combined likelihood is

$$
L(\theta; x_{1},x_{2}) = p_{1,\theta}(x_{1})p_{2, \theta}(x_{2}) = L_{1}(\theta)L_{2}(\theta).
$$

It's common to take the logarithm of the likelihood, which means instead that this becomes additive.

$$
\log L(\theta) = \log L_{1}(\theta) + \log L_{2}(\theta).
$$

# Maximum and Curvature of Likelihood
When estimating a value of $\theta$, we use the value that maximises the likelihood. This is the maximum likelihood estimate, or MLE.
This provides a *point* estimate for $\theta$.

But it's often useful to quantify how good this estimate is.

## Regularity
If the log-likelihood is well approximated by a quadratic function around the MLE, then we say that the likelihood function is *regular*.

If it is regular, then the curvature at the maximum is a useful way to gauge the "goodness" of an estimate.

## Observed Fisher information
The score function is just the first derivative of the log-likelihood:

$$
S(\theta) = \frac{ \partial }{ \partial \theta } \log L(\theta).
$$

So the MLE is just the value of $\hat{\theta}$ where $S(\hat{\theta}) = 0$.

We then define the curvature at $\theta$ as

$$
I(\theta) = -\frac{ \partial  }{ \partial \theta^{2} } \log L(\theta).
$$

(Since at the maximum the second derivative is negative, we negate it to make curvature positive).

The larger $I(\hat{\theta})$ the more "certain" we are about our estimate. If $\theta_{0}$ were in fact a different value, it would be far less likely to generate the observed outcomes because the (log) likelihood function drops off so rapidly about the maximum.

$I(\hat{\theta})$ is called *observed Fisher information* - note it is a number, not a function.

### Normal Distributions
If we have $x_{1}, \dots, x_{n}$ observations from $N(\theta,\sigma^{2})$, where $\sigma$ is known, then we have that

$$
\begin{align}
\log L(\theta) &= -\frac{1}{2\sigma^{2}}\sum_{i=1}^{n}(x_{i} - \theta)^{2}. \\
S(\theta) &= \frac{1}{\sigma^{2}}\sum_{i=1}^{n}(x_{i} - \theta). \\
\implies \hat{\theta} &= \bar{x}. \\
\implies I(\hat{\theta}) &= \frac{n}{\sigma^{2}}.
\end{align}
$$

So larger sample size means greater information.
Also note that

$$
\text{Var}(\hat{\theta}) 
= \text{Var}\left( \frac{1}{n} \sum_{i=1}^{n} X_{i} \right)
= \frac{1}{n^{2}}\sum_{i=1}^{n}\text{Var}(X_{i})
= \frac{n\sigma^{2}}{n^{2}}
= \frac{\sigma^{2}}{n}
= \frac{1}{I(\hat{\theta})}.
$$

Which means that $\text{se}(\hat{\theta}) = \frac{\sigma}{\sqrt{ n }} = [I(\hat{\theta})]^{-1/2}$.

This is important because *many properties which are exactly true in the normal case are approximately true in regular problems.*

## Quadratic Approximations
A Taylor expansion of log-likelihood about $\hat{\theta}$ yields

$$
\log L(\theta) \approx \log L(\hat{\theta}) + S(\hat{\theta})(\theta-\hat{\theta}) - \frac{1}{2}I(\hat{\theta})(\theta-\hat{\theta})^{2}.
$$

Recalling that $S(\hat{\theta}) = 0$ we get that

$$
\log \frac{L(\theta)}{L(\hat{\theta})} = -\frac{1}{2}I(\hat{\theta})(\theta-\hat{\theta})^{2}.
$$

This is a quadratic approximation of a (normalised) log-likelihood about $\hat{\theta}$, which is exact in the normal case.
- A quadratic approximation of the log-likelihood yields a normal approximation of $\hat{\theta}$.

### Testing the approximation

$$
\begin{align}
&\frac{d}{d\theta} \log L(\theta) \approx \frac{d}{d\theta} \left( \log L(\hat{\theta}) -\frac{1}{2}I(\hat{\theta})(\theta-\hat{\theta})^{2} \right) \\
\implies & S(\theta) \approx -I(\hat{\theta})(\theta-\hat{\theta}) \\
\implies & -\frac{S(\theta)}{\sqrt{ I(\hat{\theta}) }} \approx \sqrt{ I(\hat{\theta}) }(\theta-\hat{\theta})
\end{align}
$$

This equation for the score is linear, and in the normal case will be exactly linear. So by plotting the score function and looking at how linear it is, we can understand how good the approximation is.

By re-writing it in the latter form, we end up with something that is dimensionless, so a uniform criteria can be applied regardless of scale.

Usually common to check linearity over $[-2, 2]$.

# Confidence Intervals
Rather than producing a point estimate for $\theta$, we can produce an *interval estimate*. This is where we specify a range which we believe $\theta_{0}$ lies, done by constructing statistics for the lower and upper endpoints of the interval.
Because we construct statistics, the interval is a random variable.

The *coverage probability* of an interval estimator is the probability that the interval contains $\theta_{0}$.

# Likelihood inference
A likelihood interval is given by

$$
\left\{  \theta \; \middle \vert \frac{L(\theta)}{L(\hat{\theta})} > c  \right\}.
$$

This is useful in cases where there isn't enough data to justify using the large-sample properties of probabilistic inference.

However, the choice of $c$ is somewhat arbitrary, and there's nothing observable to relate it too. Compared with a $95\%$ probability interval which can be understood as long-term frequency if the experiment was run many times.

If the likelihood function is sufficiently regular though, the value of $c$ can be calibrated through probability.

## Calibration through probability
If we consider normally-distributed data

$$
\log \frac{L(\theta)}{L(\hat{\theta})}
= -\frac{n}{2\sigma^{2}}(\bar{x}-\theta)^{2}
$$

$\bar{x}\sim N\left( \theta, \frac{\sigma^{2}}{n} \right) \implies \frac{n}{\sigma^{2}}(\bar{x}-\theta)^{2}\sim\chi_{1}^{2}$ so we can define

$$
W = 2\log\left( \frac{L(\hat{\theta})}{L(\theta)} \right)\sim\chi_{1}^{2}
$$

Then the probability that $\theta_{0}$ is covered by the interval is given by

$$
P\left( \frac{L(\theta_{0})}{L(\hat{\theta})}>c \right) =
P\left( 2\log\frac{L(\theta_{0})}{L(\hat{\theta})} < -2\log c \right) =
P(\chi_{1}^{2} < -2\log c)
$$

So by setting $c = \exp\left( -\frac{1}{2}\chi_{1, (1-\alpha)}^{2} \right)$ where $\chi_{1, (1-\alpha)}^{2}$ is the $1-\alpha$ percentile of $\chi_{1}^{2}$, we obtain that

$$
P\left( \frac{L(\theta_{0})}{L(\hat{\theta})}>c \right) =
P(\chi_{1}^{2} < -2\log c) = 
P(\chi_{1}^{2}< \chi_{1, (1-\alpha)}^{2}) =
1-\alpha
$$

So the likelihood interval has an equivalent meaning as a $1-\alpha$ confidence interval.
