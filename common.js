
function login() {

    var pw = document.querySelector('#pw');

    if(pw.value == "Koelsa") { location.href = '안전보건관리 가이드.html';

    }
    
}

document.addEventListener('keyup', (event) => {
    console.log.apply(event);
});