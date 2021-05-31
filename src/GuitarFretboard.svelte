<script>  
  let strings = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];
  let dots = [5, 7, 9, 12, 15, 17, 19];
  let frets = 22;
  
  $: noteType = 'sharps';
  $: noteLabels = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  $: semiTones = {
    sharps: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    flats: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
  }
  $: fretboard = strings.map(s => {
      // s = open string
      let note = s.substring(0, s.length - 1);
      let octave = Number(s.substring(s.length - 1));
      let index = semiTones[noteType].indexOf(note);
      return [...Array(frets).keys()].map(f => {
        // f = fret number
        let degree = (index + f) % 12;
        let turn = Math.floor((index + f) / 12);
        return semiTones[noteType][degree] + (octave + turn).toString();
      });
    }).reverse();
  const updateNotes = (e) => {
    noteType = e.target.value;
  }

  // note name spaces
  const intervals = {
    unison: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4,
    sixth: 5,
    seventh: 6,
    octave: 7,
  }

  // [abbreviation, note name spaces, semitones]
  const intervalQuality = {
    unison: ['P1', 0, 0],
    minorSecond: ['m2', 1, 1],
    majorSecond: ['M2', 1, 2],
    minorThird: ['m3', 2, 3],
    majorThird: ['M3', 2, 4],
    dimenishedFourth: ['D4', 3, 4],
    perfectFourth: ['P4', 3, 5],
    augmentedFouth: ['A4', 3, 6],
    dimenishedFifth: ['D5', 4, 6],
    perfectFifth: ['P5', 4, 7],
    augmentedFifth: ['A5', 4, 8],
    minorSixth: ['m6', 5, 8],
    majorSixth: ['M6', 5, 9],
    minorSeventh: ['m7', 6, 10],
    majorSeventh: ['M7', 6, 11],
  }
</script>

<div class="container-guitar-fretboard">
  <div>
    <select bind:value={noteType} on:change="{updateNotes}" on:blur="{updateNotes}">
      <option value='flats'>Flats</option>
      <option value='sharps'>Sharps</option>
    </select>
  </div>
  {#each fretboard as frets}
		<div class="guitar-string">
			{#each frets as fret, fretIndex}
        <div class="guitar-fret">
          <span class="text-note">{ fret }</span>
          {#if (frets[0] === 'G3')}
            <div class="dot-row">
            {#if (dots.indexOf(fretIndex) > -1)}
              <div class="text-dot"></div>
              {#if fretIndex === 12}
                <div class="text-dot"></div>
              {/if}
            {:else}
              <div class="text-none"></div>
            {/if}
            </div>
          {/if}
        </div>
      {/each}
		</div>
    {/each}
</div>

<style>
.dot-row {
  position: absolute;
  z-index: -1;
}

.guitar-string {
  display: inline-block;
}

.guitar-fret {
  border-right: 0.5px solid #666;
  float: left;
  font-size: 0.8em;
  padding: 7.5px 0;
  width: 40px;
}

.text-dot, .text-none {
  background-color: #fff;
  border-radius: 7px;
  border: #333 1px solid;
  height: 7px;
  margin-left: 16.5px;
  margin-bottom: 5px;
  opacity: 0.5;
  width: 7px;
}

.text-none {
  border: none;
  background-color: transparent;
}

.text-note {
  font-weight: 500;
  /* padding: 15px 0px; */
  z-index: 1;
}
</style>