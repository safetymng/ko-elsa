
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") { location.href = '안전보건관리 가이드.html';

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