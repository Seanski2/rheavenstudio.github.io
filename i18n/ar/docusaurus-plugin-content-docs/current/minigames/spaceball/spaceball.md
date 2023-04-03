---
sidebar_position: 4
---
# 004 - Spaceball

*Ignore the camera's wild zooms! Make the ball zoom wildly away! Don't blink! Wipe away your tears!* - Rhythm Heaven Megamix

Spaceball is a **Cue-Based** game. 

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Pitch Ball`|The dispenser shoots a ball.|2|
|`Pitch High Ball`|The dispenser shoots a ball up high. Takes a beat longer than the normal cue.|3|
|`Change Batter Costume`|Changes the batter's costume.|1|
|`Show Alien`|Opens the alien's UFO for two beats.|1|
|`Zoom Camera`|Moves the camera to the desired value over the duration of the cue.|Resizable|
|`Dispenser Prepare`|The dispenser readies itself. It will stay like this <br></br>until the next `Pitch Ball` or `Pitch High Ball`|1|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Pitch Ball`|Type|Baseball, Onigiri, Alien, Tacobell|Sets the object to be dispensed.|
|`Pitch High Ball`|Type|Baseball, Onigiri, Alien, Tacobell|Sets the object to be dispensed.|
|`Change Batter Costume`|Type|Standard, Bunny, SphereHead|Sets the batter's Change Batter Costume.|
|`Zoom Camera`|Zoom|1-320|Changes the camera's zoom, with 10 <br></br>being the default.|
|`Zoom Camera`|Ease|Linear, Instant, Spring,<br></br> *variations of* Quad, Cubic, Quart,<br></br> Quint, Sine, Expo, Circ, Bounce,<br></br> Back, Elastic|Changes the camera's zoom velocity.|

### Known Bugs and Issues
- After switching costumes for the first time, a second `Change Batter Costume` to the standard appearance will display Air Batter's normal coloration with the last used head.
