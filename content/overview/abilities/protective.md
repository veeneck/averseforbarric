---
title: "Protective Spells"
description: "Magic"
---

<img align="left" src="https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Protective.imageset/icon_Protective.png?raw=true" /> Protective spells are meant to keep your friendlies alive. This is done by direct healing, revival, or by limiting the amount of damage an enemy can do. Crowd control is minimal, with Smite being the only hope of Fear / Stun in a hard fight.

All of the spells use Water / Magic as the element. 

**Low damage, low control, low debuffs, high healing.**

***

### Heal
|   |           Level 1          |        Level 2        |                      Level 3                      |
|---|:--------------------------:|:---------------------:|:-------------------------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Heal-1.imageset/icon_Heal.png?raw=true)  | Heal units for 25HP. | +50HP, +25HP Regen | 100HP, 50HP Regen, Indestructible for 5 seconds. |
| Implemented | :white_check_mark: | :white_check_mark: | :white_check_mark: |

_**Notes**_: Main method of keeping units alive.

***

### Hammer
|   |     Level 1    |                   Level 2                   |                  Level 3                 |
|---|:--------------:|:-------------------------------------------:|:----------------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Hammer.imageset/icon_Hammer.png?raw=true)  | Direct damage. | Direct damage + ground AoE. Can cause fear. | Direct damage, + AoE stun for 3 seconds. |
| Implemented | :white_large_square: | :white_large_square: | :white_large_square: |

_**Notes**_: Just healing is boring. Gives a way to have some fun with damage, and a bit of crowd control.

*** 

### Revive
|   |                  Level 1                  |                  Level 2                  |                                 Level 3                                |
|---|:-----------------------------------------:|:-----------------------------------------:|:----------------------------------------------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Revive.imageset/icon_Revive.png?raw=true)  | Revive 25% of killed units & heal 50HP. | Revive 50% of killed units & heal to 75HP. | Revive 75% of killed units to 100HP and make them indestructible for 5 seconds. |
| Implemented | :white_check_mark: | :white_check_mark: | :white_check_mark: |

_**Notes**_: Super powerful, so will need long cool down. Goal is to make player find optimal time to use this.

***

### Absorb (passive)
|   |                Level 1               |             Level 2            |                   Level 3                   |
|---|:------------------------------------:|:------------------------------:|:-------------------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Absorb.imageset/icon_Absorb.png?raw=true)  | 5% of non spell damage is discarded. | 5% of all damage is discarded. | 5% of all damage heals the affected target. |
| Implemented | :white_large_square: | :white_large_square: | :white_large_square: |

_**Notes**_: Stacking spell that when combined with Regen based heals will make units very hard to kill.

***

### Purify (passive)
|   |               Level 1              |                  Level 2                  |              Level 3              |
|---|:----------------------------------:|:-----------------------------------------:|:---------------------------------:|
| ![](https://github.com/veeneck/BarricAssets/blob/master/Gameplay.xcassets/ActionBar.spriteatlas/icon_Purify.imageset/icon_Purify.png?raw=true)  | Healing spells heal for 5% more HP | Healing DoT's tick time is reduced by 10% | Revive can target 10% more units. |
| Implemented | :white_large_square: | :white_large_square: | :white_large_square: |

_**Notes**_: Somewhat boring, but stacks to become very powerful.