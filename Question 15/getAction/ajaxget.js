$(function () {
    v= $.get("ajaxget.php?couleur=15", function (datas, status) {
        $("body").css("background-color", datas);
    });
});
