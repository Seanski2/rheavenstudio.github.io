---
sidebar_position: 1
---

import {HeaderBadgesWidget} from '../../src/components/HeaderWidget.js';

# Finding the song offset

In most audio files, the song doesn't start immediately after the file begins. The song offset indicates the delay between the start of the audio stream and the start of the first beat. This section should help you figure out the offset.

**_Finding the song offset is perhaps the most important part of remixing. This will determine if your song is on-beat. Make sure you get the song offset correctly before continuing._**

## Method 1: Audio Editor
For the purposes of this guide, we will be using Audacity.

1. Download Audacity.
(For Windows/MacOS users, get it from [Audacity's webpage](https://www.audacityteam.org/download/), Linux users check instructions for your distro online.)
2. Open your music file in Audacity
3. Zoom into the start of the music file in the timeline of Audacity
4. Set the cursor right at the start of the first beat (usually right after the silence at the start of the music file, sometimes a bit after like in Karate Man (GBA))
5. Check the time at the bottom. Take the last 3 numbers, and that's your offset in milliseconds. 

![audacity](/img/docs-tips/music/offset/audacity.png)

6. Set the offset in Heaven Studio. Type those 3 numbers (without a decimal point) into the "Song Offset" box at the top of the Heaven Studio window.
7. To make sure the offset you got is right, check the waveform. If the beats in the waveform match the timeline's beats, you are good to go.

## Method 2: Guess & Check
This method is usually less accurate. This method only works if you have already set the BPM.
(If at any point your song becomes on-beat during this process, you can skip the rest of the steps.)

1. Turn on the metronome tool in Heaven Studio by clicking the metronome icon. Press `Space` to play the remix and ensure it is enabled. (If it is hard to hear the metronome, set the song volume to 50% by pressing `2` on your keyboard and clicking the "Song Volume" box on the left. You can undo this change later.)
2. Play your remix. If the metronome is early, increase the Song Offset by 100.
3. Repeat step 2 until the metronome is slightly late. Decrease the Song Offset by 100.
4. Play your remix. If the metronome is early, increase the Song Offset by 25.
5. Repeat step 4 until the metronome is slightly late. Decrease the Song Offset by 25.
6. Play your remix. If the metronome is early, increase the Song Offset by 5.
7. Repeat step 6 until the metronome is slightly late. Decrease the Song Offset by 5.
8. Play your remix. If the metronome is early, increase the Song Offset by 1.
9. Repeat step 8 until the metronome is on-beat.

Note: Beats are usually the longest parts of a waveform. Check the image below for reference

![waveform](/img/docs-tips/music/offset/waveform.png)

<HeaderBadgesWidget commaDelimitedContributors="ThatZeoMan" lastDateString="2/13/23" />
