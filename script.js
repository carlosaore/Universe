function myFunction() {
    var dots = document.getElementById("dots");
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
  
const f_footer_li = document.getElementById('f_footer_li');
const f_footer_p = document.getElementById('f_footer_p');
f_footer_li.addEventListener('mouseover', ()=>{
    f_footer_p.innerHTML = 'Aliens';
    f_footer_p.style.color = '#00FFFF'
 
})
f_footer_li.addEventListener('mouseout', ()=>{
    f_footer_p.innerHTML = 'Who we are?';
    f_footer_p.style.color = '#D3D3D3'
     
})




const f_footer_li2 = document.getElementById('f_footer_li2');
const f_footer_p2 = document.getElementById('f_footer_p2');
f_footer_li2.addEventListener('mouseover', ()=>{
    f_footer_p2.innerHTML = 'Wild Code School';
    f_footer_p2.style.color = '#00FFFF'
 
})
f_footer_li2.addEventListener('mouseout', ()=>{
    f_footer_p2.innerHTML = 'Our School';
    f_footer_p2.style.color = '#D3D3D3'
     
})



const f_footer_li3 = document.getElementById('f_footer_li3');
const f_footer_p3 = document.getElementById('f_footer_p3');
f_footer_li3.addEventListener('mouseover', ()=>{
    f_footer_p3.innerHTML = 'Send letters with doves';
    f_footer_p3.style.color = '#00FFFF'
 
})
f_footer_li3.addEventListener('mouseout', ()=>{
    f_footer_p3.innerHTML = 'Contact Us';
    f_footer_p3.style.color = '#D3D3D3'
     
})




/* Our team for footer*/

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

idForJS.innerHTML = classToHtml