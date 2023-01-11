$(function(){

    let player1_cpoints = 0;
    let player1_tpoints = 0;
    let player2_cpoints = 0;
    let player2_tpoints = 0;

    var current_player = 1;

    $(document).on("click", ".buttons #btn1", function(){

        $(".dice-roll #r-roll").addClass("rolling");
        var interval = setInterval(() => {
            var random = Math.round(Math.random() * 5) + 1;
            $(".dice-roll #r-roll").attr("src", "./img/dice img/r" + random + ".png");
        }, 250);
        setTimeout(() => {
            $(".dice-roll #r-roll").removeClass("rolling");
            clearInterval(interval);
            var random = Math.round(Math.random() * 5) + 1;
            $(".dice-roll #r-roll").attr("src", "./img/dice img/" + random + ".png");
            if(current_player == 1){
                if(random == 1) {
                    player1_cpoints = 0;
                    player1_tpoints = 0;
                    current_player = 2;
                    $(".active").removeClass("active");
                    $(".player2").addClass("active");
                } else {
                    player1_cpoints = random;
                    player1_tpoints += random;
                }
                $(".main .player1 .current-points span").html(player1_cpoints);
                if(player1_tpoints >= 30){
                    player1_cpoints = 0;
                    player1_tpoints = 0;
                    player2_cpoints = 0;
                    player2_tpoints = 0;
                    current_player = 1;
                    $(".active").removeClass("active");
                    $(".player1").addClass("active");
                    $(".main .player1 .current-points span").html("0");
                    $(".main .player1 .total-points span").html("0");
                    $(".main .player2 .current-points span").html("0");
                    $(".main .player2 .total-points span").html("0");
                    $(".back-win .players").attr("src", "./img/player1.jpg");
                    $(".back-win .span-winner").html("player1");
                    $(".back-win").css("display", "flex");
                } else {
                    $(".main .player1 .total-points span").html(player1_tpoints);
                }
                
            } else if(current_player == 2){
                if(random == 1) {
                    player2_cpoints = 0;
                    player2_tpoints = 0;
                    current_player = 1;
                    $(".active").removeClass("active");
                    $(".player1").addClass("active");
                } else {
                    player2_cpoints = random;
                    player2_tpoints += random;
                }
                $(".main .player2 .current-points span").html(player2_cpoints);
                if(player2_tpoints >= 30){
                    player1_cpoints = 0;
                    player1_tpoints = 0;
                    player2_cpoints = 0;
                    player2_tpoints = 0;
                    current_player = 1;
                    $(".active").removeClass("active");
                    $(".player1").addClass("active");
                    $(".main .player1 .current-points span").html("0");
                    $(".main .player1 .total-points span").html("0");
                    $(".main .player2 .current-points span").html("0");
                    $(".main .player2 .total-points span").html("0");
                    $(".back-win .players").attr("src", "./img/player2.jpg");
                    $(".back-win .span-winner").html("player2");
                    $(".back-win").css("display", "flex");
                } else {
                    $(".main .player2 .total-points span").html(player2_tpoints);
                }
            }
        }, 2500);

    });

    $(document).on("click", ".buttons #btn2", function(){

        if(current_player == 1) {
            current_player = 2;
            $(".active").removeClass("active");
            $(".player2").addClass("active");
        } else {
            current_player = 1;
            $(".active").removeClass("active");
            $(".player1").addClass("active");
        }

    });

    $(document).on("click", ".buttons #btn3", function(){

        player1_cpoints = 0;
        player1_tpoints = 0;
        player2_cpoints = 0;
        player2_tpoints = 0;
        current_player = 1;
        $(".active").removeClass("active");
        $(".player1").addClass("active");
        $(".main .player1 .current-points span").html("0");
        $(".main .player1 .total-points span").html("0");
        $(".main .player2 .current-points span").html("0");
        $(".main .player2 .total-points span").html("0");
        $(".back-win").css("display", "none");

    });

    $(document).on("click", ".buttons #btn4", function(){

        player1_cpoints = 0;
        player1_tpoints = 0;
        player2_cpoints = 0;
        player2_tpoints = 0;
        current_player = 1;
        $(".active").removeClass("active");
        $(".player1").addClass("active");
        $(".main .player1 .current-points span").html("0");
        $(".main .player1 .total-points span").html("0");
        $(".main .player2 .current-points span").html("0");
        $(".main .player2 .total-points span").html("0");
        $(".back-win").css("display", "none");

    });

});