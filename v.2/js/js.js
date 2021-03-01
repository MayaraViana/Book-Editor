var elementosAtivos = true 

function OnOffElementos () {
    if (elementosAtivos = true) {
    document.getElementsById('sub-itens-icon-aberto').style.display = 'none'
    document.getElementsById('sub-itens-icon-fechado').style.display = 'block'
    elementosAtivos = false
    console.log('funfa')
    }
    else {
    document.getElementsByClassName('sub-itens-icon-aberto').style.display = 'block'
    document.getElementsByClassName('sub-itens-icon-fechado').style.display = 'false'
    elementosAtivos = true
    }
}