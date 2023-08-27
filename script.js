

let contentGridElement = document.getElementById('contentGrid');
let jsonDatabase = [
  {
    "video_url": "https://cindy0815.github.io/portfolio/venuspillvid.mp4",
    "description": "A fictional pill model",
  },
  {
    "video_url": "https://cindy0815.github.io/portfolio/watch%20vid0001-0300.mp4",
    "description": "A futuristic watch with a hologram display",
  },
  
  {
    "picture_url": "https://cindy0815.github.io/portfolio/room.webp",
    "description": "Model of a small comfy living room",
  },
   {
    "picture_url": "https://cindy0815.github.io/portfolio/bear.png",
    "description": "Original character model",
  },
  {
    "video_url": "https://cindy0815.github.io/portfolio/hatvid.mp4",
    "description": "A model of a futuristic hat that reads people's minds",
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i], i);
}

function createElementProper(incomingJson) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');
  newContentElement.setAttribute('data-aos', 'fade-up');
  newContentElement.setAttribute('data-aos-duration', '2000'); // Set animation duration
  newContentElement.setAttribute('data-aos-delay', '200');   // Set animation delay

  if ('picture_url' in incomingJson && !('video_url' in incomingJson)) {
    let newContentImage = document.createElement("IMG");
    newContentImage.classList.add("contentImage");
    newContentImage.src = incomingJson['picture_url'];
    newContentElement.appendChild(newContentImage);
  } else if ('video_url' in incomingJson) {
    let newContentVideo = document.createElement("VIDEO");
    newContentVideo.classList.add("contentVideo");
    newContentVideo.src = incomingJson['video_url'];
    newContentVideo.autoplay = true;
    newContentVideo.loop = true;
    newContentVideo.muted = true;
    newContentElement.appendChild(newContentVideo);
  }

  let newContentDescription = document.createElement("P");
  newContentDescription.classList.add('contentDescription');
  newContentDescription.innerText = incomingJson['description'];
  newContentElement.appendChild(newContentDescription);

  contentGridElement.appendChild(newContentElement);
}

AOS.init();
