---
sidebar_position: 5
---
# 005 - The Clappy Trio

*Feel the flow of your clappy bretheren. Three claps right on the beat! Can you do it?* - Rhythm Heaven Megamix

The Clappy Trio is a **Cue-Based** game.

### Events

|Name|Description|Length (beats)|
|---|---|---|
|`Clap`|The lions clap in order. The time between claps is determined by the duration of the cue.|Resizable|
|`Bop`|The trio bops to the beat for the length of the cue. If it comes after a successful `clap`, the lions will smile happily.|Resizable|
|`Prepare Stance`|The lions take a prepared stance. They will stay prepared until a `clap` or `bop` occurs.|1|
|`Change Lion Count`|Immidiately changes the current number of lions.|0.5|

### Properties

#### Bop
|Variable|Options|Description|
|---|---|---|
|`Bop`|Toggle|When checked, makes the lions bop for the duration of the cue.|
|`Bop (Auto)`|Toggle|When checked, makes the lions bop every subsequent beat.|

#### Prepare Stance
|Variable|Options|Description|
|---|---|---|
|`Alt`|Toggle|When checked, the lion's faces will be determined while stanced.|

#### Change Lion Count
|Variable|Options|Description|
|---|---|---|
|`Lion Count`|3-8|Instantly changes the current lion count.|

### Known Bugs
- `Bop` causes the lions to show the "miss" face if the current The Clappy Trio segment has not had any `Clap` cues before that point.
	- This will not occur until a `Clap` cue occurs anywhere in the remix.
