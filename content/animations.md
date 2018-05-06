---
title: "Animations"
---

I began working with [Liron Peer](http://www.lironpeer.com) in late 2014 on character animations. Of all the specialties, finding an animator who could work on isometric material was the biggest challenge. I spent over $1,000 on trial runs through various animators with no luck. Once I found Liron and she nailed her first attempt, we jumped straight in to the entire contract. In total, she produced over 1,000 hand drawn frames. Here are a few of them:

<div class="animationFavs">
<div class="crossbow">&nbsp;</div>
<div class="ryler">&nbsp;</div>
<div class="idiri">&nbsp;</div>
</div>
<div class="animationFavs secondRow">
<div class="spearmen">&nbsp;</div>
<div class="rhino">&nbsp;</div>
<div class="trebuchet">&nbsp;</div>
</div>

Now, I did place quite a few limitations on Liron. First, almost all of the animations had to be 8 frames. We made exceptions for a few to reach 12 frames. Second, most of the characters are only 64x64 pixels so a lot of details will be lost. Third, each animation must be a full cycle and the characters feet must return to the same position or stay completely still.

#### Isometric Pains

<div class="squad">
<div class="melee1 a">&nbsp;</div>
<div class="melee1 b">&nbsp;</div>
<div class="melee1 c">&nbsp;</div>
<div class="melee1 d">&nbsp;</div>
<div class="melee1 e">&nbsp;</div>
<div class="melee1 f">&nbsp;</div>
</div>

The tricky part to an isometric world is animating each direction. Because these aren't 3d models, 360 degree walking is not possible. And because this project had a fixed budget, even 8 directions was not possible. So, we're left with our 4 diagonals. Then, if left is just a flipped image of right (not correct, but passable at small scales), we only need 2 animations per unit: south east and north east. 

The other aspect of isometric that is hard is how projectiles work. For some things like arrows, a small flat line at tiny army scale appears and disappears quickly enough that users won't be able to tell it's not proper perspective. Large projectiles like rocks, on the other hand, require custom math to fit into a pseudo 3d world. This sort of complication led to one of the [custom easing functions I am most proud of](https://gist.github.com/veeneck/8a12a23f673d410359ca96b8978a913f).

#### Make Use of What You've Got

One thing Liron was great at was maximizing the potential of such restrictive rules. Let's take a look at two animations:

<div class="animationFavs">
<div class="idiri idiriMargin">&nbsp;</div>
<div class="cat">&nbsp;</div>
</div>

For the spinning attack, frames 5 though 7 are an isolated spin cycle. If I wanted the unit have a special move that allowed her to spin through an enemy squad for 6 seconds, I would just have to loop through those 3 frames repeatedly. Then, on completion, play the final 2 frames for the unit to come to rest.  A similar concept is going on with the cat (a freebie Liron through in for me to represent my cat, Mickey). If you look closely, the first animation is sit. Played in reverse we have stand. Then, tail wag. Then, paw lick. It looks like one animation, but it provides quite a few combinations when broken apart.

#### Thanks, Liron

Liron's discipline was a welcome addition to the project. I gave her all files broken apart with notes, and she returned the properly positioned, high quality frames along with preview gifs. Everything was done orderly, promptly and correctly. I would highly recommend working with her. Any changes were listened to and fixed. Like all of the other contractors I worked with, I hope to have an excuse to work with Liron again someday.