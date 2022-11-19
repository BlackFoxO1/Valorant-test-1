$(document).ready( function() {
    let hidenRow = $(".exent");
    $(".exent-btn").click( function() {
        hidenRow.toggleClass("hiden");
        if (hidenRow.is(":visible")) {
            $(".exent-btn").html("HIDE");
        }
        else {
            $(".exent-btn").html("MORE");
        }
    });
    $(".rang-but").click(function () {
        $(".mod-canvs").toggleClass("hiden");
    });
    $(".m-close").click(function () {
        $(".mod-canvs").toggleClass("hiden");
    });
})
