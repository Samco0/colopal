let color_divs = [
    document.getElementById("color0"),
    document.getElementById("color1"),
    document.getElementById("color2"),
    document.getElementById("color3"),
    document.getElementById("color4")
]

let colors = [
    "",
    "",
    "",
    "",
    ""
]

function generate_random(max) {
    return Math.floor(Math.random() * max);
}

function generate_color() {
    let color = "";

    for (let i = 0; i < 6; i++) {
        color += generate_random(16).toString(16);
    }

    return color;
}

function build_colors() {
    for (let i = 0; i < colors.length; i++) {
        colors[i] = generate_color();
    }

    colors.sort();

    for (let i = 0; i < colors.length; i++) {
        color_divs[i].style.backgroundColor = "#" + colors[i];
        color_divs[i].innerHTML = "<p class=\"color_code\">#" + colors[i] + "</p>";
    }
}