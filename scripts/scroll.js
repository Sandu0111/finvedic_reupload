window.addEventListener("scroll", (body) => {
    let progressValue = document.getElementById("my-menu");
    let scroll = this.scrollY;

    if(scroll>100){
        progressValue.style.display="grid";
    }
    else{
        progressValue.style.display="none";
    }
    console.log(scroll)
});

