var darkModeModification = `<style class='dark-mode-mod'>
    a.hero {
        background-color: #000000;
    }
    a.header,
     .button, 
     .features {
        background-color: #a60303;
    }
    </style>`

function toggleDarkMode(newState) {
    if (newState == "on") {
        DarkReader.enable();
        document.head.insertAdjacentHTML("beforeend", darkModeModification); 
    }
    else{
        DarkReader.disable(); 
        var cssMod = document.getElementsByClassName("dark-mode-mod")[0]; 
        if (cssMod) {
            cssMod.parentElement.removeChild(cssMod);
        }
    }
}