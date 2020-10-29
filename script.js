function readMore() {
    var dots = document.getElementById("dots");
    //Removed dots "..." from span so it looks better with article
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

/* Our team for footer*/
 const btn1 = document.querySelector(".btn1")
 const btn2 = document.querySelector(".btn2")
 const btn3 = document.querySelector(".btn3")
const cont = document.querySelector('.flex-container')


 btn1.addEventListener('click', function() {
 cont.classList.toggle("show");
 footer_const.classList.toggle("footer_const_none");
 
 })


let team =[
  {name: 'Alfred',
  living: 'Amsterdam',
  shortAbout: 'English language level - C2.',
  picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFswRIpsAe1k37Mn9Ve8Xe2fLdby2MfXuxVQ&usqp=CAU',
  codeLang: ['JS', 'C#',]},

  {name: 'Carlos',
  living: 'San Salvador',
  shortAbout: 'This man developing ES2021.',
  picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFfo5vMUf8N8QfkKjUIaJHjLMvxHajQgiAXA&usqp=CAU',
  codeLang: ['C++', 'C',]},

  {name: 'Dima',
  living: 'Minsk',
  shortAbout: 'No Ideas...',
  picture: 'https://cdn.akc.org/content/hero/funny_dog_pictures_header.jpg',
  hobbies: ['HTML', 'CSS']},

  { name: 'Fabien',
  living: 'London',
  shortAbout: 'Man with nice Hat and cup. Personally knows with the Queen',
  picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz7L26mZeMjYhNBvYVnG0R6b7WaaXwWGz2dQ&usqp=CAU',
  hobbies: ['Phyton', 'Vue.js', 'Java']}
]




let idForJS = document.getElementById('idForJS');
let classToHtml = '';




for(let i=0; i < team.length; i++) {

  classToHtml += `
  
  <div class="card-group container">
  <div class="card" id="card">
    <img src="${team[i].picture}" class="card-img-top" alt="${team[i].name}">
    <div class="card-body" id="card-body">
      <h5 class="card-title" id="card-title">${team[i].name}</h5>
      <p class="card-text" id="card-text">${team[i].shortAbout}</p>
      <p class="card-text"><small class="text-muted">${team[i].living}</small></p>
    </div>
  </div>
</div>


  `;
}
idForJS.innerHTML = classToHtml;

let butn3 = document.getElementById('butn3');
let footer_const = document.getElementById('footer_const');
btn3.addEventListener('click', function() {
  butn3.classList.toggle("butn3_show");
  footer_const.classList.toggle("footer_const_none");
  
 
  })