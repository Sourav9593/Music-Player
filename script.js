const song = document.getElementById('song');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const image = document.querySelector('img');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let isPlay = false;
play.addEventListener('click', () =>{
    if(isPlay==false){
    song.play();
    isPlay=true;
    play.classList.replace('fa-play','fa-pause')
    image.classList.add('animate');
    play.style.background='white'
    play.style.color='black'
    }
    else{
        song.pause();
        isPlay=false;
        image.classList.remove('animate');
        play.classList.replace('fa-pause','fa-play')
        play.style.background='black'
        play.style.color='white'
    }
});


const playList=[
    {title:"Maan-Meri-Jaan",
    artist:"KING",
    song:"song-1",
    image:"song-1"},

    {title:"Deva-Deva",
    artist:"Arijit Singh",
    song:"song-2",
    image:"song-2"},

    {title:"Laboon-Ko",
    artist:"KK",
    song:"song-3",
    image:"song-3"}
]
let index=0
const loadSong = (playList)=>{
    title.textContent = playList.title;
    artist.textContent = playList.artist;
    song.src = "songs/" + playList.song + ".mp3"
    image.src = "images/" + playList.image + ".jpeg"
}
loadSong(playList[0]);


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

function nextSong(){
    index++;
    loadSong(playList[index % playList.length]); 
    song.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('animate');
    play.style.background='white'
    play.style.color='black'

}

function prevSong(){
    index--;
    loadSong(playList[index % playList.length]);
    song.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('animate');
    play.style.background='white'
    play.style.color='black'
}