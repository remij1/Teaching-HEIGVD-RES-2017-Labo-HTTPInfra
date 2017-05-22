$(function() {
    console.log("Loading computers");

    function loadComputers(){
        $.getJSON("/api/computers/", function(computers){
            console.log(computers);

            var message = "No computer hacked";
            if(computers.length > 0){
                message = computers[0].ip + " used the password : '" + computers[0].lastPasswordUsed + "'";
            }

            $(".intro-text").text(message);
        });
    };

    loadComputers();

    setInterval(loadComputers, 2000);
});