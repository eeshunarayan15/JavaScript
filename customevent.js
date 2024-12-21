const evt=new Event('chacha');
var btn=document.querySelector("#parent")
btn.addEventListener("click", function() {
    console.log("Button clicked");
    alert("Button clicked");
});
document.querySelector("button").dispatchEvent(evt);

