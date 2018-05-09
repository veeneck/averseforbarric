---
title: "Player Decisions"
description: "Decisions"
className: "decisions"
---

I wish I remember who I heard it from, but the idea was the players enjoy decisions. The more you can add, the better. To take it a step further, if a decision now can impact the game later, that's even better. There shouldn't be decisions just for the sake of decisions -- they should affect the story or gameplay in some way. That's the goal with the scene. Each time a decision is available (after combat, during travel, etc), this scene will be presented with a choice. The list of all decisions and when they are available is below.

<img src="/images/wiki/Decision.jpg" width="100%" style="margin-bottom: 25px" />

<span class="circle" id="newgame">1</span> **New Game : Magic Choice**

Black screen, Stou's image in bottom left.

> Stou, you've been learning magic for some time now. Has any specialization resonated with you?

Explain the 4 specializations. Player picks one, fade to black, start cutscene.

<span class="circle" id="warmachine">2</span> **War Machine**

Before Level 2 begins, prompt the user to make a choice.

> Sir, what should we construct to aid our ambush? The trebuchet scatters rocks over a wide range while the catapult deals direct, accurate damage.

Whichever the user selects gets added to the army.

<span class="circle" id="hand">3</span> **Helping Hand**

Decide between helping Melee3 or Flail1, and that unit will join your army just before Level 7.

> As you prepare to leave the town, you notice wounded soldiers regrouping. Do you want to help a nearby shield bearer carry his friend to the medic, or help calm a crazed flail-man over his presumed losses?

<span class="circle" id="diversion">4</span> **Cassandra Diversion**

After Cassandra tells Stou he needs to head to the border, she offers a parting gift.

> Stou, you'll need backup if you're going to survive. Please take some of my soldiers, or at least allow me to teach you [Randomize a Spell she can teach him]

Player picks, and either gets units, or a new spell for Stou.

<span class="circle" id="ranged">5</span> **Ranged Help**

Before Level 4 : Border, Stou will be given a choice between crossbowmen and longbowmen.

> You'll need some arrows to keep the waves at bay. Have a squad of mine. Longbowmen can shoot over obstacles at great distance. Crossbowmen don't shoot as far, but they sure do pack a punch.

Since the crazy enemy that charges into troops and explodes is introduced, the extra archers will help kill them before they can do major damage.

<span class="circle" id="spearmen">6</span> **Spearmen**

After Level 4 : Border, a decision level will appear on the world map (same as when Cassandra diverted Stou to border). Note: Have to decide if this is played out in the battle view, or just in Decision mode.

> A word, stranger? We're not sure why our brother are invading your lands, but we do not approve. Something evil is motivating them, and we hope to stop it. May we join your ranks?

If the user answers yes, they join. Otherwise, they follow, and automatically get added during the battle either midway through Level 5 : Desert or at the begging of Level 6 : Oasis by saying something along the lines of "We know you didn't trust us, so hopefully we can prove our loyalty and earn your trust."

<span class="circle" id="planning">7</span> **Siege Planning**

> It looks like enemy forces are controlling the city. We'll have to defeat them before the locals will provide us with information. In preparation, would you like to sharpen our arrows or our blades?

Permanent, +1 Strength to either archer class units or melee class.

<span class="circle" id="loot">8</span> **Loot City**

After combat, Stou has the option to loot the city.

> As you retreat from the city, you notice valuable artifacts in storefronts. Do you want to order your men to grab what they can, or leave the city folk and their belongings untouched?

Two potential outcomes to brainstorm here.

* Spearmen stay/go depending on decision.
  * If you loot, you get an item, a spell, food and gold. The food/ gold will allow you to strengthen existing forces. You'll need this to counter the fact that the spearmen now leave you since you're not honorable.

  * Spearmen respect you even more. A few more locals join your ranks. They offer you a spell of their knowledge?

* Rogues join your party earlier, and either spearmen / rogues stay go.

The big **if** here is whether or not rogues should join the party after level 5. And then, based on this choice, rogues stay if you loot, spearmen stay if you go. Have to decide if it's realistic to implement rogues as friendlies, and which is more fun.

<span class="circle" id="support">9</span> **Friendly Support**

Figure out a way to introduce Flail1 or Melee3. Maybe a decision from earlier in the game, and then that unit that you supported is waiting for you at border to help you? Need to add a melee unit here because Melee2 leave shortly.

<span class="circle" id="cassandra">10</span> **Cassandra Leaves**

Melee2 leaves the party.

<span class="circle" id="traps">11</span> **Traps**

> The steep, snowy terrain has slowed down your march. Enemy scouting parties will catch up any day now. Should we set up traps, or fortify our defenses?

Traps could make the enemy spawn damaged, or even have a visual like snow falling. Fortify could put barriers down that the enemy has to break, or increase defense.

<span class="circle" id="giant">12</span> **Giant**

Some sort of decision that would allow the giant to join your party. Ideas:

* In combat, hint that you shouldn't kill the giant. If you do, you get cool loot. If you leave him alone, he'll attack the enemy, and join you after the battle.

* Same concept, but just in the decision screen. After battle, notice giant is wounded. Heal him and leave, or finish him off. Rewards are the same.