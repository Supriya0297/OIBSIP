function effect(){
    var val = document.getElementById("bb1");
    var dis = window.innerHeight - val.getBoundingClientRect().top;
    if(dis >= 100){
        let A = document.getElementsByClassName("b6");
        A[0].classList.add("python");
        A[1].classList.add("htmlcss");
        A[2].classList.add("mySQL");
        A[3].classList.add("C");
        A[4].classList.add("Javascript");
        A[5].classList.add("comunicacion");
        A[6].classList.add("trabajo");
        A[7].classList.add("creatividad");
        A[8].classList.add("dedicacion");
        A[9].classList.add("proyect");
    }
}
window.onscroll = function(){
    effect();
}