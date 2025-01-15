$(function () {
    v= $.get("ajaxget.php?couleur=red", function (datas, status) {
        $("body").css("background-color", datas);
    });
});
