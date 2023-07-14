function adduser(){
    player1name=document.getElementById("player1_name_input").value;
    player2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1 Name",player1name);
    localStorage.setItem("Player2 Name",player2name);
    window.location="game_page.html";
    }
function send(){
number1=document.getElementById("num1").value;
number2=document.getElementById("num2").value;
actual_answer=parseInt(number1)*parseInt(number2)
question_number="<h4>"+number1+"x"+number2+"</h4>";
input_box="<br>Answer: <input type='number' id='input_answer'";
check_button="<br><br><button class'btn btn-info onclick='check()'>check</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}