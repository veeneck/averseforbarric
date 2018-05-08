---
title: "Progression Overview"
section: "overview"
---

### Gameplay Progression

TODO

### Unit Progression

The main aspect to unit progression is how they are revealed, and how the compare to other units. When comparing two units, a few factors make up the comparison:

- If ranged:
  - How far away are they from the target?
  - Does the unit ignore line of sight?
- Magic currently helping / hurting the unit.
- Attack strength vs armor weakness
- Amount of units in the squad
- Morale / likelihood to flee

Because there are so many moving parts, it's impossible to fully compare units. The end goal is to make the player, Stou, the deciding factor. Because of that, unit differences will mostly be minor unless specifically pointed out to the player. In the current iteration, each unit has a table like this:

|  Attack  | Strength | Quickness | Defense | Agility | Magic | Hitpoints | Speed | Morale |
|:--------:|:--------:|:---------:|---------|---------|-------|-----------|-------|--------|
| Slashing | 10       | 5         | Blunt   | 5       | 5     | 100       | 50    | 100    |

**Slashing**: The type of attack. Slashing, Blunt, Piercing, Magic

**Strength**: The strength of the attack. 10 str would do 10 damage if it hits.

**Quickness**: The delay between attacks in seconds.

**Defense**: If empty, not defense bonus. If present (i.e.: Slashing) then slashing attacks do 5% less damage for each point assigned.

**Agility**: Percentage chance to dodge or block a physical attack.

**Magic**: Chance to resist a magic attack, benefit to positive magic (i.e.: healing does more per tick).

**Hitpoints**: Max amount of hit points.

**Speed**: Walking speed

**Morale**: Ability to resist fear and fleeing.

### Leveling Up

Unit stats are simplified into four categories:

**Fortitude**: Impacts Hitpoints, Defense, Morale

**Agility**: Impacts Agility, Walking Speed, Attack Speed (Quickness)

**Strength**: Impacts Damage, Attack Range

**Magic**: Impacts magic resistance, magic aptitude

Because the end goal is to simplify leveling up into these four categories, and each category can have a ranking of 1-5 ticks, one way to balance units would be by making a 1 to 5 scale. For example:

**Hitpoints**
1. 100
2. 150
3. 200
4. 250
5. 300

**Strength**
1. 10
2. 15
3. 20
4. 25
5. 30

In that simple example, a unit with 1 STR and 4 HP would have 250 hit points and 10 attack damage. Likewise, a unit with 3 STR and 2 HP would have 20 attack damage and 150 HP.

- Unit 1 would kill unit 2 in 15 attacks.
- Unit 2 would kill unit 1 in 13 attacks.

With this approach, the key would be to balancing the point spread. Higher STR units can kill quicker, but at range archers and magic would pick them off easier. If the player can be pushed into using high HP units to tank, and high STR units to flank, that creates a valid strategy.

If two evenly matched units fight, a small bonus in agility or armor resistance would account for the edge.