function setbackground()
{
    window.setTimeout( "setbackground()", 2000000); // 5000 milliseconds delay

    var colors = [
        "#1abc9c", //peach
        "#1abc9c", //violet
        "#2980b9", //lt blue
        "#34495e", //cyan
        "#e67e22", //tan
        "#c0392b", //lt green
        "#9b59b6", //lt yellow
        "#f1c40f", //lt orange
        "#95a5a6", //lt grey
        "#D91E18", //Thunderbird
        "#663399", //REBECCAPURPLE
        "#446CB3", //SAN MARINO
        "#52B3D9", //SHAKESPEARE
        "#C5EFF7", //HUMMING BIRD
        "#03A678", //FREE SPEECH AQUAMARINE
        "#F4B350" //CASABLANCA
    ];

        return colors[Math.floor(Math.random() * colors.length)];

}
$(function () {
    var $srctype;
    $srctype="electro/";

    var flag =false;


    request(newsong);
    request(newsong);

    soundManager.setup({
        onready: function() {

            window.sm2BarPlayers[0].actions.play("sound0");
        }
    });


    $(".nxt").click(function() {
        request(newsong);

    });
    $(".typof").click(function(){
        var tmp2 = $(this).attr("href").substring(1);
        $(".musictitle").html(tmp2.substring(0,1).toUpperCase()+tmp2.substring(1)+" Random Music")
        $srctype=$(this).attr("href");
        $srctype=$srctype.substring(1)+"/";
        $(".oio").find("li").last().remove();
        request(newsong);

    });




    function newsong(sData) {

        var MusicUrl;
        MusicUrl = 'music/'+$srctype+'mp3/'+sData.replace(/ /g,'%20')+'.mp3';
        var newhtml = $(".oio").html();
        if(newhtml.search(MusicUrl)>-1){
            request(newsong);
        }
        else {
            newhtml += ' <li><a href="' + MusicUrl + '">' + sData + '</a></li>';
            $(".oio").html(newhtml);
            //$(".download").attr('href','music/'+$srctype+'mp3/'+sData+'.mp3');
            document.getElementsByTagName("body")[0].style.backgroundColor = setbackground();
            $(".sm2-main-controls").css("background-color", setbackground());
            $(".sm2-playlist-drawer").css("background-color", $(".sm2-main-controls").css("background-color"));

        }
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
