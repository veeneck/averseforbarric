---
title: "Watchful Spells"
description: "Magic"
---

<img align="left" src="https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Watchful.imageset/icon_Watchful.png?raw=true" /> Watchful spells are well balanced. They should be able to heal units, buff units, resist damage, do damage, and offer crowd control.

All of the spells use Nature as the element. 

**Moderate damage, moderate control, moderate debuffs, moderate healing.**

***

### Regen
|   |              Level 1             |                                Level 2                                |                               Level 3                              |
|---|:--------------------------------:|:---------------------------------------------------------------------:|:------------------------------------------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Regen.imageset/icon_Regen.png?raw=true)  | Heal a unit for 25 HP every tick. | Purify negative effects on unit when cast. | Heal for 50 each tick and 50% chance a unit will revive after it has been killed while Regen is active. |
| Implemented | ✅ | ✅ | ✅ |

_**Notes**_: Main way to heal, and brings minor revive to Watchful spells.

***

### Haste
|   |         Level 1         |           Level 2           |             Level 3             |
|---|:-----------------------:|:---------------------------:|:-------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Haste.imageset/icon_Haste.png?raw=true)  | +40 Walking Speed for 10 seconds. | 50% increase to Attack Speed. | 50% chance to double attack. |
| Implemented | ✅ | ✅ | ✅ |

_**Notes**_: Faster moving units can close down threats quicker. Increased attack will do massive damage.

***

### Thorn Trap
|   |               Level 1              |             Level 2            |                             Level 3                            |
|---|:----------------------------------:|:------------------------------:|:--------------------------------------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Trap.imageset/icon_Trap.png?raw=true)  | Trap roots an enemy for X seconds. | Trap roots and adds poison DoT | Root, poison + chance for ground to open up and swallow enemy. |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: Great spell, but have to make sure it isn't more controlling than Mesmerize, and doesn't do more damage than Fireball.

***

### Scout (passive)
|   |                    Level 1                   |        Level 2       |              Level 3             |
|---|:--------------------------------------------:|:--------------------:|:--------------------------------:|
|  ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Scout.imageset/icon_Scout.png?raw=true) | See upcoming enemy types and time remaining. | See invisible units. | Preempt enemy attacks, +10 dodge |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: Have to see who fun it is having to switch to Watchful stance to see upcoming spawns. Also, is Level 3 compelling enough to want to upgrade this branch?

***

### Training (passive)
|   |          Level 1          |               Level 2              |               Level 3              |
|---|:-------------------------:|:----------------------------------:|:----------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Focus.imageset/icon_Focus.png?raw=true)  | +Accuracy for Melee units | +Accuracy + Range for Ranged Units | +Accuracy + Range for War Machines |
| Implemented | ⬜ | ⬜ | ⬜ |

_**Notes**_: A Trebuchet that can fire further and is more likely to hit could be one of the more overpowered options.