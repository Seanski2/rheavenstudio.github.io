---
sidebar_position: 201
---
# E01 - Mr. Upbeat

*Mr. Upbeat's never on-beat! Step to the rhythm on the offbeats to avoid that giant metronome.* - Heaven Studio

Mr. Upbeat is a **Keep-the-Beat** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Start Stepping`|Swings the metronome, requiring Mr. Upbeat to step. Should always be used on the offbeat.|Resizable|
|`Beeping`|Lights up Mr. Upbeat's antenna as a beeping sound plays. Should always be used on the offbeat.|Resizable|
|`Ding!`|Plays a dinging sound, denoting the end of a segment.|0.5|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Ding!`|Applause|Toggle|When checked, plays an applause sound alongside the dinging noise.|

### Known Bugs and Issues
- Mr. Upbeat lacks a miss animation for getting hit while the metronome moves from right to left; it reuses the animation for from left to right currently.
	- Upscaled sprites for this currently do not exist.
