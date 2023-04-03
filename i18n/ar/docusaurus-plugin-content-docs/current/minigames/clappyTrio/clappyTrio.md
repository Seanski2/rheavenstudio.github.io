---
sidebar_position: 5
---
# 005 - The Clappy Trio

*Feel the flow of your clappy bretheren. Three claps right on the beat! Can you do it?* - Rhythm Heaven Megamix

The Clappy Trio is a **Cue-Based** game.

### Events

|Name|Description|Length (beats)|
|---|---|---|
|`Clap`|Lion 1 claps. At the end of the cue, Lion 2 claps. Once it has been <br></br> the same number of beats, the next lion will clap.<br></br> This continues until all lions have clapped.|Resizable|
|`Bop`|The entire trio bops once. If it comes after a successful `clap`, the <br></br>lions will smile happily.|Resizable|
|`Prepare Stance`|The lions take a prepared stance. They will stay prepared<br></br> until a `clap` or `bop` occurs|1|
|`Change Lion Count`|Immidiately changes the current number of lions|0.5|

### Properties

|Event|Variable|Options|Description|
|---|---|---|---|
|`Bop`|Bop|Toggle|When checked, makes the lions bop for the duration of the cue.|
|`Bop`|Bop (Auto)|Toggle|When checked, makes the lions bop every subsequent beat.|
|`Prepare Stance`|Alt|Toggle|When checked, the lion's faces will be determined while stanced.|
|`Change Lion Count`|Lion Count|3-8|Instantly changes the current lion count.|

### Known Bugs
- `Bop` causes the lions to show the "miss" face if the current The Clappy Trio segment has not had any `Clap` cues before that point.
	- This will not occur until a `Clap` cue occurs anywhere in the remix.
