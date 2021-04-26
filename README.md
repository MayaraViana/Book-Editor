# Book-Editor
 Future Book Editor for a research project at UnB.
 Esse editor tem como objetivo ajudar pequenas editoras ou pessoas que queiram diagramar um livro de forma simples sem precisar de a contratação de um design a cada diagramação. 

## Protótipo
    https://www.figma.com/file/FO7Nj17Zxv0VxAJ3fkio8b/Book-Editor?node-id=493%3A12

## Organização do código
O código se encontra dividido por componentes: menu superior (sendo subdividido em: menu abas (superior) e menu de formatação (inferior)), menu esquerdo, menu direito e centro de edição de texto.

![Divisão Componentes](./assets-read-me/divisão-componentes.png)

    Menu superior = vermelho
    Menu esquerdo = verde
    Centro de edição = laranja
    Menu direito = azul

#### divisão do menu superior

![Divisão menu superior](./assets-read-me/menusuperior.png)

    Menu Abas = rosa
    Menu Formatação = roxo

## Grid 
    https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    .row = display-flex
    .col = display-flex direction collumn
    
## Issues
    Issues são algumas tarefas que ainda não estão implementadas. 

#### Geral

* revisar mini bootastrap, adicionar classes necessárias e organizar o arquivo. (in progress)

#### Menu superior (menu abas)

* Adicionar css de aba ativa

#### Menu superior (menu formatação)

* Pesquisar e adicionar na barra de formatação a opção de troca de fonte e tamanho de texto. 
* Adicionar 8 itens faltantes na barra de formatação (procurar se o Quill disponibiliza todas as funções)
* adicionar divisores que separam o icones

#### Menu esquerdo

* Criar interação de ligar e desligar elementos. 

#### Centro de edição

* adicionar cabeçalho na pagina
* adicionar barra de edição flutuante
    aparentemente não é possivel colocar duas toolbars (https://quilljs.com/docs/modules/toolbar/). Porém me lembro de colcoar em código passados, perguntar na orientação.
* programação adição de nova página ao escrever mais que uma página

#### Menu direito

* adicionar barra azul flutuante (Não foi feita a adição ainda pois Luis e Luanda ainda irão refinar ele um pouco mais)
