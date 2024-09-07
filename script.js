var tl = gsap.timeline();
tl.from("nav",{
    y: "-100%",
    duration: 0.5,
    delay: 1,
    opacity: 0
})
tl.from(".one h2",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
},"eksath")
tl.from(".one button",{
    y: -20,
    opacity: 0,
    duration: 0.5
},"eksath")
tl.from(".two i",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: -0.2
},"eksath")

tl.from(".play",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: 1
},"eksath")

tl.from(".dabbe",{
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 1,
},"eksath")
tl.from(".logo",{
    y: -10,
    opacity: 0,
    duration: 0.5,
    ease: 1
},"eksath")


const about = document.getElementById("About");
about.addEventListener("click",()=>{
    document.getElementById("Main").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

const gallery = document.getElementById("Photos");
gallery.addEventListener("click",()=>{
    document.getElementById("Gallery").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

document.getElementById('play').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoPlayer = document.getElementById('video-player');

    // Show the video container
    videoContainer.style.display = 'flex';

    // Play the video
    videoPlayer.play();
});

document.getElementById('close-button').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoPlayer = document.getElementById('video-player');

    // Hide the video container
    videoContainer.style.display = 'none';

    // Pause the video
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Reset the video to the beginning
});




