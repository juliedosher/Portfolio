var isDark = true;              // default value - dark mode on

function toggleLightMode() {
    if (isDark) {
        document.getElementById('lightingMode').setAttribute('href', './style/light.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm bg-light navbar-light fixed-top";
        document.getElementById("modeImage").src = './images/icons/moon.png';
        document.getElementById("githubImage").src = './images/icons/github-lightMode.png';
        isDark = false;
   
    } else {
        document.getElementById('lightingMode').setAttribute('href', './style/dark.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm bg-dark navbar-dark fixed-top";
        document.getElementById("modeImage").src = './images/icons/sun.png';
        document.getElementById("githubImage").src = './images/icons/github-darkMode.png';
        isDark = true;
    }
}
