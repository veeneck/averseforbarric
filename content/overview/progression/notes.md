---
title: "Units & Their Progression"
section: "overview"
---

Unit progression is a tricky topic and requires a lot of play testing to truly balance it. So, to start, I'm approaching it at a basic level that has room to be tailored. The order in which [Friendly Units](/overview/progression/friendly/), [Enemy Units](/overview/progression/enemy/) and [Boss Units](/overview/progression/boss/) appear is fairly though out, but their attributes and abilities are currently in a basic state.

The overall goal is for Stou (the player) to be the deciding factor. Stou's magic abilities will strongly influence strategy, so that is the primary influencer of unit attributes. Beyond that, unit vs unit strategy would be the next priority. For example, specifically attacking a unit that has a weakness to the attacker should be worthwhile. If Stou is out of mana or on cooldown, those unit vs unit decision will make an impact.

### Attributes

This first pass on unit attributes is simple. Below is a sample point spread for a fake unit.

|  Attack  | Strength | Quickness | Defense | Agility | Magic | Hitpoints | Speed | Morale |
|:--------:|:--------:|:---------:|---------|---------|-------|-----------|-------|--------|
| Slashing | 10       | 5         | Blunt   | 5       | 5     | 100       | 50    | 100    |

<div class="attributes">

<div class="attribute">
	<img src="/images/wiki/icons/stat_slashing.png" width=48" />
	<b>Attack</b>
	<p>The type of attack. Slashing, Blunt, Piercing, Magic</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_strength.png" width=48" />
	<b>Strength</b>
	<p>The strength of the attack. 10 str would do 10 damage if it hits.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_quickness.png" width=48" />
	<b>Quickness</b>
	<p>The delay between attacks in seconds.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_defense.png" width=48" />
	<b>Defense</b>
	<p>Attacks do 5% less damage for each point assigned.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_agility.png" width=48" />
	<b>Agility</b>
	<p>Percentage chance to dodge or block a physical attack.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_magic.png" width=48" />
	<b>Magic</b>
	<p>Chance to resist a magic attack, also benefit to positive magic.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_health.png" width=48" />
	<b>Hitpoints</b>
	<p> Max amount of hit points prior to buffs.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_walkingspeed.png" width=48" />
	<b>Speed</b>
	<p>Walking speed.</p>
</div>

<div class="attribute">
	<img src="/images/wiki/icons/stat_morale.png" width=48" />
	<b>Morale</b>
	<p>Ability to resist fear and fleeing checks.</p>
</div>

</div>

### Leveling Up

<figure style="float: right; width: 40%;">
<img src="/images/wiki/icons/unit_upgrades.png" width=100%" />
<figcaption>The 4 upgradeable categories.</figcaption>
</figure>

Because this game was design as a mobile game first, and the budget dictated a ~2 to 3 hour play time, the level up tree has to be condensed. My first experiment to do this is to combine attributes above into 4 different categories:

_**Fortitude**: Impacts Hitpoints, Defense, Morale_

_**Agility**: Impacts Agility, Walking Speed, Attack Speed (Quickness)_

_**Strength**: Impacts Damage, Attack Range_

_**Magic**: Impacts magic resistance, magic aptitude_

This simplification also helps balance the game since we're now looking essentially looking at 4 strategies. Each strategy can be upgraded up to 5 points, as shown in the picture to the right. An example of the scale would be:

**Hitpoints**
100, 150, 200, 250, 300

**Strength**
10, 15, 20, 25, 30

In that simple example, a unit with 1 STR and 4 HP would have 250 hit points and 10 attack damage. Likewise, a unit with 3 STR and 2 HP would have 20 attack damage and 150 HP.

- Unit 1 would kill unit 2 in 15 attacks.
- Unit 2 would kill unit 1 in 13 attacks.

With this approach, the key would be to balancing the point spread. Higher STR units can kill quicker, but at range archers and magic would pick them off easier. If the player can be pushed into using high HP units to tank, and high STR units to flank, that creates a valid strategy.

If two evenly matched units fight, a small bonus in agility or armor resistance would account for the edge.