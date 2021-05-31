let strings = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];
let dots = [5, 7, 9, 12, 15, 17, 19];
let frets = 22;

let noteLabels = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let semitones = {
  sharps: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  flats: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
}

// note name spaces
let intervals = {
  unison: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  sixth: 5,
  seventh: 6,
  octave: 7,
}

// [name, abbreviation, note name spaces, semitones]
let intervalQuality = [
  ['Unison', 'P1', 0, 0],
  ['Minor second', 'm2', 1, 1],
  ['Major second', 'M2', 1, 2],
  ['Minor third', 'm3', 2, 3],
  ['Major third', 'M3', 2, 4],
  ['Dimenished fourth', 'D4', 3, 4],
  ['Perfect fourth', 'P4', 3, 5],
  ['Augmented fouth', 'A4', 3, 6],
  ['Dimenished fifth', 'D5', 4, 6],
  ['Perfect fifth', 'P5', 4, 7],
  ['Augmented fifth', 'A5', 4, 8],
  ['Minor sixth', 'm6', 5, 8],
  ['Major sixth', 'M6', 5, 9],
  ['Minor seventh', 'm7', 6, 10],
  ['Major seventh', 'M7', 6, 11],
]

export {
  dots,
  frets,
  intervals,
  intervalQuality,
  noteLabels,
  semitones,
  strings,
}