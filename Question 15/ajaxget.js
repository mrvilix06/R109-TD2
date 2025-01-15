$(function () {
    v= $.get("ajaxget.php?couleur=15", function (datas, status) {
        $("#div1").html(datas);
    });
});
