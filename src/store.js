import { writable } from 'svelte/store';

const DisplayStore = writable({
  noteDisplay: 'sharps'
});

export default DisplayStore;