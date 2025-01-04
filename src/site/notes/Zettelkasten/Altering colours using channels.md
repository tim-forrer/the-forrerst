---
{"dg-publish":true,"permalink":"/Zettelkasten/Altering colours using channels/","tags":["colour-model","photography","guide"],"noteIcon":2,"created":"2024-11-03T10:48:57.412+09:00"}
---

The aim of this article is to explain how to manipulate colours in a digital image to enhance colour harmonies.
A popular colour harmony is teal/orange, so that's the one used as the recurring example.

Most of this note is self-contained, but you might want to look at these notes if any parts are unclear.

| Note                                                                   |
| ---------------------------------------------------------------------- |
| [[Zettelkasten/Colour Models - Channels\|Colour Models - Channels]] |
| [[Zettelkasten/Colour Models\|Colour Models]]                       |

{ .block-language-dataview}

# How can we describe colour? - A (shallow) dive into colour models
We'll save the philosophical question for another article[^4] and focus on the practical side of the question - specifically, how can computers describe colours?

As an extremely rough description, computers can only deal with numbers - binary ones to be specific. Colours are not numbers.[^5] So smart people came up with colour models which basically assign lists of numbers to colours. Computer software just works on the numbers, and at the end the screen is able to show colours that correspond to the numbers.

There are a variety of colour models but a particularly relevant one for digital displays is the RGB (red, green, blue) colour model - so called because every colour in RGB is described by a list of three numbers, or *channels*, a red channel, a green channel, and a blue channel.

For brevity I'll refer to a single list of a red, green, and blue channel as an *RGB number*.
## Examples of colours in RGB
As an example, a pure, fully saturated[^2] red is given by $(255, 0, 0)$.[^3]
![Altering colours using channel-20241103111919746.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103111919746.webp)

Here's a slightly darker red, made darker by reducing the red channel.
![Altering colours using channel-20241103230207159.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103230207159.webp)

And here's an example of a colour made by having various amounts of each colour to each channel.
![Altering colours using channel-20241103111701271.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103111701271.webp)
# Channel manipulation
An image file essentially a large collection of RGB numbers, one for each pixel in the image. Ordinarily, computers faithfully report the RGB numbers contained in the file, so the output of each pixel is the same as the colour contained in the file. But some software, such as GIMP (an image editor), can do a bit of "creative interpretation" when reporting the file's RGB numbers to the pixels.

For example, it can take the red channel, and use that value in the blue channel instead.
![Altering colours using channel-20241103112228608.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103112228608.webp)
Note that the input RGB number hasn't changed - the input red value is still $255$. The software is just telling the screen the colour is $(0, 0, 255)$ instead.

## Removing colour
We can take advantage of this to eliminate unwanted colours in an image, and just leave desired ones instead.

Below is an image of overlapping circles consisting of only red, only green, and only blue.
![Altering colours using channel-20241103174227453.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103174227453.webp)
Suppose now I don't want any green, so I tell GIMP to ignore any green values, and determine a pixel's colour only by it's red and blue values.
![Altering colours using channel-20241103174338178.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103174338178.webp)

Note how the pure green has gone black (black is represented by $(0, 0, 0)$ in RGB), and the other areas which had green in (like yellow) are now the same colour as areas with no green at all and the same values of red and blue.

## Maintaining white
If you do this in a photo though to get rid of green pixels, it'll look horrendous, because what was white is now magenta. To make the colour manipulation more "natural", ideally we still want white areas to look white.

To make white, we need green, so one strategy is to add green back to an RGB number based on the number's red or blue value.
For example, if the red channel of an RGB number has value $r$, we can ask GIMP to set the green channel to *also* equal $r$.
![Altering colours using channel-20241103174921731.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103174921731.webp)
See how all the formerly red area is now yellow $(255, 255, 0)$, and the magenta area is now white, because it's had the green re-added via the red.

## Teal/orange - remove input green
This is ok, but we didn't want a blue/yellow output, we wanted a teal/orange one. How can we get this?

Well, rather than requiring that a pixel with red value $r$ also has a green value $r$, we can dial it down a bit and make it have say, $0.3r$ (orange is a mix of red with a dash of green).
![Altering colours using channel-20241103175017480.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103175017480.webp)
To finish off the balancing act and get pure white in the intersection again, we can similarly ask that pixels with a blue value of $b$ have a green value of $0.7b$, so that overall if $r=255=b$ then the green added to the pixel will also be $0.3 \times 255 + 0.7 \times 255 = 255$ - in other words, the intersection will now be white again!
![Altering colours using channel-20241103175133726.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103175133726.webp)

## Teal/orange - remove input blue
Suppose instead I want to reduce input blues to $0$ to make the teal/orange look. This is done by similar methodology, tell GIMP to remove all input blue values, and re-introduce blue through the input greens and reds.

![Altering colours using channel-20241103185528270.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103185528270.webp)
The shades of orange and "teal" are slightly different, since adding green to any red means it's a good idea to take a little bit of green out of the green channel to preserve the overall output green to be $1$ when they overlap. For example, if the green value is $g$, alter the RGB number so that the output green value is $0.5g$.

## Teal/orange - mapping blue to grey
There's one other way to generate orange which is a bit more tricky. We can neutralise the blue by mapping it to grey - rather than black - and compensate other colours accordingly.
![Altering colours using channel-20241103192549900.webp|400](/img/user/Images/Altering%20colours%20using%20channel-20241103192549900.webp)
The steps are as follows:
1. Map blue to grey by ensuring that input blue is mapped evenly to $0.5$ red, $0.5$ green, $0.5$ blue.
2. Now to make orange, need to remove blue from the intersection of red and blue. Do this by setting the output blue from input red to $-0.5$.
3. Finally adjust channels so that intersection of all three colours sum to an output of $1$ in each channel.

It's helpful to have a table to illustrate the final changes.

|          | $R_{out}$ | $G_{out}$ | $B_{out}$ |
| -------- | --------- | --------- | --------- |
| $R_{in}$ | 0.5       |           | -0.5      |
| $G_{in}$ |           | 0.5       | 1         |
| $B_{in}$ | 0.5       | 0.5       | 0.5       |

Note that the maximum output of each channel (found by summing the columns) gives $1$, so the intersection of all three gives pure white.

Now that you've made it this far, I'll let you figure out how to manipulate the red into a shade of orange if you'd like all the reds to be a shade of orange.

# Further resources
This article was based on [this video](https://www.youtube.com/watch?v=X7GLa-2h4Po&t=505s) by [[Boris Hajdukovic\|Boris Hajdukovic]] - specifically the chapter "How to get orange with the channel mixer".
In that video you can see his explanation for what I've written above - and see some examples of how the different methods can be applied to different photos.

[^2]: I'm not actually sure if these are the right descriptors, but basically I mean the "reddest" red that is describable with this colour model.
[^3]: The reason for $255$ representing the maximal possible value is because each colour is specified by an 8-bit number so there biggest (decimal) number this can represent is $2^{8} - 1 = 255$.
[^1]: Technically this won't appear on the screen because colours with values of more than $255$ in any channel don't exist, so the values get reduced to the maximum, but it makes other manipulations harder to understand.
[^4]: #todo
[^5]: Well ok they sort of are if you want to say that a wavelength is a number, but some colours are not - white famously is a combination of many wavelengths.