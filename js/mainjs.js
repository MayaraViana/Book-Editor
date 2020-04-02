function editor_preview() {
    
    // 1) copia conteúdo do campo
    var texto = $('#editor_container').val();
    // 2) escondi o editor
    $('#editor_container').hide();
    // 3) injetei o conteúdo do livro no DIV
    $('#editor_area').html(texto);
    
}

var myJSON = JSON.stringify($("#id_do_meu_form").serializeArray());