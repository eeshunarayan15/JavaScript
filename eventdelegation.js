var parent=document.querySelector('#parent')
parent.addEventListener('click', function (e) { 
    if (e.target.id == "play") {
        console.log("Play clicked");
           
    } else if (e.target.id == "pause") { 
        console.log("Pause clicked");
    }
        console.log("Parent clicked");

    });