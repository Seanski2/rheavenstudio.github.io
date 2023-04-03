---
sidebar_position: 25
---
# 025 - Tap Trial

*You are the girl. They are the monkeys. Follow them to tap stardom!* - Rhythm Heaven Megamix

Tap Trial is a **Cue-Based** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Bop`|The girl and the monkeys bop to the beat for the length of the cue.|Resizable|
|`Tap`|The girl and the monkeys prepare and tap left.|2|
|`Double Tap`|The girl and the monkeys prepare and tap right twice.|2|
|`Triple Tap`|The girl and the monkeys prepare and tap right around themselves thrice.|4|
|`Prepare Stance`|The girl and the monkeys prepare to jump.|1|
|`Jump Tap`|The girl and the monkeys jump, re-entering the prepared stance upon landing.|2|
|`Final Jump Tap`|The girl and the monkeys jump, striking a pose upon landing.|2|
|`Scroll Background`|Scrolls the background upwards.|0.5|
|`Giraffe Animations`|Moves the giraffe into our out of the frame.|0.5|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Bop`|Bop|Toggle|When checked, makes the girl and the monkeys bop for the duration of the cue.|
|`Bop`|Bop (Auto)|Toggle|When checked, makes the girl and the monkeys bop every subsequent beat.|
|`Scroll Background`|Scroll FX|Toggle|When checked, scrolls the background upwards.|
|`Scroll Background`|Flash FX|Toggle|When checked, brightens the background.|
|`Giraffe Animations`|Enter?|Toggle|When checked, the giraffe will enter the frame.|
|`Giraffe Animations`|Instant|Toggle|When checked, the giraffe will move in or out instantly.|


### Known Bugs and Issues
- After a `Triple Tap` or `Final Jump Tap`, the girl and the monkeys will not bop.
- `Scroll Background`'s scrolling animation appears jittery while starting up.
- `Scroll Background` does not stop when Scroll FX is unchecked.
- `Scroll Background`'s Flash FX toggle doesn't work.
- `Giraffe Animations`'s Enter? toggle does not do anything; instead, the giraffe will simply move in or out based on its current position.
	- This functionality is fine, but the toggle should be removed to prevent confusion.
- The giraffe is currently lacking miss animations.
