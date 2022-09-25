import data from './po.json' assert { type: 'json' };

let search  =  document.getElementById("carregar");
let area = document.getElementById("targetArea");

search.addEventListener("click",()=>{
    Object.entries(data).forEach(element=>{
        area.innerHTML +=
         `<div class='indivContent'>
            <h2 style ="${validaCor(element[0])}">${element[0]}</h2>
            <span class="header">Titulo:</span> <span>${element[1].title}</span> <br>
            <span class="header">Conteudo:</span> <span>${element[1].content} </span> <br>
            <span class="header">Tags:</span> <span class="tags">${element[1].tags.join(" ")}</span>
        </div>`
        
        
    })
   
});
/**
 * 
 * @param {string} valor ai sim
 */
function validaCor(valor) {
    let id = valor.split('-');
    switch (id[1]) {
        case '01':
            return `color:red;`
            break;

        case '02':
            return `color:blue;`
            break;
        case '03':
            return `color:green;`
            break;
        case '04':
            return `color:white;`
            break;
        default :
            return 'color:orange;';
            break;
    }
}


