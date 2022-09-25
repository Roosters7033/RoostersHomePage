function loadNav(id){
    fetch('../elements/nav.html')
    .then(response=> response.text())
    .then(text=> document.getElementById(id).innerHTML = text);
}

loadNav('navigation');