---
{"dg-publish":true,"permalink":"/Zettelkasten/Overseas Student Loan Repayments/","tags":["information"],"noteIcon":1,"created":"2024-12-11T11:09:19.413+09:00"}
---


>[!note]
>This information assumes a Plan 2 Student Loan (one that was taken out between [2012/09/01 - 2023/07/31](https://www.gov.uk/government/publications/overseas-earnings-thresholds-for-plan-2-student-loans) for Student Finance England).

# What you pay
Every country has a [lower earnings threshold](https://www.gov.uk/government/publications/overseas-earnings-thresholds-for-plan-2-student-loans). Any income earnt above this threshold will be subject to student loan repayments of 9%.
The exchange rate is fixed for a given financial year, and is also found on the above site.

>[!example]
>Suppose I live in Japan, and earn a salary of ¥5,000,000. Using the exchange rate *published on the website*, this equates to £28,770.
>The lower threshold is £21,840 which means that I earn £28,770 - £21,840 = £6,930 above this threshold.
>9% of this is £623.70 which is what I have to pay back for that year.
>
>Remember that repayments are made in GBP directly, so if considering how much this is in JPY, the exchange rate that *I can actually buy* GBP at is the relevant one.


# Upper earnings threshold
The upper earnings threshold is used to determine the interest added to the student loan that year.
Basically the interest paid can be thought of as a piecewise function. 
$$
\text{interest}(\text{income}) =
\begin{cases}
\text{RPI} & \text{income} \leq \text{LET} \\
\text{RPI} + \frac{\text{income - LET}}{\text{UET} - \text{LET}} \times 3 & \text{LET} < \text{income} < \text{UET} \\
\text{RPI} + 3  & \text{income} \geq UET
\end{cases}
$$
The fact that the scaling is linear is based on [this Reddit comment](https://www.reddit.com/r/UKPersonalFinance/comments/16mz6u1/comment/k1w8w7k/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button). At the [bottom of the page](https://www.gov.uk/government/publications/overseas-earnings-thresholds-for-plan-2-student-loans) it says "We *normally* use the lower earnings threshold and the upper earnings threshold to work out how much interest to apply to your balance (RPI plus up to 3%)" (emphasis mine). So who knows what they really do.