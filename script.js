const f_footer_li = document.getElementById('f_footer_li');
const f_footer_p = document.getElementById('f_footer_li');
f_footer_li.addEventListener('mouseover', ()=>{
    f_footer_p.innerHTML = 'Aliens';
    f_footer_p.style.textAlign = 'center';
 
})
f_footer_li.addEventListener('mouseout', ()=>{
    f_footer_p.innerHTML = 'Who we are?';
    f_footer_p.style.textAlign = 'center';
  
    
    
})
        

