const images = ["1.jpg","2.jpg","3.jpg"];

// 랜덤한 숫자에 images 길이만큼 곱해서 floor  
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// body에 html 추가
document.body.appendChild(bgImage); 





