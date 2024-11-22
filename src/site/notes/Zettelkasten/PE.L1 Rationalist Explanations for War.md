---
{"dg-publish":true,"dg-note-icon":2,"parent":["[[Political Economics]]","[[Rationalist Explanations for War - Fearon.pdf]]"],"permalink":"/Zettelkasten/PE.L1 Rationalist Explanations for War/","dgPassFrontmatter":true,"noteIcon":2,"created":"2024-11-22T13:37:13.849+09:00"}
---

# Summary
We can build models that show that going to war is irrational - so why do they happen?
By extending our models we see conditions under which war becomes rational.

# Notes
>[!question]
>Wars are costly, and end with each side reaching a negotiated settlement which is preferable to war (since they settle).
>So why not go straight for negotiations and skip going to war?

3 explanations:
1. People are irrational <!--note: unsatisfactory-->
2. Leaders enjoy the benefits, only the population pays the cost
3. War is rational

Here we focus on the third option.

## Model 1.0
Assume that warring states are $A$ and $B$, with the set of possible outcomes parametrised by $X = [0, 1]$. $A$ prefers outcomes closer to $1$, B prefers outcomes closer to $0$.
Let the payoff functions for $A,B$ for outcome $x$ be $U_{A}(x), U_{B}(1-x)$, both functions of which are
- Continuous
- Increasing
- Weakly concave (this implies [[Concavity of Utility Functions\|risk averse or risk neutral]])

Set $U_{i}(1) = 1, U_{i}(0)=0$ w.l.o.g.
Then this scenario can be thought of as a territory war over the unit interval.

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data
## Text Elements
0
 
1
 
x 
A's gain 
B's gain 


</div></div>

If $p$ is the probability that $A$ wins, and $c_{A}$ is the cost of war for $A$, then the expected utility for $A$ is given by 
$$
p \cdot U_{A}(1) + (1-p)\cdot U_{A}(0) - c_{A}
$$
which combined with the assumptions reduces to 
$$
p - c_{A}.
$$
The same is true for $B$
$$
1 - p - c_{B} = 1 - (p + c_{B}).
$$

>[!info] There is always a negotiated alternative to fighting.

This is because of the costs of war, there is a bargaining range between $p-c_{A}$ (what $A$ expects to get - anything to the right of this is additional bonus) and $p + c_{B}$ (what $B$ expects to get - anything to the left of this is additional bonus).

![Political Economics-20241113172050308.webp](/img/user/Images/Political%20Economics-20241113172050308.webp)
>[!warning] Things to note
>States should know $p$ but they needn't know it exactly - unless the cost is very low.
>Risk aversion is not necessary for the result, but risk aversion makes the result stronger (and is a fair assumption for most military leaders).
>A continuous range of peaceful settlements (as in deals, rather than places) exists along the interval.

## Rational reasons for war
The above model seems to prove that going to war is not rational. But there may be instances where it is.
The first is in the case of differing estimates of $p$ removing the bargaining zone. Specifically, if $p_{A} + p_{B} > 1$ then one of the parties must be over optimistic in their estimate.

>[!example] Example: Russo-Japanese War (1904-1905)

### Model 1.1
Let $q$ be the status quo.
$A$ decides to make a final offer of $x$ (which may not be equal to $q$) and $B$ chooses whether or not to go to war.

Under the assumption of no private information, $A$ should offer $x = p+c_{B}$ since this is the expected utility for $B$.

But if $B$ does have private information that would reduce $p$, then $B$ should share it, since this will lower $A$'s offer (closer to $0$ is better for $B$).

### Model 1.2
Suppose that $B$ can announce a policy $f$, after which $A$ will make its offer $x$, and $B$ then chooses whether or not to go to war.

In this scenario, $B$ should always announce a policy that makes $p_{A} = 0$ to minimise the offer that $A$ makes.

Conclusion: $A$ should never believe any announcement $B$ makes, because $B$'s rational choice is to make the strongest possible policy announcement, regardless of reality.

>[!example] Example: Russo-Japanese War (1904-1905)
>Japan had modernised their military but Russia was unaware.
>Announcements that the military was modernised would not have been believed - but why not show them directly then?
>Because this can *lower* the value of $p$ because this information would have weakened Japan's superiority.

### Model 1.3
Suppose we have now a "first strike" model of war.
Let $p_{f}$ be the probability of $A$ winning if $A$ attacks first, $p_{S}$ if $A$ attacks second.
So $A$ must make an offer of $x > p_{f} - c_{A}$ in order to prefer not to attack first.
Also need that $x < p_{s} + c_{B} \iff 1-x > 1 - p_{s} - c_{B}$ for $B$ to prefer not to attack first.
So the bargaining range is $[p_{f} - c_{A}, p_{s} + c_{B}]$ for neither $A$ nor $B$ to attack first.
This might not exist, in which case there is no self-enforcing peaceful agreement.

>[!info] This is a model for nuclear war.

It characterises war as a commitment problem, where neither party can commit to not attacking first.