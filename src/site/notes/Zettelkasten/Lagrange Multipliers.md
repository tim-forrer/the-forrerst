---
{"dg-publish":true,"permalink":"/Zettelkasten/Lagrange Multipliers/","tags":["calculus","optimisation"],"noteIcon":1,"created":"2024-12-21T12:06:16.000+09:00"}
---


Lagrange multipliers allow for the solving of an optimisation problem given some constraint.

For example: What is the maximum of $f(x,y) = xy + 1$ such that $x^{2} + y^{2} = 1$?

# Intuition
The maximum occurs when $\nabla f$ and $\nabla g$, are parallel to one another, where $g(x,y)$ is the constraint, rewritten such that it is equal to zero, e.g.

$$
x^{2} + y^{2} = 1 \rightarrow \underbrace{ x^{2} + y^{2} - 1 }_{ g(x) } = 0
$$

Saying that they are parallel is expressed by saying $\nabla f= \lambda \nabla g$ (where $\lambda \in \mathbb{R}$), which can be rewritten as $\nabla f - \lambda\nabla g = 0$, which means that

$$
\nabla(f - \lambda g) = 0.
$$

This will give us a system of two equations (when $f$ and $g$ take two inputs), one each for the partial derivatives of $x$ and $y$. However, $\lambda$ is also an unknown so we need one more equation to solve for this.
This can be obtained through taking an additional partial derivative with respect to $\lambda$, which conveniently will always give us back

$$
-g = 0 \implies g = 0,
$$

which is just our constraint! (That's why we rewrote it to be $0$.)

# Method
To wrap everything up into a simple method, we define the Lagrangian

$$
\mathcal{L}(x, y, \lambda) = f(x,y) - \lambda g(x,y).
$$

Then the maximum occurs when $\nabla \mathcal{L} = \nabla f - \nabla \lambda g = 0$.
This results in a series of equations, which can be solved to work out the values of $x,y$ that maximise $f$ subject to the constraint.
It's not usually necessary to also determine $\lambda$, but of course this can be done also.

This generalises in the natural way to any dimension.

## Example
What is the maximum of $f(x,y) = xy + 1$ such that $x^{2} + y^{2} = 1$?
Here we have that

$$
\begin{equation}
\mathcal{L}
 = xy + 1 - \lambda(x^{2} + y^{2} - 1)
\end{equation}
$$

$$
\begin{equation}
\frac{ \partial \mathcal{L} }{ \partial x } = y - 2x\lambda, \frac{ \partial \mathcal{L} }{ \partial y } = x - 2y\lambda, \frac{ \partial \mathcal{L} }{ \partial \lambda } = 1 - (x^{2}+y^{2})
\end{equation}
$$

Then

$$
\lambda = \frac{x}{2y}
$$

and

$$
y - \frac{2x^{2}}{2y} = 0 \implies y^{2} = x^{2}.
$$

So $1-2x^{2} = 0$ and $x = \pm \frac{1}{\sqrt{ 2 }}$, same for $y$.
Normally would need to check all four cases to find the maximums, but clearly the maximum is when both $x$ and $y$ are the same sign, so maximum points are $\left( \pm \frac{1}{\sqrt{ 2 }}, \pm \frac{1}{\sqrt{ 2 }} \right)$.
