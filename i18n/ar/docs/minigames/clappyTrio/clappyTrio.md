# The Clappy Trio

*Feel the flow of your clappy bretheren. Three claps right on the beat! Can you do it?* - Rhythm Heaven Megamix

The Clappy Trio is a **Cue Based Game**

### Events

|Name|Description|Length (beats)|
|---|---|---|
|`Clap`|Lion 1 claps. At the end of the cue, Lion 2 claps. Once it has been <br></br> the same number of beats, the next lion will clap.<br></br> This continues until all lions have clapped.|resizable|
|`Bop`|The entire trio bops once. If it comes after a successful `clap`, the <br></br>lions will smile happily.|1|
|`Prepare Stance`|The lions take a prepared stance. They will stay prepared<br></br> until a `clap` or `bop` occurs|1|
|`Change Lion Count`|Immidiately changes the current number of lions|0.5|

### Properties

|Event|Variable|Options|Description|
|---|---|---|---|
|`Prepare Stance`|Alt|checkbox|If checked, the lion's faces will become<br></br> determined|
|`Change Lion Count`|Lion Count|3-8|Instantly changes the current lion count|

### Tips
- Turning on the `Alt` property in the `Prepare Stance` is best used before a particularly tricky `Clap`


### Legality
- No two cues should overlap, with the exception of `Switch Game`
- Remember, there should be no cues while a lion is clapping, even if the actual `Clap` is not overlapping
- There should always be a `Prepare Stance` before any `Clap`

### Known Bugs
- `Bop` causes the lions to show the "miss" face if:
	- there has been at least one `Clap` before that point anywhere in the remix
	- the current The Clappy Trio segment has not had any `Clap` cues before that point
- Background is not properly fitted to the screen, resulting in a black bar on the right of the game. Will be fixed with a background upscale.
