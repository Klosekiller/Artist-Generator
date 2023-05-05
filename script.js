 let TwoKSongs =    [{
    SongName: "Tennessee Whiskey",
    Album: "Traveller",
    Artist: "Chris Stapleton" ,
    img: "/Artist-Generator/Traveller (1).png",
    YT: "https://www.youtube.com/watch?v=4zAThXFOy2c",
    Spotify: "https://open.spotify.com/embed/track/3fqwjXwUGN6vbzIwvyFMhx?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/Tennessee_Whiskey_(song)"
},{
    SongName: "Californication",
    Album: "Californication",
    Artist: "Red Hot Chili Peppers",
    img: "/Artist-Generator/Californication.png",
    YT: "https://www.youtube.com/watch?v=YlUKcNNmywk",
    Spotify: "https://open.spotify.com/embed/track/48UPSzbZjgc449aqz8bxox?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/Californication_(song)"
},{
    SongName: "Seven Nation Army",
    Album: "Elephant",
    Artist: "White Stripes",
    img: "/Artist-Generator/Elephant.png",
    YT: "https://www.youtube.com/watch?v=0J2QdDbelmY",
    Spotify: "https://open.spotify.com/embed/track/3dPQuX8Gs42Y7b454ybpMR?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/Seven_Nation_Army"
},{
    SongName: "On The Run",
    Album: "The Jompson Brothers",
    Artist: "The Jompson Brothers",
    img: "/Artist-Generator/The Jompson Brothers.png",
    YT: "https://www.youtube.com/watch?v=RYaFqqFY8Zg",
    Spotify: "https://open.spotify.com/embed/track/03EsYwfN3RbDhU1kVrfffA?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/The_Jompson_Brothers"
},{
    SongName: "Some Beach",
    Album: "Blake Shelton's Barn & Grill",
    Artist: "Blake Shelton",
    img: "/Artist-Generator/Blake Shelton's Barn & Grill.png",
    YT: "https://www.youtube.com/watch?v=0Fnn5olv4pI",
    Spotify: "https://open.spotify.com/embed/track/0ZhwjSovRmeXfoOKVItfhS?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/Some_Beach"
},{        
    SongName: "(Sittin' On) the Dock of the Bay",
    Album: "Otis Redding",
    Artist: "Otis Redding",
    img: "/Artist-Generator/Otis Redding.png",
    YT: "https://www.youtube.com/watch?v=rTVjnBo96Ug",
    Spotify: "https://open.spotify.com/embed/track/3zBhihYUHBmGd2bcQIobrF?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/(Sittin%27_On)_The_Dock_of_the_Bay"
},{        
    SongName: "Beyond the Sea",
    Album: " ",
    Artist: "Bobby Darin",
    img: "/Artist-Generator/Bobby Darin.png",
    YT: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    Spotify: "https://open.spotify.com/embed/track/3KzgdYUlqV6TOG7JCmx2Wg?utm_source=generator&theme=0",
    wiki: "https://en.wikipedia.org/wiki/Beyond_the_Sea_(song)"
}]


var storeNumber = 0;

document.getElementById("find").addEventListener("click", getArtist);

function findSong() {
    storeNumber = randomNumber;
    document.getElementById("song").innerHTML = TwoKSongs[randomNumber].SongName;
    document.getElementById("album").innerHTML = TwoKSongs[randomNumber].Album;
    document.getElementById("artist").innerHTML = TwoKSongs[randomNumber].Artist;
    document.getElementById("image").innerHTML = `<img src="${TwoKSongs[randomNumber].img}" class="card-img img-fluid rounded-start shadow-sm" alt="Find Your Song" />`;
    document.getElementById("yt").href = TwoKSongs[randomNumber].YT;
    document.getElementById("sf").src = TwoKSongs[randomNumber].Spotify;
    document.getElementById("wiki").src = TwoKSongs[randomNumber].wiki;
}

function getArtist() {
    var randomNumber = Math.floor(Math.random() * TwoKSongs.length);
    if (randomNumber == storeNumber) {
        randomNumber++;
        findSong();
    } else {
        findSong();
    }
}