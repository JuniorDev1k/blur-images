

     
 const images = document.querySelectorAll('.images-js') 


        images.forEach(function(image){
              image.addEventListener('click',function(){
                    
                    if( image.style.opacity == "1"){
                     image.style.opacity = "0.2"
                    } 
                    else{
                     image.style.opacity = "1"
                    }            
               })
        })

        //completed that was super easy!! and HAD Fun
        