---
{"dg-publish":true,"permalink":"/Zettelkasten/DSPE - L4 - Univariate Linear Prediction Models/","noteIcon":1,"created":"2024-12-26T21:03:40.730+09:00"}
---


# Ergodicity
Suppose we observe a random variable $Y_t$ over $T$ time steps:

$$
\{ y_{1}, y_{2}, \dots, y_{T} \}
$$

Whilst this is a sample of size $T$, it is a *single possible sample* of size $T$ from all possible series of outcomes that we could observed over those $T$ time steps.

We can also consider an ensemble of $I$ different samples, or other possible observed outcomes from $Y_t$ :

$$
\{ y_{t}^{(1)} \}_{t=-\infty}^{\infty}, \{ y_{t}^{(2)} \}_{t=-\infty}^{\infty}, \dots, \{ y_{t}^{(I)} \}_{t=-\infty}^{\infty}.
$$

If we want to make a forecast for what will be observed at time $T+1$, what is really needed is the ensemble average for $t = T+1$, i.e. the average over

$$
\{ y_{T+1}^{(1)}, y_{T+1}^{(2)}, \dots, y_{T+1}^{(I)} \}.
$$

Of course we don't have this, because $t=T+1$ is in the future. But even supposing that the ensemble average was the same for each $t$, we *still* wouldn't be able to compute it because we only ever observe one instance at each $t$, not the entire ensemble.

However, a useful property for a random variable is that of *ergodicity*.

Definition:
A random variable is *ergodic* (for the mean), when its time average is equal to its ensemble average.

$$
\underset{T \to \infty}{\text{plim}}\;
\frac{1}{T} \sum_{t=1}^{T} y_{t} = E[Y_t].
$$

If $Y_t$ is ergodic, then taking a sufficiently large time-average would be a good estimate for the ensemble average, and therefore for $t=T+1$.

# Conditions for Ergodicity
## Autocovariance
Recalling that $\text{Cov}(X, Y_t) = E(X - \mu_{X})(Y - \mu_{Y})$, we can define the autocovariance of $Y$ with itself.

Definition:
The $j^{\text{th}}$ *autocovariance* of $Y_t$ is defined as

$$
\gamma_{jt} := \text{Cov}(Y_{t}, Y_{t-j})
= E(Y_{t} - \mu_{Y_{t}})(Y_{t-j}-\mu_{Y_{t-j}}).
$$

I.e. it is the covariance of $Y_t$ with its lagged value.

Corollary:
The $0^{\text{th}}$ autocovariance of $Y_t$ is just the variance.

## Stationarity
Definition:
$Y_{t}$ is said to be *covariance-stationary* or *weakly-stationary* if for all $t$ :
- $\mu_{t}= \mu$
- $\gamma_{jt} = \gamma_{j}$

I.e. the mean and autocovariances are independent of time.
