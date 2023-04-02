# Fork Lifter

*Hungry? Hope you have good reflexes!* - Rhythm Heaven Fever

Fork Lifter is a **Cue Based Game**

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Flick`|Flicks a pea. You can use this as many times as you want, <br></br>but peas will stop appearing on the fork if <br></br>there are already 4 or more|3|
|`Prepare`|The hand readies itself to flick a pea. It will stay prepared<br></br> until a pea is flicked|0.5|
|`Swallow`|Fork goes offscreen and a person swallows. When Fork comes back,<br></br> all peas are gone.|1|
|`Sigh`|An unseen person sighs.|1|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Flick`|Object|Pea, TopBun, Burger, BottomBun|Choose the item to be flicked|

### Tips
- `Sigh` is best used after `Swallow` after a big event. It gives a lot of impact!
- `Switch Game` starts you out with 0 peas, so no need to gulp in a short segment beforehand.
- When a full burger is assembled, `Swallow` will play a different, more "crunchy" sound

### Legality
- No two cues should start at the same time, with the exception of `Switch Game`
- `Swallow` and `Sigh` should not overlap with anything
