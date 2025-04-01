document.addEventListener('DOMContentLoaded', function(){ /*Carrega todos os elementos html, e faz com que carregue os elementos DOM, e disponibiliza os elementos para manutenção*/

    /*Selecionando os elementos, para funcionamento do java*/
    const buttons = document.querySelectorAll('[data-tab-button]') /*cria uma constante buttons, e seleciona jquery e com o atributo dos botões [data-tab-button] */
    const tabsContainer = document.querySelectorAll('[data-tab-id]') /*cria uma constante tabsContainer,e seleciona o jquery com o atributo e com o atributo [data-tab-id]*/ 

    /*Adicionando Evento de Clique aos botões*/
    for(let i=0; i<buttons.length; i++){ /*o FOR cria um loop que percorre, todos os botões */
        buttons[i].addEventListener('click' , function(botao){ /*adiciona um evento de click, quando o evento de clique em cada botão, aciona a função de click*/
            
            const abaAlvo =  botao.target.dataset.tabButton /*cria a constante abaAlvo, esse atributo serve pra identificar a aba correspondente*/
            const aba= document.querySelector(`[data-tab-id=${abaAlvo}]`) /*cria a constante aba, e que com o queryselector, o que esta dentro de [] faz a busca a aba que esta sendo clicada */
            
            escondeTodasAbas()
            aba.classList.add('shows_list--is-active') /*Esconde todas as abas antes de exibir a correta*/
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
            
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i=0; i<buttons.length; i++)
        buttons[i.classList.remove('shows__tabs__button--is-active')]
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i=0 ; i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows_list--is-active')
    }
}
