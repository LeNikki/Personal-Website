/* PARA SA SECOND DIV */
    const sec1 = document.getElementById("second1");
    const sec2 = document.getElementById("second2");
    
   
    window.addEventListener ("scroll", function(){
        if (this.screen.width>400){
       
        let offset = window.pageYOffset;
        sec1.style.backgroundPositionY = offset;
        sec2.style.backgroundPositionY = offset;
        console.log(offset);

        if ((offset <= 422)){
            sec1.style.display = "none";
            sec2.style.display = "none";
        }
        else{
            slide();
            function slide (){
        $(".second1").slideDown(1000);
        sec1.style.display = "flex";
        $(".second2").slideDown(2000);
        sec2.style.display = "flex";
            }
        }
    }
    })



  





    




