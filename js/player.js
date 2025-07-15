$(function(){
  const items = [];
  for(const [genre,songs] of Object.entries(playlist)){
    songs.forEach(name=>items.push({genre,name}));
  }
  function shuffle(array){
    for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]];}
  }
  shuffle(items);
  const list = $('.sm2-playlist-bd');
  items.forEach(t => {
    const path = `music/${t.genre}/mp3/${encodeURIComponent(t.name)}.mp3`;
    list.append(`<li><a href="${path}">${t.name}</a></li>`);
  });
});
