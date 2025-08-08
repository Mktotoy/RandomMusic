$(function(){
  const list = $('.sm2-playlist-bd');
  const items = [];

  function shuffle(array){
    for(let i=array.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [array[i],array[j]]=[array[j],array[i]];
    }
  }

  function render(){
    list.empty();
    shuffle(items);
    items.forEach(t => list.append(`<li><a href="${t.url}">${t.name}</a></li>`));
  }

  for(const [genre,songs] of Object.entries(playlist)){
    songs.forEach(name=>{
      const url = `music/${genre}/mp3/${encodeURIComponent(name)}.mp3`;
      items.push({name,url});
    });
  }

  render();

  const JAMENDO_CLIENT_ID = 'YOUR_CLIENT_ID';
  const apiUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=${JAMENDO_CLIENT_ID}&format=json&limit=10&audioformat=mp31`;

  fetch(apiUrl)
    .then(r=>r.json())
    .then(data=>{
      data.results.forEach(track=>{
        items.push({name:track.name,url:track.audio});
      });
      render();
      $('#api-info').attr('title','Music from local library and Jamendo API');
    })
    .catch(err=>console.error('Jamendo API error',err));
});
