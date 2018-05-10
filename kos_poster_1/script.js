function expand(){
    var x = document.getElementById("bubble");
    var y = document.getElementById("metaphor");
    var a = document.getElementById("description");
    x.style.top = "10%";
    y.style.top = "60%";
    a.style.color = "rgb(0,0,0)";
}
function collapse(){
    var x = document.getElementById("bubble");
    var y = document.getElementById("metaphor");
    var a = document.getElementById("description");
    x.style.top = "25%";
    y.style.top = "45%";
    a.style.color = "rgba(0,0,0,0)";
}
