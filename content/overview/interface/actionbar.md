---
title: "Combat UI"
section: "overview"
description: "Interface"
className: "interface"
---

The UI elements during a battle have to respect a few situations:

- They must be large enough for taps on mobile.
- They must be concise enough to avoid clutter on smaller screens.
- They must be quick enough for a series of complex actions to affect strategy.

With that in mind, I've broken down the major sections of the UI and explained the ideal way for them to operate. It's not out of the question to make a separate UI for different screen sizes, but designing with a mobile first emntality will ensure everything is covered.

<img src="/images/wiki/combatui.png?raw=true" width="100%" />

The best way to get an impression is to watch a gameplay video. After that, everything below should make more sense.

<h5><span class="circle" id="newgame">1</span> &nbsp;Unit Heraldry</h5>

The unit heraldry is such a small element on the screen but it packs in a lot of key information. The goal is that at a glance you can tell how damaged a unit is and if there is something to revive. It doesn't matter specifically if you can revive 3 or 5 units -- instead, it should tell you 33% of the squad is dead because you notice roughly 33% of the health bars are blacked out. Beyond that, the shape and color of the heraldry should become familair throughout the game, which makes selecting them easier. The heraldry will also act as the touch element for selecting a squad. Finally, status effects can alter the heraldry. For example, if a squad is fleeing, their traditional flag may be replaced a flee flag. Similarly, if an enemy unit is in range or out of sight, their heraldry display may change slightly to indicate that.

<h5><span class="circle" id="newgame">2</span> &nbsp;Stou's Abilities</h5>

Stou's abilities are the main source of player controlled magic in the game. The gameplay mechanic currently implemented is that Stou can only toggle between his 4 magic types by waiting for an amount of time to pass. For example, the player may choose aggressive and would be inflicting a lot of damage. They notice a squad is low health. They can't immediately switch to Protective to heal. There will be a delay. The player has to factor this into their decisions and try to anticipate scenarios. The actual icons will show the cooldown information. The 2 ability slots will change based on the active magic category.

<h5><span class="circle" id="newgame">3</span> &nbsp;Wave Indicator</h5>

The castle gate in the center is a way to bring a bit of life and interest to the UI. The idea is that the gate will slowly open as the next wave of enemies approaches. Once the wave is about to begin, the gate will be at the top and glow red on the inside. The wave starts and the gate slams down to repeat what just happened. Audio cues will be provided along the way. If additional wave information is needed, this area of the screen would be the place to display it.

<h5><span class="circle" id="newgame">4</span> &nbsp;Squad Abilities</h5>

When you select a squad, their abilities appear in this section. The card on the far right will be replaced with a new card that slides in and contains the heraldry of the newly selected squad. Each squad has up to 3 abilities. Some abilities change dynamically. For example, the attack icon stays as the attack icon until the unit is engaged in combat. Once in combat, game rules dictate that the unit can only leave combat if the enemy is dead, or if they wish to flee. So, the attack icon becomes useless -- it is instead replaced with a Flee icon. Likewise, an icon may show as locked if some game rule makes it an uneligble choice.

<h5>Other Considerations</h5>

Here are a few considerations that I've brainstormed to improve the current implementation:

* As Stou and units level up, make their icon housing slightly cooler based on their level.
* Make Stou's /  units card more elaborate also as it levels up.
* When Stou is casting, animate his card in some way.
* Make the card the thing you tap to change casting stance, and get rid of strategy button.
* Focus on gate opening UI and effects -- if that indicates the start of a wave, the player needs to know. Even more so if some of the spells will trigger when the next wave starts.
* Make two circles left and right of gate to indicate passive spells that are currently active.
  * Bonus: Slightly change appearance of gate / wall based on Stou's active spell category.