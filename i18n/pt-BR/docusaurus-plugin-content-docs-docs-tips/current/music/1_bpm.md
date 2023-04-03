---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# Finding the BPM of a song

## Introduction
BPM is the measurment of amount of beats per minute in a song. For example, `120BPM` is 120 beats per minute, which is 2 beats per second.

Finding the BPM is really important to having a synced rhythm game chart in general. In a game like Rhythm Heaven, where audio cues ***have to fit the music exactly***, BPM is even more important than other rhythm games.

There's multiple ways you can find the BPM of a song. We'll go from the most common to least common.


## Tapping along
This is a really common and known method to find the BPM of a song, it's not always accurate, depending on your sense of rhythm of course.

In Heaven Studio finding the "Tapping along" option isn't hard, on the top left corner find the mouse icon next to the Music Selection icon.

![tabtn](/img/docs-tips/music/bpm/tapalongbutton.png)

A window will appear after you click the icon, you can click the icon in the window with the music to find the bpm.

![tashow](/img/docs-tips/music/bpm/tapalongshowcase.gif)

This method isn't always recommended, because it depends on your sense of rhythm.

High chances, you'll get the BPM wrong, like this example here.

(Song is PinocchioP - Apple dot com)

<ReactPlayer controls url='/vid/bpm/tapalongwrong.mp4' />
<br></br>

After using one of the other methods, the correct BPM is`153BPM`

<ReactPlayer controls url='/vid/bpm/correctbpm.mp4' />


## Just look it up online
You can look up "`Song Name` BPM" on your favourite search engine, this may bring up either accurate results or far from accurate results.

Here are some websites that automatically check BPM of songs on Spotify:

- [Tunebat](https://tunebat.com)
- [SONG⚡BPM](https://songbpm.com/)
- [GetSongbpm](https://getsongbpm.com/)

Only one of these websites (Tunebat) had the correct BPM of the song used as an example previously, but you should always try all BPMs you find if you will go with this method.

## Using an online tool
There are multiple tools online to automatically check the BPM of an audio file for you, this is probably the least accurate method you could use.

One of the tools used for that is [GetSongbpm's tool](https://getsongbpm.com/tools/audio), keep in mind it only works with the `mp3` format.


## Using a DAW
Most DAWs have a built-in tempo checker, they may be inaccurate sometimes, so a manual method will also be explained if needed, only Ableton and FL Studio will be covered here.

### FL Studio
#### Automatically
FL Studio comes with a somewhat good built-in automatic BPM checker, to access it click on the wave icon on the top left of the audio (next to the name of it) you have dragged to the timeline then click "Detect tempo".

![flmenu](/img/docs-tips/music/bpm/flmenu.png)

A window will appear asking you to put in the BPM range of the audio file you are trying to detect BPM of, recommended ranges are `75BPM-150BPM` and `100BPM-200BPM`.

![fltempodetect](/img/docs-tips/music/bpm/fltempodetect.png)

Using the song used above (PinocchioP - Apple dot com), FL Studio detected the tempo as `153.002BPM`, which is accurate, but we do not need the `.002BPM`.
Results may vary depending on the song, specially if it has BPM changes.

![fltempodetected](/img/docs-tips/music/bpm/fldetected.png)

#### Manually

Adjusting the tempo manually starts pretty similarly to the automatic method. Just drag in an audio file.

![flmanualoffgrid](/img/docs-tips/music/bpm/flmanualoffgrid.png)


Notice the peaks in the waveform? These are what we're going to use to find the tempo.

Parts of the waveform with little start-up or "attack" tend to be more accurate with this method, which are highlighted in green. The section highlighted in red has a lot more attack, so it has some ambiguity on where it starts.

![flmanualhighlight](/img/docs-tips/music/bpm/flmanualhighlight.png)


The grid in most DAWs are divided up into beats. Once we align this audio file to that grid, it will be in tempo.

![flemptygrid](/img/docs-tips/music/bpm/flemptygrid.png)

In order to do that, adjust the project bpm, which is listed on the top of the screen, until these peaks are situated on the lines of the grid. You might need to zoom in a bit to make sure it's situated just right.

![flmanualongrid](/img/docs-tips/music/bpm/flmanualongrid.png)

This is why we wanted sections with little attack. The start of the section is more defined, making it easier to align.
Once each one of these sections is on the grid, you may need to adjust as you scroll through your song, your project bpm should be
the song's tempo.

### Ableton
#### Automatic
In Ableton Live 11, Ableton automatically detect the tempo of an audio file once it's inserted in the timeline.

To view the detected tempo click on the audio file after inserting it to the timeline.

![ableton](/img/docs-tips/music/bpm/abletontempo.png)

#### Manual
Check the manual method in FL Studio right above, the method is similar.


## Using ArrowVortex
ArrowVortex is a somewhat known application in the rhythm game charting world, it has built-in automatic BPM and offset detection.

To download ArrowVortex, please download it from this [webpage](https://arrowvortex.ddrnl.com/index.html).

After opening ArrowVortex, go to View on the top bar and make sure these are the enabled options:

- Show waveform
- Show beat lines
- Show tempo boxes
- Show tempo help
- Show notes
- Time based (C-mod)

Drag and drop your audio file into ArrowVortex, remember to press F4 to enable the metronome.

This is how it should look like so far.

![arrowvortex](/img/docs-tips/music/bpm/arrowvortex.png)

To bring up the automatic sync window, go to "Tempo" then click on "Adjust sync".

![arrowvortextempo](/img/docs-tips/music/bpm/arrowvortextempo.png)

Then press on "Find BPM".

![arrowvortexsync](/img/docs-tips/music/bpm/arrowvortexsync.png)

This is how it should look like after ArrowVortex detects the BPM of the song.

![arrowvortexsynced](/img/docs-tips/music/bpm/arrowvortexsynced.png)

Now press Space on your keyboard to play the audio, if the metronome sounds off, go back to the "Adjust sync" window and press on the "0.5" button 1-2 times.


## Checking charts from other rhythm games
There's ALWAYS an osu! chart for the song you are remixing.

Most rhythm games have the BPM accessible from the chart file they use, some games like osu! use milliseconds for beats instead of BPM, in which case you'd need to download the game and check in it's editor, this is probably the best method so far.


## Checking a fandom wikia
This works like a charm, a lot of times.

A lot of fandom wikias contain the BPMs of popular songs from that fandom's media, this is your best option specially if you are going to remix a Vocaloid or a Touhou song.
