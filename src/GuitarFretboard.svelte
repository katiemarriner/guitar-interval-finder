<script>
  import { dots, frets, intervals, intervalQuality, noteLabels, semitones, strings } from './instrumentVariables';
  $: noteType = 'sharps';
  $: fretboard = strings.map(s => {
    // s = open string
    let note = s.substring(0, s.length - 1);
    let octave = Number(s.substring(s.length - 1));
    let index = semitones[noteType].indexOf(note);
    return [...Array(frets).keys()].map(f => {
      // f = fret number
      let degree = (index + f) % 12;
      let turn = Math.floor((index + f) / 12);
      return semitones[noteType][degree] + (octave + turn).toString();
    });
  }).reverse();
  $: root = 'C';
  $: interval = intervalQuality[0];
    
  const updateNotes = (e) => {
    noteType = e.target.value;
  };

  const updateRoot = (e) => {
    root = e.target.value;
  };

  const updateInterval = (e) => {
    interval = intervalQuality[e.target.value];
  };
</script>

<div class="container-guitar-fretboard">
  <div>
    <label for="select-display">Choose display</label>
    <select id="select-display" bind:value={noteType} on:change="{updateNotes}" on:blur="{updateNotes}">
      <option value='flats'>Flats</option>
      <option value='sharps'>Sharps</option>
    </select>
  </div>
  <div>
    <label for="select-root">Select root</label>
    <select id="select-root" bind:value={root} on:change="{updateRoot}" on:blur="{updateRoot}">
      {#each semitones[noteType] as note}
        <option value='{note}'>{note}</option>
      {/each}
    </select>
  </div>
  <div>
    <label for="select-interval">Select interval</label>
    <select id="select-interval" bind:value={interval} on:change="{updateInterval}" on:blur="{updateInterval}">
      {#each intervalQuality as values, index}
        <option value='{index}'>{values[0]}</option>
      {/each}
    </select>
    <span>{interval[0]}</span>
  </div>
  {#each fretboard as frets}
		<div class="guitar-string">
			{#each frets as fret, fretIndex}
        <div class="guitar-fret fret-{fretIndex}">
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

.fret-0 .text-note {
  font-weight: 900;
  font-size: 1rem;
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