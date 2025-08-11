$(function(){
  // Ensure SM2 Bar UI stray hooks don't error
  window.request = window.request || function(){};
  window.newsong = window.newsong || function(){};

  const $playlistList = $('.sm2-playlist-bd');
  const $genreList = $('.genre-list');
  const $songList = $('.song-list');
  const $search = $('#song-search');
  const $sidebar = $('#sidebar');
  const $burger = $('.burger');
  const $overlay = $('.overlay');

  function toggleSidebar(open){
    const willOpen = open !== undefined ? !!open : !$sidebar.hasClass('open');
    $sidebar.toggleClass('open', willOpen);
    $burger.attr('aria-expanded', String(willOpen));
    $sidebar.attr('aria-hidden', String(!willOpen));
    $overlay.prop('hidden', !willOpen);
  }

  $burger.on('click', () => toggleSidebar());
  $overlay.on('click', () => toggleSidebar(false));

  function toItemList(data){
    const items = [];
    for(const [genre, songs] of Object.entries(data)){
      songs.forEach(name => items.push({ genre, name }));
    }
    return items;
  }

  function shuffle(array){
    for(let i=array.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function buildPlaylist(items){
    $playlistList.empty();
    items.forEach(t => {
      const path = `music/${t.genre}/mp3/${encodeURIComponent(t.name)}.mp3`;
      $playlistList.append(`<li><a href="${path}">${t.name}</a></li>`);
    });
  }

  function populateGenres(){
    $genreList.empty();
    Object.keys(playlist).forEach((genre, idx) => {
      const count = playlist[genre].length;
      const id = `g-${idx}`;
      $genreList.append(
        `<li><button id="${id}" class="genre-btn" data-genre="${genre}">`+
        `<span class="fa fa-music" aria-hidden="true"></span> ${genre} <small>(${count})</small>`+
        `</button></li>`
      );
    });
  }

  function populateSongs(genre){
    $songList.empty();
    const songs = genre ? playlist[genre] : toItemList(playlist).map(x=>x.name);
    const entries = genre ? songs.map(name => ({genre, name})) : toItemList(playlist);
    entries.forEach(({genre: g, name}, i) => {
      const id = `s-${i}`;
      $songList.append(
        `<li><button id="${id}" class="song-btn" data-genre="${g}" data-name="${encodeURIComponent(name)}">`+
        `<span class="fa fa-play-circle" aria-hidden="true"></span> ${name}`+
        `</button></li>`
      );
    });
  }

  function filterSongs(term){
    const q = term.trim().toLowerCase();
    if(!q){
      $songList.children('li').show();
      return;
    }
    $songList.children('li').each(function(){
      const text = $(this).text().toLowerCase();
      $(this).toggle(text.indexOf(q) !== -1);
    });
  }

  function setActiveGenre(genre){
    $genreList.find('.genre-btn').removeClass('active');
    if(genre){
      $genreList.find(`.genre-btn[data-genre="${genre}"]`).addClass('active');
    }
  }

  // Events
  $genreList.on('click', '.genre-btn', function(){
    const genre = $(this).data('genre');
    setActiveGenre(genre);
    populateSongs(genre);
  });

  $songList.on('click', '.song-btn', function(){
    const genre = $(this).data('genre');
    const name = decodeURIComponent($(this).data('name'));
    const items = [{genre, name}];
    buildPlaylist(items);
    // auto-play first item by simulating a click on first playlist link
    const first = $('.sm2-playlist-bd a')[0];
    if(first){
      first.click();
    }
    toggleSidebar(false);
  });

  $search.on('input', function(){
    filterSongs($(this).val());
  });

  // Initial state: random shuffled all
  const allItems = toItemList(playlist);
  shuffle(allItems);
  buildPlaylist(allItems);
  populateGenres();
  populateSongs();
});
