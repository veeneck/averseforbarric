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

<pre><code class="swift">self.entity.ui?.cutscene?.addSequences(sequences: [
    self.bringSpeakersIntoView(),
    self.stouWarnsUnderAttack(),
    self.delayForTime(time: 4),
    self.barricOffersHisTroops(),
    self.panCameraForFight(),
    self.takeSpeakersOutOfView()
])
</code></pre>
<div class="framework">
	<b>SwitchBoard</b>
	<span>Advanced scene management for SpriteKit.</span>
	<a href="">View Documentation</a>
</div>

<pre><code class="swift">sceneManager.registerScene(
    key: "Decisions", 
    scene: SBSceneContainer(
        classType: Decisions.self,
        name: "Decisions",
        transition: nil,
        preloadable: true,
        category: SBSceneContainer.SceneGroup.Main,
        atlases: ["Decisions", "Interface"]))
</code></pre>
<div class="framework">
	<b>FormationKit</b>
	<span>The heart and soul. Handles all unit and squad behaviors.</span>
	<a href="">View Documentation</a>
</div>
<pre><code>let squad = FKSquadFactory.sharedInstance.createSquad(
    FKSquadFactory.FKSquadConstruction(
        name:name,
        position: CGPoint(x: 200, y:1300),
        heading: 3.2,
        currentUnits: 12,
        maxUnits: 16,
        controller: .Player,
        columns: 4,
        spacing: 32,
        pathfinderDelegate: navHandler,
        herladryDelegate: heraldryHandler
    ))
</code></pre>
<div class="framework">
	<b>DeckKit</b>
	<span>UI framework to dynamically build the card menus.</span>
	<a href="">View Documentation</a>
</div>

<pre><code>let construction = DKCardFactory.Blueprint(
    palette: .GreyPalette,
    card: .DefaultBG,
    shape: .DefaultMask,
    pattern: .SmallDiamond,
    anchor: .Left,
    headerFile: "",
    headerText: "Settings",
    close: true
)
</code></pre>
<div class="framework">
	<b>PathKit</b>
	<span>Expand upon the pathfinding provided by GameplayKit.</span>
	<a href="">View Documentation</a>
</div>

<pre><code>if let pathfinder = entity.navigationComponent.strategy {
	return pathfinder.getPathToPoint(
	    self.entity.agent.actualPosition, 
	    end: end, 
	    unitRadius:radius, 
	    pathRadius:0)
}
</code></pre>

Other frameworks include:

  - [Particleboard](/Particleboard): Convenience features and extensions to common objects.
  - [StrongRoom](http://google.com): Utility to manage save gave files, unit experience, and unclocked abilities.
  - [WavePool](http://google.com): Control continuous spawns of enemy units.
  - [WarGUI](http://google.com): Isolated code specific to the heads up display.
  - [SpeakerBox](http://google.com): A sub framework of CutsceneKit to handle the _podium_ that display units icons.

#### Pathfinding

Picture of pathifinding

<img src="/images/pathfinding.jpg" width="100%" />

Read more into it here: http://battleofbrothers.com/sirryan/a-month-of-pathfinding which covers situations like an individual unit is lost and needs to catch up, or a squad turns around right near a cliff. Also documents the types of spritekit bugs i ran into.

#### Live Debugging

Piggybacking off of the pathfinding debug overlay, it became difficult to know why squads were doing what they were doing, so I created a debug overlay.

This also translated to custom logs which print out a units AI decisions.

Pic of unit overlay.

Pic of logs & particleboard log code.

<img src="/images/AI.png" width="500" />

#### Never Ending

Constant refactors. FOmrationKit has gone thorugh 3 iterations. memory battles. cpu battles. Scene editor vs code in XCode. Started with swift version 1, major refacotrs throughout. 