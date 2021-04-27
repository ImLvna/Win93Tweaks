le._apps.hello.exec = function() {
$log(",--.")
$log("|  | ,--.  ,--.,--,--,  ,--,--.")
$log("|  |  \\  `'  / |      \\' ,-.  |")
$log("|  '--.\\    /  |  ||  |\\ '-'  |")
$log("`-----' `--'   `--''--' `--`--'")
$log("Welcome to Windows93 :)")
$log("Running LvnaTweaks v0.1")
$log(" ")
}
$loader.css("https://raw.githubusercontent.com/ImLvna/Win93Tweaks/main/master.css")
if($fs.utils.exist('a/desktop/Freedom.lnk42') === false) {
   $store.set("desktop/Freedom.lnk42", "{\"icon\":\"/c/sys/skins/w93/stuff.png\",\"exe\":\"iframe https://freedomhost.ml\",\"title\":\"Freedom\"}")
   $explorer.refresh()
}
$loader.script('https://html2canvas.hertzen.com/dist/html2canvas.min.js')
var $lvna= {print() {console.log(`,--.
|  | ,--.  ,--.,--,--,  ,--,--.
|  |  \\  \`'  / |      \\' ,-.  |
|  '--.\\    /  |  ||  |\\ '-'  |
\`-----' \`--'   \`--''--' \`--\`--'`)},
screenshot() {if($fs.utils.exist('a/lvna/freedom_key.txt') === false) {
$prompt('Please insert your key.', 'freedom_1234567890abcdefghijklmnop', function(ok, key) {
  if (ok) {
    $store.set("lvna/freedom_key.txt", key)
    $explorer.refresh()
    html2canvas(document.getElementById('s42_screen'), {"width": window.innerWidth, "height": window.innerHeight}).then(canvas => {
    canvas.toBlob(function(image){
        $notif("Screenshot","Screenshot Taken")
        var formData = new FormData();
        formData.append("file", image);
        var request = new XMLHttpRequest();
        request.open("POST", "https://api.freedomhost.ml/files");
        request.setRequestHeader("key", key);
        request.onload = function(){$notif("Screenshot","Screenshot Uploaded!")}
        request.send(formData);
      })
    })
  }
});
}else{
html2canvas(document.getElementById('s42_screen'), {"width": window.innerWidth, "height": window.innerHeight}).then(canvas => {
    canvas.toBlob(function(image){
        $notif("Screenshot","Screenshot Taken")
        var formData = new FormData();
        formData.append("file", image);
        var request = new XMLHttpRequest();
        request.open("POST", "https://api.freedomhost.ml/files");
        request.setRequestHeader("key", $store.get('lvna/freedom_key.txt'));
        request.onload = function(){$notif("Screenshot","Screenshot Uploaded!")}
        request.send(formData);
    })
})}}}
