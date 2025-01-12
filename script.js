const iconItems = document.querySelectorAll('.icon-item');
let currentIndex = 0;

function fadeOutAndIn() {
   
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * iconItems.length);
    } while (randomIndex === currentIndex);

 
    iconItems.forEach((icon, index) => {
        if (index === currentIndex) {
        
            icon.style.opacity = '1';
        } else if (index === randomIndex) {
          
            icon.style.opacity = '0';
        } else {
           
            icon.style.opacity = '1';
        }

        
        icon.style.transition = 'opacity 1s ease-in-out';
    });

   
    currentIndex = (currentIndex + 1) % iconItems.length;
}


setInterval(fadeOutAndIn, 2000);
