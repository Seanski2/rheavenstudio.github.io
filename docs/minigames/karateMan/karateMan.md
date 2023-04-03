---
sidebar_position: 1
---
# 001 - Karate Man

*The key to karate, as in all other things, is rhythm. Now, let us throw some stuff at you for you to punch.* - Rhythm Heaven Megamix

Karate Man is a **Cue-Based** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Bop`|Karate Joe bops to the beat for the length of the cue.|Resizable|
|`Toss Object`|Throws an object for  Karate Joe to punch.|2|
|`Toss Lightbulb`|Throws a lightbulb for Karate Joe to punch.|2|
|`Special: Kick`|Throws a barrel with a bomb inside. Karate Joe must punch the barrel<br></br> and then subsequently kick away the bomb.|4|
|`Special: Combo`|Throws many objects at Karate Joe, requiring a combo.|4|
|`Warning`|Indicates an irregular pattern of some kind.|1|
|`Special Camera`|Zooms the camera out for a combo or a kick.|Resizable|
|`Preparation Stance`|Karate Joe assumes a ready stance for the duration of the cue.|Resizable|
|`Gameplay Modifiers`|Sets the gameplay style. See the Flow Bar segment for info.|0.5|
|`Background Appearance`|Changes the background instantly.|Resizable|
|`Object Colors`|Changes the object colors of Joe and the thrown items.|0.5|
|`Particle Effects`|Introduces particle effects in the background.|0.5|
|`Set Facial Expression`|Sets Joe's facial expression.|0.5|

### Properties

#### Bop
|Variable|Options|Description|
|---|---|---|
|`Bop`|Toggle|When checked, makes Karate Joe bop for the duration of the cue.|
|`Bop (Auto)`|Toggle|When checked, makes Karate Joe bop every subsequent beat.|

#### Toss Object
|Variable|Options|Description|
|---|---|---|
|`Object`|Pot, Lightbulb, Rock, Ball, CookingPot,<br></br> Alien, Bomb, TacoBell|Sets the item to be thrown.|
|`Success Expression`|Normal, Smirk, Surprise, Sad, Lenny, Happy, VerySad, Blush|Sets Joe's facial expression after successfully hitting the object.|

#### Toss Lightbulb
|Variable|Options|Description|
|---|---|---|
|`Type`|Normal, Yellow, Blue, Custom|Changes the color of the incoming lightbulb.|
|`Custom Color`|Color Picker|When Custom Color is selected, allows the user to specify the exact color of the incoming lightbulb.|
|`Success Expression`|Normal, Smirk, Surprise, Sad, Lenny, Happy, VerySad, Blush|Sets Joe's facial expression after successfully hitting the lightbulb.|

#### Special: Kick
|Variable|Options|Description|
|---|---|---|
|`Contains Ball`|Toggle|When checked, replaces the bomb with a soccer ball.|
|`Success Expression`|Normal, Smirk, Surprise, Sad, Lenny, Happy, VerySad, Blush|Sets Joe's facial expression after successfully kicking the bomb.|

#### Special: Combo
|Variable|Options|Description|
|---|---|---|
|`Success Expression`|Normal, Smirk, Surprise, Sad, Lenny, Happy, VerySad, Blush|Sets Joe's facial expression after successfully comboing the objects.|

#### Warnings
|Variable|Options|Description|
|---|---|---|
|`Type`|HitTwo, HitThree, HitThreeAlt, <br></br>HitFour, Grr, Warning, Combo, HitOne|Specifies the warning to be displayed. Some have audio cues.|

#### Special Camera
|Variable|Options|Description|
|---|---|---|
|`Return Camera`|Toggle|When checked, makes the camera return to its original position after the zoomout.

#### Gameplay Modifiers
|Variable|Options|Description|
|---|---|---|
|`Flow Bar type`|None, Tengoku, Mania|Disables or enables the Flow Bar system in either of its variants.|
|`Enable Combos`|Toggle|When checked, allows Joe to perform combos.|

#### Background Appearance
|Variable|Options|Description|
|---|---|---|
|`Background Type`|Yellow, Fuchsia, Blue, Red, <br></br>Orange, Pink, Custom|Changes the backround color to<br></br> a preset option. Also gives you the option to create your own.|
|`Shadow Type`|Tinted, Custom|Changes the shadow to either derive its color from the background or use a custom color.|
|`Custom Background Color`|Color Picker|When Custom is selected for Background Type, allows the user to select a custom color.|
|`Custom Shadow Color`|Color Picker|When Custom is selected for Shadow Type, allows the user to select a custom color.|
|`FX Type`|None, Sunburst, Rings, Fade|Sets the background effect type. Fade will fade the cue's color over the cue's duration.|
|`Texture`|Plain, Gradient, Radial, Blood|Sets the background texture type.|
|`Color Filter Type`|Tinted, Custom|Changes the background's texture to either derive its color from the background or use a custom color.|
|`Custom Filter Color`|Color Picker|When Custom is selected for Color Filter Type, allows the user to select a custom color.|
|`Custom Filter Color`|Color Picker|When Fade is selected for FX Type, allows the user to select a custom color to fade the filter into.|

#### Object Colors
|Variable|Options|Description|
|---|---|---|
|`Joe Body Color`|Color Picker|Allows the user to choose the color of Joe's body.|
|`Joe Highlight Color`|Color Picker|Allows the user to choose the color of Joe's highlights.|
|`Item Color`|Color Picker|Allows the user to choose the color of the thrown objects.|

#### Particle Effects
|Variable|Options|Description|
|---|---|---|
|`Particle Type`|None, Snow, Fire, Rain|Sets the background particle type.|
|`Wind Strength`|0-64|Sets the wind's intensity, affecting the movement of the particles.|
|`Particle Intensity`|1-16|Sets the volume of particles that appear.|

#### Set Facial Expression
|Variable|Options|Description|
|---|---|---|
|`Facial Expression`|Normal, Smirk, Surprise, Sad, Lenny, Happy, VerySad, Blush|Sets Joe's facial expression instantly.|

## Flow Bar
The flow bar is a Karate Man gameplay modifier that changes how the game is played. Meter is gained by hitting objects, and meter is lost by missing. High flow is required to hit certain object types (rock, cooking pot, alien, bomb, and taco bell). There are two Flow Bar modes: Tengoku and Mania.
### Tengoku
The Tengoku flow bar measures five points. The bar increases by one for every successful hit. Inputting too early or too late, as well as hitting a hard object while at low flow, will drop the bar by one point; completely missing will deplete the bar completely. Hitting hard objects requires three points or higher.
### Mania
The Tengoku flow bar measures ten points. The bar increases by a number based on the total amount of inputs in the Karate Man segment; a more input-dense segment will grant less points per hit, while a less dense segment will grant more per hit. Inputting too early or too late, as well as hitting a hard object while at low flow, will drop the bar by a variable amount; completely missing will deplete the bar completely. Hitting hard objects requires seven points or higher.

### Known Bugs and Issues
- None currently known.
