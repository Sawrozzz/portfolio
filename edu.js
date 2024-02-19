document.addEventListener('DOMContentLoaded',function(){
    function onClickScroll(){
        const scroll = document.querySelector('#myeducation');
        if(scroll){
            scroll.scrollIntoView({behavior:'smooth'})
        }
    }
     
    const skillLink = document.querySelector('.educations');
    if(skillLink){
        skillLink.addEventListener('click',function(event){
             event.preventDefault();
             onClickScroll();
        })
    }
})
