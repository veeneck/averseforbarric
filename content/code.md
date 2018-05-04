---
title: "Code"
---

To date, this game has 38,378 lines of Swift code. There have been countless hours invested in art, story, design, animation and brainstorming, but code makes all of this tick. Behind the scenes, <a href="https://developer.apple.com/documentation/spritekit">SpriteKit</a> and <a href="https://developer.apple.com/documentation/gameplaykit">GameplayKit</a> power a vast majority of the engine. This section provides a look at some of the custom frameworks that had to be developed along with tricky problems that had to be solved.

#### The Frameworks

<div class="frameworks">

	<div class="framework">
		<b>CutsceneKit</b>
		<span>Helps develop chat overlays with custom timing and movement.</span>
		<a href="">View Documentation</a>
	</div>

	self.entity.ui?.cutscene?.addSequences(sequences: [
        self.bringSpeakersIntoView(),
        self.stouWarnsUnderAttack(),
        self.delayForTime(time: 4),
        self.barricOffersHisTroops(),
        self.panCameraForFight(),
        self.takeSpeakersOutOfView()
    ])


<div class="framework">
	<b>SwitchBoard</b>
	<span>Advanced scene management for SpriteKit.</span>
	<a href="">View Documentation</a>
</div>

    sceneManager.registerScene(
    	key: "Decisions", 
    	scene: SBSceneContainer(
            classType: Decisions.self,
            name: "Decisions",
            transition: nil,
            preloadable: true,
            category: SBSceneContainer.SceneGroup.Main,
            atlases: ["Decisions", "Interface"]))

</div>