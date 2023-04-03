---
sidebar_position: 46
---
# 046 - Space Soccer

*Don't drop the ball! It takes some crafty legwork to keep that thing in the air! Kick, kick, kick!* - Rhythm Heaven

Space Soccer is a **Keep-the-Beat** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Ball Dispense`|Throws a soccer ball from offscreen. The Space Kicker will begin kicking two beats after the start of this cue.|2|
|`High Kick-Toe!`|Kicks the ball on "high". Hold at "kick" for half a beat, and release at "toe" in order to perform the high kick.|3|
|`NPC Kickers Enter or Exit`|Raises or lowers the NPC Space Kickers in the background according to the duration of the cue.|Resizable|
|`NPC Kickers Instant Enter or Exit`|Raises or lowers the NPC Space Kickers instantly.|0.5|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Ball Dispense`|Disable Sound|Toggle|When checked, removes the ball dispense sound.|
|`High Kick-Toe!`|Swing|0-1|Adjusts the timing of "toe!" to work with swing tempo.|
|`NPC Kickers Enter or Exit`|Should Exit?|Toggle|When checked, lowers the kickers instead of raising them.|
|`NPC Kickers Instant Enter or Exit`|Should Exit?|Toggle|When checked, lowers the kickers instead of raising them.|

### Known Bugs and Issues
- `High Kick-Toe!`'s swing modifier does not currently work.
	- This functionality will likely be removed in a later update, most likely with the inclusion of universal swing.
- The NPC Space Kicker ball logic is strange during a `NPC Kickers Enter or Exit` cue.
