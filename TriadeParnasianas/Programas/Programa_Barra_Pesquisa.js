//#region Obtenha elementos HTML
//Adiciona o comando de Input onde se adiciona o texto
const Barra_Pesquisa = document.getElementById("Input_Pesquisa_Poemas");

//Adiciona a ul onde vai aparecer a lista com os resultados
const Resultados_Barra_Pesquisa = document.getElementById(
  "Resultados_Pesquisa_Site"
);

//Adiciona Todos os comandos p exitentes dentro da div com class .poem-list e transforma a variavel em uma variavel de objeto
const Lista_Com_Poemas = document.querySelectorAll(".Poemas p");

//Cria uma variavel que vai futuramente receber o comando do Poema que foi modificado, para que quando alterar o antigo volte a seu estado anterior
var Salvar_Valor_Barra_Pesquisa_Poema;
//#endregion

//#region Variável para controlar o número máximo de resultados exibidos
//Cria uma constante com numero Maximo de Resultados
const Maximo_Resultados = 5;

//Cria uma variavel com a Quantia de resultados que estao sendo mostrados agora
let Resultados_Atuais = 0;
//#endregion

// Função para executar a pesquisa
function Pesquisar_Poemas() {
  // Faz com que todo o texto dentro da variavel Barra_Pesquisa esteja com todas as letras em minusculo, assim evitando erros ou conflitos, por diferença de minusculo para maiusculo
  const Nome_Dentro_Input_Pesquisa = Barra_Pesquisa.value.toLowerCase();

  // Limpe a lista de resultados
  Resultados_Barra_Pesquisa.innerHTML = "";

  // Faz com que os Resultados Atuais sejam rezetados, para não haver erro de contagem e sem querer contar os antigos e novos
  Resultados_Atuais = 0;

  // Itere(Faz com que cada objeto dentro de Listas_Com_Poemas seja atribuido temporariamente a uma variavel chamada Poemas, assim executando todos eles) sobre a lista de poemas
  Lista_Com_Poemas.forEach((Poemas) => {
    // Verifica se a quantia de Resultados que apareceram já execeu a quantia maxima
    if (Resultados_Atuais >= Maximo_Resultados) {
      // Se foi exedido, ele vai retornar e cancelar a iteneração sobre os objetos restantes
      return;
    }

    // Atribui o texto contido em Poemas para Texto_Poema com todas as letras em minusculo para que não haja conflito
    const Texto_Poema = Poemas.textContent.toLowerCase();

    // Adiciona o Elemento Pai(button) do elemento p para funcionar
    const Elemento_Pai_Necessario = Poemas.parentElement;

    //Atribui o id contido dentro de Poemas, a uma constante chamada Poema_ID
    const Poema_ID = Elemento_Pai_Necessario.id;

    // Verifique se o poema contém o termo de pesquisa
    if (Texto_Poema.includes(Nome_Dentro_Input_Pesquisa)) {
      // Cria uma constante de tag tipo li(Usada para listas)
      const Lista_Items = document.createElement("li");

      // Cria uma constante de tag tipo a(Usada para Links)
      const Link_Items = document.createElement("a");

      // Adiciona o texto contido em Poemas para o Texto contido na constante Link_Items
      Link_Items.textContent = Poemas.textContent;

      // Adiciona á constante Link_Items o atributo href com o valor de # mais o valor contido na variavel Poema_ID
      Link_Items.href = "#" + Poema_ID;

      // Adiciona o codigo de comando Link_Items como filho(Dentro) do codigo de comando Lista_Items
      Lista_Items.appendChild(Link_Items);

      // Adiciona o codigo de comando Lista_Items como filho(Dentro) do codigo de comando Resultados_Barra_Pesquisa
      Resultados_Barra_Pesquisa.appendChild(Lista_Items);

      // Adiciona mais um de valor a Resultados_Atuais
      Resultados_Atuais++;
    }
  });
}

//#region Adicione um ouvinte de eventos à entrada de pesquisa
// Aciona a função de pesquisar poemas quando ocorre algum input(Mudança de texto) na Barra_Pesquisa
Barra_Pesquisa.addEventListener("input", Pesquisar_Poemas);
// Aciona a função de pesquisar poemas quando ocorre foco(Clica) na Barra_Pesquisa
Barra_Pesquisa.addEventListener("focus", Pesquisar_Poemas);
//#endregion

// Aciona uma função de evento toda vez que ocorre um click dentro da area de Resultados_Barra_Pesquisa
Resultados_Barra_Pesquisa.addEventListener("click", (event) => {
  // Verifica se o evento selecionado que foi clicado é da tag do tipo A
  if (event.target.tagName === "A") {
    // Se for Ele vai atribuir o atribuido href do evento selecionado á constante Poema_ID
    const Poema_ID = event.target.getAttribute("href");

    // Faz com que o Valor que for obtido no Poema_ID, sirva para Puxar o codigo para a constante Poema
    const Poema = document.querySelector(Poema_ID);

    // Se for encontrado o codigo, vai executar as alterações
    if (Poema) {
      // Faz com que tenha o status de focado
      Poema.focus();
      Salvar_Valor_Barra_Pesquisa_Poema = Poema;
    } else {
      Salvar_Valor_Barra_Pesquisa_Poema = "";
    }
  }
});

// Aciona a primeira pesquisa ao apertar a tecla enter
Barra_Pesquisa.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const Primeira_Pesquisa = Resultados_Barra_Pesquisa.querySelector("li a");
    if (Primeira_Pesquisa) {
      Primeira_Pesquisa.click();
    }
  }
});

//#region Exportações
// Exportando Foco Atual barra de pesquisa
window.Valor_Barra_Pesquisa_Poema_Exportacao =
  Salvar_Valor_Barra_Pesquisa_Poema;
//#endregion
