# Spaceball

*Ignore the camera's wild zooms! Make the ball zoom wildly away! Don't blink! Wipe away your tears!* - Rhythm Heaven Megamix

Spaceball is a **Cue Based Game**

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Pitch Ball`|The dispenser shoots a ball|2|
|`Pitch High Ball`|The dispenser shoots a ball up high, and you have to wait a beat|3|
|`Change Batter Costume`|Changes the batter's Change Batter Costume|1|
|`Show Alien`|Opens the alien's UFO for the duration of the cue|1|
|`Zoom Camera`|Moves the camera to the desired value over the duration of the cue|resizable|
|`Dispenser Prepare`|The despenser squishes down. It will stay like this <br></br>until the next `Pitch Ball` or `Pitch High Ball`|1|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Change Batter Costume`|Type|Standard, Bunny, SphereHead|Sets the batter's Change Batter Costume|
|`Zoom Camera`|Zoom|1-320|Changes the camera's zoom, with 10 <br></br>being the default|
|`Zoom Camera`|Ease|Linear, Instant, Spring,<br></br> *variations of* Quad, Cubic, Quart,<br></br> Quint, Sine, Expo, Circ, Bounce,<br></br> Back, Elastic|Changes the camera's zoom velocity|

### Tips
- There are a lot of ease types for `Zoom Camera`. Experiment to find which one works for you!
- When changing the `Change Batter Costume` Type, it will look more seamless if you do it while the `Zoom Camera` Zoom is at a higher value.
- `Switch Game` resets the `Zoom Camera` Zoom to 10.
- `Switch Game` also changes the `Change Batter Costume` Type to Standard.

### Legality
- There should always be a `Dispenser Prepare` before `Pitch Ball` or `Pitch High Ball`
- `Pitch Ball` or `Pitch High Ball` should never start on the same beat as any other cue, with the exception of `Switch Game`
- You should never hit two balls at the same time

### Known Bugs
- After an unknown amount of time, `Zoom Camera` starts to flash at the beginning of the cue
