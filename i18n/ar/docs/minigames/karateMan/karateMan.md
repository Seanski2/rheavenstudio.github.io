# Karate Man

*The key to karate, as in all other things, is rhythm. Now, let us throw some stuff at you for you to punch.* - Rhythm Heaven Megamix

Karate Man is a **Cue Based Game**

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`bop`|Karate Joe bops to the beat for the length of the cue.|resizable|
|`hit`|Throws an object which Karate Joe must punch.|2|
|`bulb`|Throws a lightbulb of the specified color.|2|
|`kick`|Throws a barrel with a bomb inside. Karate Joe must punch the barrel,<br></br> then subsequently kick away the bomb.|4.5|
|`combo`|Throws many objects, and Karate Joe must punch all of them.|4|
|`hit3`|Indicates upcoming back-to-back pot throws of the specified amount.|1|
|`prepare`|Karate joe assumes a ready stance for the duration of the cue|resizable|
|`set background color`|Instantly changes the background and shadow color to<br></br> the set color.|0.5|
|`set background fx`|Instantly changes the background effects to the specified type|0.5|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`hit`|Object|Pot, Rock, Ball, CookingPot,<br></br> Alien, TacoBell|Choose the item to be thrown.|
|`bulb`|Type|Normal, Blue, Yellow, Custom|Choose the color of the bulb,<br></br> or make your own.|
|`hit3`|Type|HitTwo, HitThree, HitThreeAlt, <br></br>HitFour|Choose the number of items<br></br> to indicate.|
|`set background color`|Background Type|Yellow, Fuchsia, Blue, Red, <br></br>Orange, Pink, Custom|Change the backround color to<br></br> a preset option, or make<br></br> your own.|
|`set background color`|Shadow Type|Tinted, Custom|Change the shadow type to a <br></br>tinted version of the <br></br>background color, or make <br></br>your own.|
|`set background fx`|FX Type|None, Sunburst, Rings|Changes the background effect<br></br> pattern.|

### Tips
- The Tinted shadow option for `set background color` makes the shadow a bit redder, too.
- `hit3` doesn't actually spawn the objects, so don't forget to do that!
- A yellow `bulb` is commonly used to indicate kicks, and a blue one is used to indicate combos.
- `hit3`'s HitThreeAlt is from Karate Man Kicks.
- `prepare` is best used for sections where the `hit`s are offbeat, to add some tension.

### Legality
- No two `hit` or `bulb` cues should start at the same time.
- `kick` or `combo` should not overlap with `hit`, `bulb`, or eachother while the combo/kick is in progress.

### Known Bugs
- Some sprite bounds errors
