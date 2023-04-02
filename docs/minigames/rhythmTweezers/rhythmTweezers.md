---
sidebar_position: 2
---
# 002 - Rhythm Tweezers

*My roots are showing! Can you pluck them off?* - Rhythm Heaven Megamix

Rhythm Tweezers is a **Call & Response** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Start Interval`|Changes the duration of the call period based on the duration of the cue. <br></br>The end of the cue marks the start of the response period.|Resizable|
|`Short Hair`|Spawns a hair that must be plucked.|0.5|
|`Curly Hair`|Spawns a curly hair that must be straightened out, then plucked. Requires a 0.5-beat hold.|0.5|
|`Swap Vegetable`|Swaps the vegetable on-screen out for another one. Used after the response period.|0.5|
|`Change Vegetable (Instant)`|Swaps the vegetable on-screen out for another one instantly.|0.5|
|`Offset Tweezer`|Offsets when the tweezers will come down; essentially, it delays the <br></br>response period. Should be used before the tweezers come onscreen. <br></br>Persists between patterns.|Resizable|
|`Reset Tweezer Offset`|Resets the tweezer offset to 0.|0.5|
|`Background Color`|Instantly sets the background color.|0.5|
|`Background Fade`|Fades the background color over the duration of the cue.|Resizable|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Swap Vegetables`|Type|Onion, Potato|Sets the type of vegetable to swap to.|
|`Swap Vegetables`|Onion Color|Color Picker|If the vegetable being swapped to is an onion, <br></br>sets the color of the onion to the user's choice.|
|`Swap Vegetables`|Potato Color|Color Picker|If the vegetable being swapped to is a potato, <br></br>sets the color of the potato to the user's choice.|
|`Change Vegetable (Instant)`|Type|Onion, Potato|Sets the type of vegetable to swap to.|
|`Change Vegetable (Instant)`|Onion Color|Color Picker|If the vegetable being swapped to is an onion, <br></br>sets the color of the onion to the user's choice.|
|`Change Vegetable (Instant)`|Potato Color|Color Picker|If the vegetable being swapped to is a potato, <br></br>sets the color of the potato to the user's choice.|
|`Background Color`|Background Color|Color Picker|Sets the background color to the user's choice.|
|`Background Fade`|Start Color|Color Picker|Sets the background color at the start of the cue to the user's choice.|
|`Background Fade`|End Color|Color Picker|Sets the background color to fade into to the user's choice.|

### Known Bugs and Issues
- Inputs are currently very play-mode hostile; for instance, you can pluck two hairs at once.
	- Will be fixed with a rework.
