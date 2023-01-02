const open_menu = document.querySelector('.side_bar_hamburger');
const test = document.querySelector('.sidebar_display');
let x = true;


open_menu.addEventListener('click',function(){
    if(x == true){
        test.classList.remove("sidebar_display");     
        x = !x;
       
    }
     else{
        test.classList.add("sidebar_display");
        x = !x;
     }
    
})

