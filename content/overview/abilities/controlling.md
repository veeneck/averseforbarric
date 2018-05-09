---
title: "Controlling Spells"
description: "Magic"
className: "magic"
---

<img align="left" src="/images/abilities/icon_Controlling.png?raw=true" class="unit" /> **Moderate damage, high control, moderate debuffs, low healing.**

Controlling spells will probably be the most difficult to play. They will requires more switching between spell categories. For example, mesmerize a unit, then switch to Protective and play for awhile, then switch back to Controlling. They also have wave based triggers (wave starts, heal units), so the player will have to switch at the correct timing. All of the spells use Wind / Mind as the element. 

##### Agony
|   |         Level 1         |         Level 2         |                      Level 3                      |
|---|:-----------------------:|:-----------------------:|:-------------------------------------------------:|
| ![](/images/abilities/icon_Agony.png?raw=true)  | Reduce unit attributes. | Reduce attributes + DoT | Reduce attributes, DoT, random chance to explode. |
| Implemented | ✅ | ⬜ | ⬜ |

_**Notes**_: Main damage spell for this line. Explosion is easier to animate across the board. Experiment with balancing reduction of attributes.


##### Mesmerize
|   |                     Level 1                     |                          Level 2                          |                                 Level 3                                |
|---|:-----------------------------------------------:|:---------------------------------------------------------:|:----------------------------------------------------------------------:|
| ![](/images/abilities/icon_Mesmerize.png?raw=true)  | Slow down the targets walking and attack speed. | Temporarily put the enemy to sleep until it takes damage. | Mez has a chance to charm the enemy, which converts them to your side. |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: Figure out optimal mesmerize time, and if it can be allowed during combat. Or, does level 2 not stack with level 1?


##### Alter Spell
|   |                 Level 1                 |                      Level 2                     |                         Level 3                        |
|---|:---------------------------------------:|:------------------------------------------------:|:------------------------------------------------------:|
|  ![](/images/abilities/icon_AlterSpell.png?raw=true) | Remove negative modifiers from a squad. | Remove modifiers + resist next spell for a time. | Remove modifiers + Reflect next spell to random enemy. |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: Have to play with reflect and which spells are eligible.


##### Stand your Ground (passive)
|   |       Level 1       |                          Level 2                          |                                Level 3                               |
|---|:-------------------:|:---------------------------------------------------------:|:--------------------------------------------------------------------:|
| ![](/images/abilities/icon_StandGround.png?raw=true)  | 5% morale increase. | 10% morale increase, and 20% HP heal when wave has ended. | 15% morale increase, 30% HP heal and 30% revive when wave has ended. |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: This is a fun spell because you have to time it when the wave ends. It also gives the cool feeling of being about to lose, and then your entire. army getting a boost.


##### Elixir (passive)
|   |                   Level 1                  |                     Level 2                    |                  Level 3                  |
|---|:------------------------------------------:|:----------------------------------------------:|:-----------------------------------------:|
| ![](/images/abilities/icon_Elixir.png?raw=true)  | Random buff to all units when wave starts. | Random debuff to all enemies when wave starts. | +10% effectiveness to Controlling spells. |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: I don't love the level 3 status, but I do like level 1 and level 2 being based on waves.