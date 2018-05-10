---
title: "Camp"
section: "overview"
description: "Interface"
className: "interface"
---

The idea behind the Camp scene is that every squad based action can be handled here. Recruit units, upgrading units, healing units, equipping items and assigning a hero to the squad. The other goal was for each action to have an immediate visual effect. For example, if you recruit a new Lemon Knight, the squad should be visible, centered on the screen and the new unit should briefly walk to join the squad. Lastly, the idea of showing the player how much more there army can grow lends itself to an excitement of whats to come.

As the player makes progress, the Camp will slowly change. Buildings will be added, tress removed, and so on. By the end of the game, the player should feel like they have a sizeable army under their control.


<div class="camp">
	<figure>
		<img src="/images/wiki/camp1.jpg?raw=true" width="100%"  />
		<figcaption>Camp Stage 1</figcaption>
	</figure>
	<figure>
		<img src="/images/wiki/camp2.jpg?raw=true" width="100%"  />
		<figcaption>Camp Stage 2</figcaption>
	</figure>
</div>

##### Implementation

<img src="/images/wiki/huts.png?raw=true" align="right" class="unit" />

As far as implementation goes, there are 4 base camp scenes that correspond to levels 1, 4, 7 and 10. For other levels, there are building overlays that have a spot to be placed on the base camp scene. Squads and heros will not be displayed until they are acquired by the player. So, the 5 podiums in the center are a clear indicator that there are 5 heros to be found.

