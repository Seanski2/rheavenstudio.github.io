---
sidebar_position: 15
---
# 015 - Space Dance

*You want a dancing challenge? Try dancing in zero gravity! IN SPAAAAAAAAAAAAACE!* - Rhythm Heaven Megamix

Space Dance is a **Cue-Based** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Turn Right`|The Space Dancers vocalize "Turn Right!" while leaning right.|2|
|`Sit Down`|The Space Dancers vocalize "Let's Sit Down"!" while squatting down.|2|
|`Punch`|The Space Dancers vocalize "Pu-pu-pu-punch"!" while punching forwards.|2|
|`Shooting Star`|Plays a shooting star animation in the background for the duration of the cue.|Resizable|
|`Change Background Color`|Fades the color of the background.|Resizable|
|`Single Bop`|Makes the dancers all bop once.|1|
|`Bop Toggle`|Makes the dancers bop every subsequent cue.|0.5|
|`Space Gramps Animation`|Plays one of Space Gramps' miscellaneous animations.|0.5|


### Properties

#### Turn Right
|Variable|Options|Description|
|---|---|---|
|`Who Speaks?`|Dancers, Gramps, Both|Determines who speaks during the cue.|
|`Space Gramps Animations`|Toggle|When checked, makes Space Gramps join in <br></br>performing the cue.|

#### Sit Down
|Variable|Options|Description|
|---|---|---|
|`Who Speaks?`|Dancers, Gramps, Both|Determines who speaks during the cue.|
|`Space Gramps Animations`|Toggle|When checked, makes Space Gramps join in <br></br>performing the cue.|

#### Punch
|Variable|Options|Description|
|---|---|---|
|`Who Speaks?`|Dancers, Gramps, Both|Determines who speaks during the cue.|
|`Space Gramps Animations`|Toggle|When checked, makes Space Gramps join in <br></br>performing the cue.|

#### Shooting Star
|Variable|Options|Description|
|---|---|---|
|`Ease`|Linear, Instant, Spring,<br></br> *variations of* Quad, Cubic, Quart,<br></br> Quint, Sine, Expo, Circ, Bounce,<br></br> Back, Elastic|Sets the easing of the star's movement.|

#### Change Background Color
|Variable|Options|Description|
|---|---|---|
|`Start Color`|Color Picker|Sets the color of the background at the start of the cue.|
|`End Color`|Color Picker|Sets the color of the background to fade into.|
|`Instant`|Toggle|When checked, instantly sets the color of the  <br></br>background to whatever is set for Start Color.|

#### Single Bop
|Variable|Options|Description|
|---|---|---|
|`Gramps Bop`|Toggle|When checked, Space Gramps will bop alongside the dancers once.|

#### Bop Toggle
|Variable|Options|Description|
|---|---|---|
|`Should Bop?`|Toggle|When checked, the dancers will bop every subsequent beat.|
|`Gramps Bop`|Toggle|When checked, Space Gramps will bop every subsequent beat.|

#### Space Gramps Animation
|Variable|Options|Description|
|---|---|---|
|`Looping`|Toggle|When checked, Space Gramps will loop the selected animation.|
|`Which animation?`|Stand, Talk, Sniff|Sets the animation to play.|


### Known Bugs and Issues
- Space Gramps does not reset animations upon missing.
- Space Gramps plays the incorrect sprite when completely missing; the current sprite should be used for early/late misses.
