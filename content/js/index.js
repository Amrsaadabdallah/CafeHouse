//#region define global variable for catch element to Cache them.
let toggleBtn = window.document.getElementById("toggleBtn") ,
    navBar = window.document.querySelector("nav") ,
    navList = window.document.querySelector("nav div.navList"),
    scrollTopBtn =  window.document.getElementById("scrollTopBtn"),
    navListStyle ;
//#endregion




//#region For  change hide preload after window loading.
window.onload = function(){

   let preload = window.document.querySelector("div.preload") ;
    window.setTimeout(()=>{
        preload.style.transition = "all 1s ease" ;
        preload.style.opacity = "0" ;

        window.setTimeout(()=>{
            preload.style.display = "none" ;
            window.document.body.style.overflow = "auto" ;

        },1000);

    },2000);

}
//#endregion




//#region For Setting  NavBar Toggle Button.
        toggleBtn.addEventListener("click",function(){
            
            navListStyle = window.getComputedStyle(navList) ;

            if(navListStyle.display  == "none"){
                navList.style.display= "block" ;
            }else{
                navList.style.display = "none" ;
            }

        });
//#endregion




//#region For Setting  small devices xs and sm Media.
        // Create a condition that targets viewports at up tp 767.99px wide
        const smMediaVar = window.matchMedia('(max-width: 767.99px)') ;

        function smMediaFun(e) {
        // Check if the media query is true
            if (e.matches) { 
                // Then log the following message to the console
                if(navList.style.display == "block"){
                    navList.style.display = "none"
                }
            }
        }

        // Register event listener
        smMediaVar.addListener(smMediaFun) ;

        // Initial check
        smMediaFun(smMediaVar);
//#endregion




//#region For Setting large devices md, lg and xl Media.
        // Create a condition that targets viewports at least 768px wide
        const lgMediaVar = window.matchMedia('(min-width: 768px)') ;

        function lgMediaFun(e) {
        // Check if the media query is true
            if (e.matches) { 
                // Then log the following message to the console
                if(navList.style.display == "none"){
                    navList.style.display = "block"
                }
            }
        }

        // Register event listener
        lgMediaVar.addListener(lgMediaFun) ;

        // Initial check
        lgMediaFun(lgMediaVar);
//#endregion




//#region For Setting scrollTopBtn actions show & hidden & scroll.


scrollTopBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
//#endregion




//#region For Setting action when scrolling
window.onscroll = function(){
    //change Navbar Background
    if(window.scrollY > navBar.offsetHeight){
        navBar.style.backgroundColor = "rgba(0,0,0,0.7)";
    }else{
        navBar.style.backgroundColor = "rgba(0,0,0,1)";
    }

    //show & hidden scrollTopBtn.
    if(window.scrollY >= window.document.querySelector("header").offsetHeight){
        scrollTopBtn.style.display = "block";
    }else{
        scrollTopBtn.style.display = "none";
    }

}
//#endregion




