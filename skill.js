document.addEventListener('DOMContentLoaded',function(){
    function onClickScroll(){
        const scroll = document.querySelector('#skill');
        if(scroll){
            scroll.scrollIntoView({behavior:'smooth'})
        }
    }
     
    const skillLink = document.querySelector('.skill');
    if(skillLink){
        skillLink.addEventListener('click',function(event){
             event.preventDefault();
             onClickScroll();
        })
    }
})
