function setbackground()
{
    window.setTimeout( "setbackground()", 2000000); // 5000 milliseconds delay

    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if(index == 1)
        return ColorValue = "#1abc9c"; //peach
    if(index == 2)
        return ColorValue = "#1abc9c"; //violet
    if(index == 3)
        return ColorValue = "#2980b9"; //lt blue
    if(index == 4)
        return ColorValue = "#34495e"; //cyan
    if(index == 5)
        return ColorValue = "#e67e22"; //tan
    if(index == 6)
        return ColorValue = "#c0392b"; //lt green
    if(index == 7)
        return ColorValue = "#9b59b6"; //lt yellow
    if(index == 8)
        return ColorValue = "#f1c40f"; //lt orange
    if(index == 9)
        return ColorValue = "#95a5a6"; //lt grey





}
$(function () {
    var $srctype;
    $srctype="movie/";
   request(newsong);
    soundManager.onready(function(){
        soundManager.play();
    });

    $("#prev").click(request(newsong));
    $("#next").click(request(newsong));

    document.getElementsByTagName("body")[0].style.backgroundColor = setbackground();

    $(".sm2-main-controls").css("background-color",setbackground());
    $(".sm2-playlist-drawer").css("background-color", $(".sm2-main-controls").css("background-color"));

    function newsong(sData) {
        $(".debug").html(sData.replace(/ /g,'%20'));
                var newhtml;

            newhtml=' <li><a href="music/'+$srctype+'mp3/'+sData.replace(/ /g,'%20')+'.mp3">'+sData+'</a></li>';


        $(".oio").html(newhtml);
        //$(".download").attr('href','music/'+$srctype+'mp3/'+sData+'.mp3');
        setbackground();
    }
    function getXMLHttpRequest() {
        var xhr = null;

        if (window.XMLHttpRequest || window.ActiveXObject) {
            if (window.ActiveXObject) {
                try {
                    xhr = new ActiveXObject("Msxml2.XMLHTTP");
                } catch(e) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
            } else {
                xhr = new XMLHttpRequest();
            }
        } else {
            alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
            return null;
        }

        return xhr;
    }
    function request(callback) {
        var xhr = getXMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                callback(xhr.responseText);
            }
        };



        xhr.open("POST", "control/setmusi.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("variable1="+$srctype+"");
    }



});
