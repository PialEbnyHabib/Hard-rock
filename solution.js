const search =document.getElementById("find");

search.addEventListener('click',function(){

  let songName = document.getElementById("songtitle").value;
  console.log(songName);
  fetch(`https://api.lyrics.ovh/suggest/${songName}`)
  .then(response => response.json())
  .then(object => {
    console.log(object);

    //Displaying Lyrics
    const lyricsContainer = document.getElementById("lyrics-container");
    lyricsContainer.style.display="none";
    const lContainer = document.getElementById("l-container");
    const lyricsTitle = document.getElementById("lyrics-title");


    function displayLyrics(artistName,songTitle){
      fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
      .then(response => response.json())
      .then(data => {
        lyricsContainer.style.display="block";
        lContainer.innerText = data.lyrics;
        lyricsTitle.innerText = songTitle;
      })
    }
    
    document.getElementById("fancy-result").style.display ="block";

    document.getElementById("suggest1").innerText = object.data[0].title;
    document.getElementById("artistName1").innerText = object.data[0].artist.name;
    
    document.getElementById("lyrics1").addEventListener('click',function(){
      displayLyrics(object.data[0].artist.name, object.data[0].title);
    })


    document.getElementById("suggest2").innerText = object.data[1].title;
    document.getElementById("artistName2").innerText = object.data[1].artist.name;

    document.getElementById("lyrics2").addEventListener('click',function(){
      displayLyrics(object.data[1].artist.name, object.data[1].title);
    })
    
    document.getElementById("suggest3").innerText = object.data[2].title;
    document.getElementById("artistName3").innerText = object.data[2].artist.name;
    
    document.getElementById("lyrics3").addEventListener('click',function(){
      displayLyrics(object.data[2].artist.name, object.data[2].title);
    })

    document.getElementById("suggest4").innerText = object.data[3].title;
    document.getElementById("artistName4").innerText = object.data[3].artist.name;

    document.getElementById("lyrics4").addEventListener('click',function(){
      displayLyrics(object.data[3].artist.name, object.data[3].title);
    })
    
    document.getElementById("suggest5").innerText = object.data[4].title;
    document.getElementById("artistName5").innerText = object.data[4].artist.name;
    document.getElementById("lyrics5").addEventListener('click',function(){
      displayLyrics(object.data[4].artist.name, object.data[4].title);
    })

    document.getElementById("suggest6").innerText = object.data[5].title;
    document.getElementById("artistName6").innerText = object.data[5].artist.name;

    document.getElementById("lyrics6").addEventListener('click',function(){
      displayLyrics(object.data[5].artist.name, object.data[5].title);
    })
    
    document.getElementById("suggest7").innerText = object.data[6].title;
    document.getElementById("artistName7").innerText = object.data[6].artist.name;

    document.getElementById("lyrics7").addEventListener('click',function(){
      displayLyrics(object.data[6].artist.name, object.data[6].title);
    })

    document.getElementById("suggest8").innerText = object.data[7].title;
    document.getElementById("artistName8").innerText = object.data[7].artist.name;

    document.getElementById("lyrics8").addEventListener('click',function(){
      displayLyrics(object.data[7].artist.name, object.data[7].title);
    })
    
    document.getElementById("suggest9").innerText = object.data[8].title;
    document.getElementById("artistName9").innerText = object.data[8].artist.name;

    document.getElementById("lyrics9").addEventListener('click',function(){
      displayLyrics(object.data[8].artist.name, object.data[8].title);
    })

    document.getElementById("suggest10").innerText = object.data[9].title;
    document.getElementById("artistName10").innerText = object.data[9].artist.name;

    document.getElementById("lyrics10").addEventListener('click',function(){
      displayLyrics(object.data[9].artist.name, object.data[9].title);
    })





  });

})


