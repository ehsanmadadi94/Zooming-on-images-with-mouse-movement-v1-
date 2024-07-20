function Main(){
    let zoomedImage = document.querySelector('.zoomed-image');
    let sidebar = document.querySelector('.sidebar');
    let firstImage = document.querySelector('.small-preview');
    
    zoomedImage.style.backgroundImage = `url(${firstImage.src})`

    sidebar.addEventListener('click' , function(event){
        let elm = event.target;
        if(elm.classList.contains('small-preview')){
            zoomedImage.style.backgroundImage = `url(${elm.src})`
        }
    })

    zoomedImage.addEventListener('mouseenter' , function(){
        this.style.backgroundSize = '300%'
    })

    zoomedImage.addEventListener('mousemove' , function(e){
        let dimentions = this.getBoundingClientRect();
        
        
        let x = e.clientX - dimentions.left;
        let y = e.clientY - dimentions.top;
        
        x = Math.round(100/(dimentions.width/x));
        y = Math.round(100/(dimentions.height/y));
        

        this.style.backgroundPosition = `${x}% ${y}%`;
    })

    zoomedImage.addEventListener('mouseleave' , function(){
        this.style.backgroundPosition = 'center'
        this.style.backgroundSize = 'cover';
    })
}
Main()