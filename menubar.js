var Menuitems = document.getElementById('Menuitems');

// Set initial state
if (Menuitems) {
    Menuitems.style.maxHeight ="0px";
}

function menutoggle(){
    if (Menuitems) {
        if(Menuitems.style.maxHeight == "0px") { 
            // Menu is opening
            Menuitems.style.maxHeight= "200px";
            
            // Check for the dynamic function and run it when opening
            if(typeof window.onMenuOpenCallback === 'function') {
                window.onMenuOpenCallback();
            }
        } else {
            // Menu is closing
            Menuitems.style.maxHeight ="0px";
        }
    }
}