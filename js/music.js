$(() => {
    const col = setbackground();
    $("#nav").css("background-color", col);
    $(".sm2-main-controls").css("background-color", col);
    $(".sm2-playlist-drawer").css("background-color", $(".sm2-main-controls").css("background-color"));
});
