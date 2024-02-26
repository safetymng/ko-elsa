
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") { location.href = '안전보건관리 가이드.html';

    }
    
}

function getKeyEventCode() {

}


var input = document.getElementById("pw");

input.addEventListener("keyup", (event) => {
    console.log(event);
});