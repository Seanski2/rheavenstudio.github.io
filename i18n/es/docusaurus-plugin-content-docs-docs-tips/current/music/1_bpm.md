---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# Encontrar el BPM (tempo) de una canción

## Introducción
BPM es la medida de "tiempos" (subdivisiones del compás) por minuto en una canción. Por ejemplo, `120BPM` es 120 tiempos por minuto (*beats per minute*), es decir, 2 tiempos por segundo.

Encontrar el BPM exacto es muy importante en general para sincronizar un juego de ritmo. Y en un juego como Rhythm Heaven, donde los efectos de sonido ***tienen que encajar con la música perfectamente***, el BPM es incluso más importante que en otros juegos de ritmo.

Hay varias maneras de encontrar el BPM de una canción. Iremos de soluciones más a menos comunes.

## Pulsar un botón siguiendo el ritmo
Este es un método muy común y conocido de encontrar el BPM de una canción, eso sí, no siempre es preciso (dependiendo de tu sentido del ritmo, por supuesto).

En Heaven Studio encontrar la opción "Tapping along" (pulsar siguiendo el ritmo) no es difícil: en la esquina superior derecha, haz clic en el botón del *mouse*, al lado del icono de "Music Selection" (seleccionar música).

![tabtn](/img/docs-tips/music/bpm/tapalongbutton.png)

Una ventana aparecerá después de que clickees el icono, puedes hacer clic en el icono en la ventana con la música para encontrar el tempo.

![tashow](/img/docs-tips/music/bpm/tapalongshowcase.gif)

Este método no siempre es recomendable, porque depende de tu sentido del ritmo.

Es muy probable que no aciertes con el BPM, como en este ejemplo de aquí.

(Canción: PinocchioP - Apple dot com)

<ReactPlayer controls url='/vid/bpm/tapalongwrong.mp4' />
<br></br>

Después de usar otro de los métodos, vemos que el BPM correcto es`153BPM`

<ReactPlayer controls url='/vid/bpm/correctbpm.mp4' />


## Simplemente búscalo en Google
Puedes buscar "`Nombre de la canción` BPM" en tu motor de búsqueda favorito. Esto puede traer resultados muy precisos, o resultados que dejen mucho que desear.

Aquí tienes algunos sitios web (en inglés) que buscan automáticamente el BPM de canciones en Spotify:

- [Tunebat](https://tunebat.com)
- [SONG⚡BPM](https://songbpm.com/)
- [GetSongbpm](https://getsongbpm.com/)

Solo uno de estos sitios (Tunebat) tenía el tempo correcto de la canción del ejemplo anterior, pero siempre deberías probar todos los BPMs diferentes que encuentres si vas a seguir este método.

## Usar una herramienta online
Hay algunas herramientas online que automáticamente sacan el BPM de un archivo de audio. Este es probablemente el método menos eficaz que hay.use.

Una de las herramientas de este tipo es es [la herramienta de GetSongbpm](https://getsongbpm.com/tools/audio), aunque ten en mente que solo funciona con archivos `mp3`.


## Usar un DAW [^1]
La mayoría de DAWs tienen un ajuste de tempo incluido. A veces puede ser impreciso, así que también explicaremos un método manual por si es necesario. Sólo trataremos Ableton y FL Studio aquí.

[^1]: Del inglés *Digital Audio Workstation* (estación de trabajo de audio digital); software para grabar, editar y producir música.

### FL Studio
#### Automáticamente
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
