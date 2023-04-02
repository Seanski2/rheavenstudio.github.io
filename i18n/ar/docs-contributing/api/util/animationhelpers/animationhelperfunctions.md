# AnimationHelpers
In Heaven Studio we have some animation helper functions, 
that mainly help us "scale" our animations. Scaling means we're syncing the animations to the beat.

## Example
```cs
using UnityEngine;

using HeavenStudio.Util;

namespace HeavenStudio
{
	public class ExampleGame : Minigame
	{
		[Header("Animators")]
		[SerializeField] Animator exampleAnim;
		
		void Start() 
		{
			// Play the "Jump" animation on the "exampleAnim" animator 
			// at a speed scaled to half of the song's current bpm when calling this function.
			exampleAnim.DoScaledAnimationAsync("Jump", 0.5f);
		}
	}
}
```

## Public Methods
| Name | Info | Returns |
| :--: | :--: | :-----: |
| IsAnimationNotPlaying | Returns true if the animator is not currently playing an animation. | bool |
| IsPlayingAnimationName | Returns true if animName is currently playing on the animator. | bool |
| DoScaledAnimation | Sets the animator's progress on an animation based on the current song beat between `startTime` and `length`, this must be called in the update loop to update properly. | void |
| DoNormalizedAnimation | Sets the animator's progress on an animation according to `pos`, starting from 0 and ending at 1. | void |
| DoScaledAnimationAsync | Plays an animation on the animator at a speed scaled to the song's bpm. Call this function once. | void |
| DoUnscaledAnimation | Plays an animation on the animator at default speed. | void |
