var isDark = true;              // default value - dark mode on

function toggleLightMode() {
    if (isDark) {
        document.getElementById('lightingMode').setAttribute('href', './style/light.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm bg-light navbar-light fixed-top";
        isDark = false;
   
    } else {
        document.getElementById('lightingMode').setAttribute('href', './style/dark.css');
        document.getElementById("nav").className = "navbar navbar-expand-sm bg-dark navbar-dark fixed-top";
        isDark = true;
    }
}
