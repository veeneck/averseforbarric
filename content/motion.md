---
title: "Motion Graphics"
---

The term _motion graphics_ doesn't justify the help that Brian Campbell provided on this project. He began contributing in March 2015 as a video editor for cutscenes. That alone was huge. At the time, I had the story written and art for the scenes designed. I quickly stitched them together in iMovie to get a sense for pacing. Fortunately, Brian [does this stuff for a living](http://secretpowers.com) so he knew exactly what needed to happen to move things forward. Have a look at these two scenes side by side:

<figure class="nomargin" style="width:42%; display:inline-block;">
<div class="outtake">
<video width="100%" controls>
  <source src="/images/intruder_original_web.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<figcaption>Before Brian.</figcaption>
</figure>

<figure class="nomargin"  style="width:56%; display:inline-block;">
<video width="100%" controls>
  <source src="/images/Intruder_web.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<figcaption>After Brian.</figcaption>
</figure>

</div>

The improvement to the cutscene is obvious, but the gains didn't stop there. To get each cutscene to this point, Brian setup a process which improved the script, added placeholder voice for timing, rigged each scene, provided timing cues for music, added texture and animation, introduced natural camera easing, and more. This set the tone for the entire story, and because of it the cutscenes and script are one of the most complete apects of development right now. Short of refining the illustrations, the story is ready to go.

#### Special Effects

It became obvious while working on cutscenes that Brian's skills would apply to all aspects of motion in video games. Most things that you can rig up in After Effects can be exports as an image sequence or discussed in a way that the game and particle engine could render it. Because of this, I offered profit sharing in exchange for a few hours a week of consultation. He accetped, and we got to work.

<div style="float: right; width: 40%;">

<figure>
<video width="100%" controls>
  <source src="/images/bloodsample.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<figcaption>Experimenting with blood splatter.</figcaption>
</figure>

<figure>
<video width="100%" controls>
  <source src="/images/fire.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<figcaption>Isometric layering of spells.</figcaption>
</figure>

<figure>
<video width="100%" controls>
  <source src="/images/shield.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<figcaption>Sampling "resist" special effects.</figcaption>
</figure>

</div>

The first thing we realized is that it is much quicker to mock up effects than it is to code them. This allowed for plenty of experimentation and back-and-forth. Brian would set up an isometric scene in After Effects on top of a still image of the game. You can see examples in the videos to the right.

Working like this meant that Brian could break down an effect for me on a frame by frame basis. He could also show me how many layers were needed for an effect. Of those layers, he would break them into 2d vs isometric, and break them into image sequences. Finally, with a keyframe sequence, I could recreate the effect in the code.

After doing this process for _meteor_ and _resist_, we noticed the memory needed to store so many image sequences was going to be a problem. Fortunately, Brian's skillset saved me here too. It turns out that you can do **a lot** with simple tricks. Scale, rotation, blending, distortion and repitition are all easy ways to make something appear alive. For example, a blood splatter can be 3 small images, but when you rotate them, change their size and put minor distortions on them you can end up with 100's of possibile outcomes. This gives the appearance of randomness without being a memory hog.

Now, take all of that, sprinkle in a few thousand lines of code, and the scenes start coming to life. The battle below shows all of the features discussed above along with a few additional details.

<div class="outtake">
<figure class="nomargin" style="width:100%">
<video width="100%" controls>
  <source src="/images/combatupdate.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<figcaption>A battle after a first round of polish has been added.</figcaption>
</figure>
</div>

#### User Interface

Card slide?

#### General Consultation

Tilt shift?