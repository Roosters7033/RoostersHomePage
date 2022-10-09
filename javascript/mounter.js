import carregaveis from '../elements/carregaveis.json' assert { type: 'json' };

function loadNav(object){
    try {
        fetch(object.url)
        .then(response=> response.text())
        .then(text=> document.getElementById(object.id).innerHTML = text);
    } catch (error) {
        console.log('teste');
    }
    
}

Object.entries(carregaveis).forEach(element=>{
    console.log(element[1])
    loadNav(element[1]);
})


//loadNav('navigation');