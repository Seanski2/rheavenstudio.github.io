# Space Soccer

*Don't drop the ball! It takes some crafty legwork to keep that thing in the air! Kick, kick, kick!* - Rhythm Heaven

Space Soccer is a **Keep The Beat Game**

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`ball dispense`|Throws a soccer ball from offscreen. ALWAYS put a `keep-up` cue after this, otherwise the ball will fall.|2|
|`keep-up`|Allows inputting to kick the ball. Kick once per beat.|resizable|
|`high kick-toe!`|Kicks the ball on high, then must hold to kick and release to toe.|3|

### Tips
- Again, ALWAYS put a `keep-up` cue after `ball dispense`, otherwise the ball will fall.
- Autoplay will always keep the ball in the air regardless of if there is a `keep-up` cue or not, so be careful.
- If the ball falls, it will not respawn without a `ball dispense` cue. `ball dispense` will not affect anything if there is already a ball being kicked, so try to put them throughout your remix in case someone misses.

### Legality
- No two cues should overlap, with the exception of `switchGame` or `ball dispense`
