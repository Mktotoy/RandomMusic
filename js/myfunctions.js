/**
 * Created by thaonzo on 24/09/2015.
 */
const srctype = "electro/";

const setbackground = () => {
    setTimeout(setbackground, 2000000);
    const colors = [
        "#1abc9c", // peach
        "#1abc9c", // violet
        "#2980b9", // lt blue
        "#34495e", // cyan
        "#e67e22", // tan
        "#c0392b", // lt green
        "#9b59b6", // lt yellow
        "#f1c40f", // lt orange
        "#95a5a6", // lt grey
        "#D91E18", // Thunderbird
        "#663399", // REBECCAPURPLE
        "#446CB3", // SAN MARINO
        "#52B3D9", // SHAKESPEARE
        "#C5EFF7", // HUMMING BIRD
        "#03A678", // FREE SPEECH AQUAMARINE
        "#F4B350" // CASABLANCA
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

const newsong = (sData) => {
    const MusicUrl = `music/${srctype}mp3/${sData.replace(/ /g, '%20')}.mp3`;
    let newhtml = $(".oio").html();
    if (newhtml.search(MusicUrl) > -1) {
        request(newsong);
    } else {
        newhtml += ` <li><a href="${MusicUrl}">${sData}</a></li>`;
        $(".oio").html(newhtml);
        // $(".download").attr('href', `music/${srctype}mp3/${sData}.mp3`);
    }
};

const request = (callback) => {
    fetch("control/setmusi.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `variable1=${srctype}`
    })
        .then((response) => response.text())
        .then(callback)
        .catch((err) => console.error(err));
};

$(document).ready(() => {
    $('.navbar-nav [data-toggle="tooltip"]').tooltip();
    $('.navbar-twitch-toggle').on('click', (event) => {
        event.preventDefault();
        $('.navbar-twitch').toggleClass('open');
    });

    $('.nav-style-toggle').on('click', (event) => {
        event.preventDefault();
        const $current = $('.nav-style-toggle.disabled');
        $('.navbar-twitch').removeClass(`navbar-${$current.data('type')}`);
        $('.navbar-twitch').addClass(`navbar-${$(event.currentTarget).data('type')}`);
    });
});
