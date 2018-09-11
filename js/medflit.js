var TeamMembers = function() {

    var LoadComponents = function() {
       
    }

    $("#details2").hide();
    $("#details3").hide();
    $("#details4").hide();
    $("#details5").hide();
    $("#details6").hide();
    $("#details7").hide();
    $("#details8").hide();
    $("#details9").hide();
    
    

    return {
        init: function() {
            // LoadComponents();
            $("#arr-side").on('click', function() {
                $("#details").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side2").on('click', function() {
                $("#details2").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side3").on('click', function() {
                $("#details3").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side4").on('click', function() {
                $("#details4").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side5").on('click', function() {
                $("#details5").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side6").on('click', function() {
                $("#details6").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side7").on('click', function() {
                $("#details7").toggle(1000, function(){
                    //
                });
            });

            $("#arr-side8").on('click', function() {
                $("#details8").toggle(1000, function(){
                    //
                });
            });
            $("#arr-side9").on('click', function() {
                $("#details9").toggle(1000, function(){
                    //
                });
            });
        }
    }
}();

jQuery(document).ready(function() {
    TeamMembers.init();
});

// if ($(window).width() == 767) {
//     $("#arr").show();
//     $("#arr-side").hide();
// }