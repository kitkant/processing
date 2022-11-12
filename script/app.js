let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
const arrow = document.querySelectorAll('.arrow')
const body = document.querySelector('body')
const itemArrow = document.querySelectorAll('.item-arrow')
let isActive = false

const removeOpen = () => {
    arrow.forEach(event =>{
        event.nextElementSibling.classList.remove('open')
        event.classList.remove('active')
        
    })
    
}


if(isMobile.any()){
    body.classList.add('touch')
    arrow.forEach( event =>{
		let subMenu = event.nextElementSibling
        let thisArrow = event

        event.addEventListener('click',()=>{
            
            if(event.classList.contains('active') )
                {
                    subMenu.classList.toggle('open')
                    thisArrow.classList.toggle('active')
                    
                }
            else
                {   
                    removeOpen()
                    subMenu.classList.add('open')
                    thisArrow.classList.add('active')
                
                }
            
        })
    })
}else{
	body.classList.add('mouse');
    

}

document.addEventListener('click', (target)=>{
    if(target.path[0] === document.querySelector("body"))
        removeOpen()
    if(target.path[0] === document.querySelector(".arrow.active"))
        {
        
    }
})