---
title: "Aggressive Spells"
description: "Magic"
className: "magic"
---

<img align="left" src="/images/abilities/icon_Aggressive.png?raw=true" class="unit" /> **High damage, low control, low debuffs, low healing.**

Aggressive spells are meant to kill the enemy before they can kill you. This is done by direct damage, or by increasing the damage your units can do. The spells also compliment one another, so that when stacked can do massive damage. Drawback will be along the lines of damaging friendly units, creating unpredictable outcomes, or some other negative consideration. All of the spells use Fire as the element. 

##### Phoenix
|   |              Level 1              |                        Level 2                        |                           Level 3                          |
|---|:---------------------------------:|:-----------------------------------------------------:|:----------------------------------------------------------:|
| <img class="unit" src="/images/abilities/icon_Pheonix.png?raw=true" width="120" />  | Dead units damage engaged target. | Dead units heal friendlies and damage engaged target. | 25% chance of reviving dead units from the squad + Level 2 |
| Implemented | ✅ | ✅ | ✅ |

**_Notes_**: Adds a small amount of healing and revival to an aggressive caster, but is still in character.




##### Fireball
|   |              Level 1              |                        Level 2                        |                           Level 3                          |
|---|:---------------------------------:|:-----------------------------------------------------:|:----------------------------------------------------------:|
| <img class="unit" src="/images/abilities/icon_Fire.png?raw=true" width="120" /> | DoT fire damage | Stronger DoT, 20% chance to deal 100 direct damage, +10 Fear | Stronger DoT, 30% chance to deal 125 direct damage, +20 Fear |
| Implemented | ✅ | ✅ | ✅ |


**_Notes_**: This spell should cause the most damage in the game. Hard part will be balancing the casting time to not make it overpowered.



##### Rage
|   |              Level 1              |                        Level 2                        |                           Level 3                          |
|---|:---------------------------------:|:-----------------------------------------------------:|:----------------------------------------------------------:|
| <img class="unit" src="/images/abilities/icon_Rage.png?raw=true" width="120" /> | +5 attack strength, -5 defense. | +10 attack, no negative towards defense. | Quick, massive damage but may die in flames. |
| Implemented | ⬜ | ⬜ | ⬜ |


**_Notes_**: This gives units a chance of survival when they are outmatched. Since it is hard to heal in aggressive stance, this provides a fallback.



##### Flamestrike (passive)
|   |              Level 1              |                        Level 2                        |                           Level 3                          |
|---|:---------------------------------:|:-----------------------------------------------------:|:----------------------------------------------------------:|
| <img class="unit" src="/images/abilities/icon_Flamestrike.png?raw=true" width="120" />   | Melee friendlies randomly add fire DoT to attack. | + Ranged friendlies. | + War machine friendlies. |
| Implemented | ⬜ | ⬜ | ⬜ |


**_Notes_**: Combined with Rage, or with a Trebuchet, this has the potential to do a huge amount of damage. Goal is to find what percentage of occurrences is fun but not overpowered.



##### Determined (passive)
|   |              Level 1              |                        Level 2                        |                           Level 3                          |
|---|:---------------------------------:|:-----------------------------------------------------:|:----------------------------------------------------------:|
| <img class="unit" src="/images/abilities/icon_Determined.png?raw=true" width="120" /> | 5% decrease in spell cool down | 10% spell cool down | 15% spell cool down |
| Implemented | ⬜ | ⬜ | ⬜ |


**_Notes_**: Allows the player to cast more frequently, which significantly increases damage output.