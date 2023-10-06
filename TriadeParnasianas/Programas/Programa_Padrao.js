//#region Ativação de Poema_Oculto
//Variavel global para teste de click
var Poema_Oculto_Teste = 1;

//Variavel global para deixar apenas um
var Poema_Oculto = "";

//Variavel global Atribuição correta de Poema Oculto Teste
var Poema_Oculto_Anterior;

//Função que altera a visibilidade
function Controlar_Visibilidade_Poema_Oculto() {
  if (Poema_Oculto_Teste === 0) {
    var Botao_Focado = document.activeElement;
    Botao_Focado.blur();

    Poema_Oculto.style.display = "";
    Poema_Oculto.style.position = "";
    Poema_Oculto.style.transform = "";
    Poema_Oculto.style.zIndex = "5";
    Poema_Oculto_Teste = 1;
    console.log("Execução correta");
  } else {
    Poema_Oculto.style.display = "flex";
    Poema_Oculto.style.position = "absolute";
    Poema_Oculto.style.transform = "translate(7px, 38px)";
    Poema_Oculto.style.zIndex = "1";
    Poema_Oculto_Teste = 0;
  }
  if (window.Valor_Barra_Pesquisa_Poema_Exportacao !== undefined) {
    if (window.Valor_Barra_Pesquisa_Poema_Exportacao !== "") {
      Valor_Barra_Pesquisa_Poema_Exportacao.blur();
      Valor_Barra_Pesquisa_Poema_Exportacao = "";
    }
  }
}

//Função que limpa a anterior antes de ativar novamente
function Limpar_Controle_Anterior() {
  Poema_Oculto.style.display = "";
  Poema_Oculto.style.position = "";
  Poema_Oculto.style.transform = "";
  Poema_Oculto.blur();
  Poema_Oculto.style.zIndex = "5";
}

//Funções que utilizam as funções de Limpar controle anterior e de controlar visibilidade
//Poema1
function Inverter_Visao_Poema_Oculto1() {
  console.log("Executado");
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto1");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto1");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema2
function Inverter_Visao_Poema_Oculto2() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto2");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto2");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema3
function Inverter_Visao_Poema_Oculto3() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto3");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto3");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema4
function Inverter_Visao_Poema_Oculto4() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto4");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto4");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema5
function Inverter_Visao_Poema_Oculto5() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto5");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto5");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema6
function Inverter_Visao_Poema_Oculto6() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto6");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto6");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema7
function Inverter_Visao_Poema_Oculto7() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto7");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto7");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema8
function Inverter_Visao_Poema_Oculto8() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto8");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto8");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema9
function Inverter_Visao_Poema_Oculto9() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto9");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto9");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema10
function Inverter_Visao_Poema_Oculto10() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto10");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto10");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema11
function Inverter_Visao_Poema_Oculto11() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto11");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto11");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema12
function Inverter_Visao_Poema_Oculto12() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto12");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto12");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema13
function Inverter_Visao_Poema_Oculto13() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto13");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto13");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema14
function Inverter_Visao_Poema_Oculto14() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto14");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto14");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema15
function Inverter_Visao_Poema_Oculto15() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto15");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto15");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema16
function Inverter_Visao_Poema_Oculto16() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto16");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto16");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema17
function Inverter_Visao_Poema_Oculto17() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto17");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto17");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema18
function Inverter_Visao_Poema_Oculto18() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto18");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto18");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema19
function Inverter_Visao_Poema_Oculto19() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto19");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto19");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema20
function Inverter_Visao_Poema_Oculto20() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto20");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto20");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema21
function Inverter_Visao_Poema_Oculto21() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto21");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto21");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema22
function Inverter_Visao_Poema_Oculto22() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto22");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto22");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema23
function Inverter_Visao_Poema_Oculto23() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto23");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto23");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema24
function Inverter_Visao_Poema_Oculto24() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto24");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto24");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema25
function Inverter_Visao_Poema_Oculto25() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto25");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto25");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema26
function Inverter_Visao_Poema_Oculto26() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto26");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto26");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema27
function Inverter_Visao_Poema_Oculto27() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto27");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto27");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema28
function Inverter_Visao_Poema_Oculto28() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto28");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto28");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema29
function Inverter_Visao_Poema_Oculto29() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto29");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto29");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema30
function Inverter_Visao_Poema_Oculto30() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto30");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto30");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema31
function Inverter_Visao_Poema_Oculto31() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto31");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto31");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema32
function Inverter_Visao_Poema_Oculto32() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto32");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto32");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema33
function Inverter_Visao_Poema_Oculto33() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto33");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto33");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema34
function Inverter_Visao_Poema_Oculto34() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto34");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto34");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema35
function Inverter_Visao_Poema_Oculto35() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto35");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto35");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema36
function Inverter_Visao_Poema_Oculto36() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto36");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto36");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema37
function Inverter_Visao_Poema_Oculto37() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto37");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto37");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema38
function Inverter_Visao_Poema_Oculto38() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto38");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto38");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema39
function Inverter_Visao_Poema_Oculto39() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto39");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto39");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema40
function Inverter_Visao_Poema_Oculto40() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto40");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto40");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema41
function Inverter_Visao_Poema_Oculto41() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto41");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto41");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema42
function Inverter_Visao_Poema_Oculto42() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto42");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto42");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema43
function Inverter_Visao_Poema_Oculto43() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto43");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto43");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema44
function Inverter_Visao_Poema_Oculto44() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto44");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto44");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema45
function Inverter_Visao_Poema_Oculto45() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto45");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto45");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema46
function Inverter_Visao_Poema_Oculto46() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto46");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto46");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema47
function Inverter_Visao_Poema_Oculto47() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto47");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto47");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema48
function Inverter_Visao_Poema_Oculto48() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto48");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto48");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema49
function Inverter_Visao_Poema_Oculto49() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto49");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto49");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema50
function Inverter_Visao_Poema_Oculto50() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto50");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto50");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema51
function Inverter_Visao_Poema_Oculto51() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto51");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto51");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema52
function Inverter_Visao_Poema_Oculto52() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto52");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto52");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema53
function Inverter_Visao_Poema_Oculto53() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto53");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto53");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema54
function Inverter_Visao_Poema_Oculto54() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto54");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto54");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema55
function Inverter_Visao_Poema_Oculto55() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto55");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto55");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema56
function Inverter_Visao_Poema_Oculto56() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto56");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto56");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema57
function Inverter_Visao_Poema_Oculto57() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto57");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto57");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema58
function Inverter_Visao_Poema_Oculto58() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto58");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto58");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema59
function Inverter_Visao_Poema_Oculto59() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto59");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto59");
  Controlar_Visibilidade_Poema_Oculto();
}

//Poema60
function Inverter_Visao_Poema_Oculto60() {
  Poema_Oculto_Anterior = document.querySelector(".Poemas_Oculto60");
  if (Poema_Oculto !== "") {
    Limpar_Controle_Anterior();
    if (Poema_Oculto !== Poema_Oculto_Anterior) {
      Poema_Oculto_Teste = 1;
    }
  }
  Poema_Oculto = document.querySelector(".Poemas_Oculto60");
  Controlar_Visibilidade_Poema_Oculto();
}

//#endregion
