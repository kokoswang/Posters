window.addEventListener('load', function() {
    var parent = document.getElementById("square");
    var parent = document.getElementById("circle");

    for (i = 0; i < 1000; i++) {
        var child = document.createElement("square");
        child.className = "square";
        child.style.transform = "rotate(" + i * 7 + "deg)";
        child.style.width = i * 0.9 + "px";
        child.style.marginLeft = i * -0.4 + "px";
        child.style.cssFloat = "left";
        parent.append(child);
    }

    for (i = 0; i < 600; i++) {
        child.className = "square";
        child.style.transform = "rotate(" + i * 20 + "deg)";
        child.style.width = i * 0.8 + "px";
        child.style.marginLeft = i * 0.2 + "px";
        child.style.cssFloat = "right";
        parent.append(child);
    }
});
