import projetos from '../elements/projetos.json' assert { type: 'json' };

let content = document.getElementById('content');

Object.entries(projetos).forEach(element => {
    const values = element[1];
    let contentCell = document.createElement('div')
    contentCell.classList.add('content-cell')
    
    let imagem = document.createElement('img')
    imagem.classList.add('content-cell-img')
    imagem.src =values.url

    let contentCellInfo = document.createElement('div')
    contentCellInfo.classList.add('content-cell-info')

    let list = document.createElement('ul')
    Object.keys(values).forEach(el =>{
        if(el === 'url') return;
        let list_item = document.createElement('li')
        let list_item_destaque = document.createElement('span')
        list_item_destaque.classList.add('content-cell-info-destaque')
        if(el === "date_i"){
            list_item_destaque.textContent ='Data de inicio: '
        }else{
            list_item_destaque.textContent =el +': '
        }

        list_item.append(list_item_destaque)
        list_item.append(values[el])
        list.appendChild(list_item)
        console.log(el)
    })
    contentCellInfo.appendChild(list)

    contentCell.appendChild(imagem)
    contentCell.appendChild(contentCellInfo)
    
    content.appendChild(contentCell)
});
