function adduser(){
    player1name=document.getElementById("player1_name_input").value;
    player2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1 Name",player1name);
    localStorage.setItem("Player2 Name",player2name);
    window.location="game_page.html";
    }