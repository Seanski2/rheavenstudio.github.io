---
sidebar_position: 1
---

# Hvordan man finder en sangs offset

I de fleste lydfiler, så begynder sangen ikke pludseligt efter filen er blevet spillet. Sangens offset indikere forsinkelsen mellem begyndelsen af lydstrømmen og begyndelsen af det første beat. Denne sektion skulle hjælpe dig med at finde sangens offset.

**_At finde sangens offset er nok den mest vigtige del når man remixer. Det ville afgøre om din sang er on-beat eller ej. Vær sikker på at du har fundet sangens korrekte offset før du fortsætter._**

## Første Metode: Lyd Editor

Til hensyn af denne guide, så bruger vi Audacity.

1. Download Audacity.
   (For Windows/MacOS brugere, få det fra [Audacitys webside](https://www.audacityteam.org/download/), Linux brugere tjek bruganvisningerne for din distro online.)
2. Åben din musik fil i Audacity
3. Zoom ind på starten af musik filen på audacitys tidslinje
4. Put markøren lige på begyndelsen af det første beat (som regelt lige efter stilheden på begyndelsen af musik filen, nogle gange en lille smule efter ligesom i Karateka (GBA))
5. Tjek tiden på bunden. Tag de sidste 3 cifre, og det er dit offset i millisekunder.

![audacity](/img/docs-tips/music/offset/audacity.png)

6. Put offsettet ind på Heaven Studio. Skriv de 3 cifre (uden komma) ind på "Sang Offset" boksen på toppen af Heaven Studios vindue.
7. For at være sikker på at du fandt det rigtige offset, tjek waveformen. Hvis beatsene i waveformen matcher tidslinjens beats, så burde du have det rigtige offset.

## Anden metode: Gæt & Tjek

Denne metode er som regel mindre præcist. Denne metode virker kun hvis du allerede har sat BPMet.
(Hvis på hvad end tidspunkt at din sang bliver on-beat under denne proces, så kan du springe over resten af trinnene.)

1. Slå metronom værktøjet til i Heaven Studio ved at trykke på metronom ikonet. Tryk `Space` for at spille remixen og vær sikker på det er slået til. (Hvis det er svært at høre metronomen, så put sangens volumen til 50% ved at trykke `2` på dit tastatur og ved at trykke på "Sang Volumen" boksen til venstre. Du kan fortryde denne forandring senere.)
2. Spil din remix. Hvis metronomen er for tidlig, øg sangens offset med 100.
3. Gentag trin 2 indtil metronomen er en lille smule for sent. Formindsk sangens offset med 100.
4. Spil din remix. Hvis metronomen er for tidlig, øg sangens offset med 25.
5. Gentag trin 4 indtil metronomen er lidt for sent. Formindsk sangens offset med 25.
6. Spil din remix. Hvis metronomen er for tidlig, øg sangens offset med 5.
7. Gentag trin 6 indtil metronomen er en lille smule for sent. Formindsk sangens offset med 5.
8. Spil din remix. Hvis metronomen er for tidlig, øg sangens offset med 1.
9. Gentag trin 8 indtil metronomen er on-beat.

Bemærk: Beats er som regel den længste del af en waveform. Tjek billedet under som reference

![waveform](/img/docs-tips/music/offset/waveform.png)
