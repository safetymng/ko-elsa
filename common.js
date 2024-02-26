
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") {
        pw.value = "";
        location.href = '안전보건관리 가이드.html';
    } else {
        pw.value = "";
        alert("코드를 확인해 주세요.");
    }
    
}

window.onload = function() {
    document.querySelector('#pw').addEventListener("keyup", (event) => {
        if (event.key == 'Enter') {
            login();
        }
    });
};

// document.addEventListener('keyup', (event) => {
//     if (event.key == 'Enter') {
//         login();
//     }
// });