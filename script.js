function photoClickAlert() {
    alert("Please don't click here");
}
function mouseEnterHandler(event) {
    console.log("event", event);
}
function mouseOutHandler(event) {
    console.log("event", event);
}
function changeInputAlert(event) {
    alert(event.target.value);
}
function changeGitSectionColor() {
    let color = ["#cafcca", "#badbad", "#c9c3af", "#dedace", "#afeeee", "#c7fcec", "#daf7f7"];
    function changeBackgroundColor() {
        let element = document.getElementById("git_section");
        element.style["background-color"] = color[Math.floor(Math.random() * color.length)];
    }
    setInterval(changeBackgroundColor, 1000)
}
