---
title: "Technical Notes"
---

A place to store random tech notes for reference when designing things.

### Modifiers

There are a few types of modifiers in the game, and they are all applied in different ways. Here's the breakdown of how a unit might get a modifier applied to it.

* **Spell Modifiers**: Each spell applies a modifier to the target squad / units and this can be overridden on the spell level. Spells are abilities, and they should process ability modifiers the same way combat modifiers do, but they currently don't.

  * TODO: If combat modifiers check the squad to increase attack power, shouldn't spell modifiers check the squad to increase spell power? Brainstorm.

* **Combat Modifiers**: Each squad has an attack ability. Instead of making 30 different attack abilities, they all use the same one, and just have a modifier applied to tweak it. This is tired at the squad level, and units reference it each time they attack.

  * TODO: Unlike squad modifiers that copy the modifier to the unit, units reference the squad for ability modifiers. Inconsistent.

* **AoE Modifiers**: Some abilities use a AoE to determine who is hit, and apply the modifier from that route. In the code, this is done though physics contacts, and not triggered through the UI.

  * TODO: Currently only applies base modifiers with no way to dynamically change modifier values.

* **Squad Modifiers**: The squad stores the modifiers locally, and each time a unit joins the squad the modifier is applied to the unit. __Example__ A level 2 squad gives +5 attack to all units.

  * TODO: See if it would be better to have units reference the squad "Hey should I change this value" instead of storing copies on the unit?

* **Passive Modifiers**: Not implemented yet. But, they will either be global, or sit on the Leader object. Global has advantage of being a common reference point. On Leader has the benefit of working with existing modifier code.

***

I'm thinking that since everything uses Modifiers, they aren't specific to unit, squad, spell, etc. Probably makes sense to do a **ModifierService** that has methods like:

`applyModifiersToUnit(unit:FKUnitEntity, modifiers:[Modifiers], appliedBy:FKSquadEntity], origin:CGPoint)`
`applyModifiersToSquad(unit:FKSquadEntity, modifiers:[Modifiers], appliedBy:FKSquadEntity], origin:CGPoint)`

With each possible helper function to apply modifiers. Specifically, the service can look at all global, squad based, and unit based modifiers to adjust the actual value of the modifier before applying it to the unit. It can also handle stacking rules, and so on. Just one spot for logic to apply modifiers.