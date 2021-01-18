const form = document.getElementById('form');
const search = document.getElementById('search'); // input
const result = document.getElementById('result');
const more = document.getElementById('more'); // Pagination

const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
  // fetch(`${apiURL}/suggest/${term}`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

// Show song and artist in DOM
function showData(data) {}

// Event listeners
form.addEventListener('submit', (e) => {
  // So it doesn't try to submit to a file
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Please enter a search term.');
  } else {
    searchSongs(searchTerm);
  }
});
