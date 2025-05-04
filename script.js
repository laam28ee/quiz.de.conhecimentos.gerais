let acertos = 0;

function comecar() {
    document.getElementById("titulo").style.display = "none";
    document.getElementById("comecar").style.display = "none";
    document.getElementById("pergunta1").style.display = "block";
    document.getElementById("taxonomia").style.display = "block";
    document.getElementById("opcoes1").style.display = "block";
    document.getElementById("conferir1").style.display = "block";
  }

function conferir1() {
  const resposta1 = document.getElementsByName("resposta1");
  let selecionado = "";
  for (let i = 0; i < resposta1.length; i++) {
    if (resposta1[i].checked) {
      selecionado = resposta1[i].value;
      break;
    }
  }

  document.getElementById("correto1").style.display = "none";
  document.getElementById("errado1").style.display = "none";
  document.getElementById("respostacerta1").style.display = "none";

  if (selecionado === "cnidaria") {
    document.getElementById("correto1").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado1").style.display = "block";
    document.getElementById("respostacerta1").style.display = "block";
  }
  document.getElementById("proxima2").style.display = "block";
}

function proxima2() {
  document.getElementById("pergunta1").style.display = "none";
  document.getElementById("opcoes1").style.display = "none";
  document.getElementById("conferir1").style.display = "none";
  document.getElementById("correto1").style.display = "none";
  document.getElementById("errado1").style.display = "none";
  document.getElementById("respostacerta1").style.display = "none";
  document.getElementById("proxima2").style.display = "none";
  document.getElementById("taxonomia").style.display = "none";

  document.getElementById("pergunta2").style.display = "block";
  document.getElementById("honda").style.display = "block";
  document.getElementById("opcoes2").style.display = "block";
  document.getElementById("conferir2").style.display = "block";
}

function conferir2() {
  const resposta2 = document.getElementsByName("resposta2");
  let selecionado2 = "";
  for (let i = 0; i < resposta2.length; i++) {
    if (resposta2[i].checked) {
      selecionado2 = resposta2[i].value;
      break;
    }
  }

  document.getElementById("correto2").style.display = "none";
  document.getElementById("errado2").style.display = "none";
  document.getElementById("respostacerta2").style.display = "none";

  if (selecionado2 === "honda") {
    document.getElementById("correto2").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado2").style.display = "block";
    document.getElementById("respostacerta2").style.display = "block";
  }
  document.getElementById("proxima3").style.display = "block";
}

function proxima3() {
  document.getElementById("pergunta2").style.display = "none";
  document.getElementById("opcoes2").style.display = "none";
  document.getElementById("conferir2").style.display = "none";
  document.getElementById("correto2").style.display = "none";
  document.getElementById("errado2").style.display = "none";
  document.getElementById("respostacerta2").style.display = "none";
  document.getElementById("proxima3").style.display = "none";
  document.getElementById("honda").style.display = "none";

  document.getElementById("pergunta3").style.display = "block";
  document.getElementById("bandeira").style.display = "block";
  document.getElementById("opcoes3").style.display = "block";
  document.getElementById("conferir3").style.display = "block";
}

function conferir3() {
  const resposta3 = document.getElementsByName("resposta3");
  let selecionado3 = "";
  for (let i = 0; i < resposta3.length; i++) {
    if (resposta3[i].checked) {
      selecionado3 = resposta3[i].value;
      break;
    }
  }

  document.getElementById("correto3").style.display = "none";
  document.getElementById("errado3").style.display = "none";
  document.getElementById("respostacerta3").style.display = "none";

  if (selecionado3 === "jamaica") {
    document.getElementById("correto3").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado3").style.display = "block";
    document.getElementById("respostacerta3").style.display = "block";
  }
  document.getElementById("proxima4").style.display = "block";
}

function proxima4() {
  document.getElementById("pergunta3").style.display = "none";
  document.getElementById("opcoes3").style.display = "none";
  document.getElementById("conferir3").style.display = "none";
  document.getElementById("correto3").style.display = "none";
  document.getElementById("errado3").style.display = "none";
  document.getElementById("respostacerta3").style.display = "none";
  document.getElementById("proxima4").style.display = "none";
  document.getElementById("bandeira").style.display = "none";

  document.getElementById("burgos").style.display = "block";
  document.getElementById("pergunta4").style.display = "block";
  document.getElementById("opcoes4").style.display = "block";
  document.getElementById("conferir4").style.display = "block";
}

function conferir4() {
  const resposta4 = document.getElementsByName("resposta4");
  let selecionado4 = "";
  for (let i = 0; i < resposta4.length; i++) {
    if (resposta4[i].checked) {
      selecionado4 = resposta4[i].value;
      break;
    }
  }

  document.getElementById("correto4").style.display = "none";
  document.getElementById("errado4").style.display = "none";
  document.getElementById("respostacerta4").style.display = "none";

  if (selecionado4 === "baixaidademedia") {
    document.getElementById("correto4").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado4").style.display = "block";
    document.getElementById("respostacerta4").style.display = "block";
  }
  document.getElementById("proxima5").style.display = "block";
}

function proxima5() {
  document.getElementById("pergunta4").style.display = "none";
  document.getElementById("opcoes4").style.display = "none";
  document.getElementById("conferir4").style.display = "none";
  document.getElementById("correto4").style.display = "none";
  document.getElementById("errado4").style.display = "none";
  document.getElementById("respostacerta4").style.display = "none";
  document.getElementById("proxima5").style.display = "none";
  document.getElementById("burgos").style.display = "none";

  document.getElementById("pergunta5").style.display = "block";
  document.getElementById("unidadesfederativas").style.display = "block";
  document.getElementById("opcoes5").style.display = "block";
  document.getElementById("conferir5").style.display = "block";
}

function conferir5() {
  const resposta5 = document.getElementsByName("resposta5");
  let selecionado5 = "";
  for (let i = 0; i < resposta5.length; i++) {
    if (resposta5[i].checked) {
      selecionado5 = resposta5[i].value;
      break;
    }
  }

  document.getElementById("correto5").style.display = "none";
  document.getElementById("errado5").style.display = "none";
  document.getElementById("respostacerta5").style.display = "none";

  if (selecionado5 === "27") {
    document.getElementById("correto5").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado5").style.display = "block";
    document.getElementById("respostacerta5").style.display = "block";
  }
  document.getElementById("proxima6").style.display = "block";
}    

function proxima6() {
  document.getElementById("pergunta5").style.display = "none";
  document.getElementById("opcoes5").style.display = "none";
  document.getElementById("conferir5").style.display = "none";
  document.getElementById("correto5").style.display = "none";
  document.getElementById("errado5").style.display = "none";
  document.getElementById("respostacerta5").style.display = "none";
  document.getElementById("proxima6").style.display = "none";
  document.getElementById("unidadesfederativas").style.display = "none"; 

  document.getElementById("americadosul").style.display = "block";
  document.getElementById("pergunta6").style.display = "block";
  document.getElementById("opcoes6").style.display = "block";
  document.getElementById("conferir6").style.display = "block";
}

function conferir6() {
  const resposta6 = document.getElementsByName("resposta6");
  let selecionado6 = "";
  for (let i = 0; i < resposta6.length; i++) {
    if (resposta6[i].checked) {
      selecionado6 = resposta6[i].value;
      break;
    }
  }

  document.getElementById("correto6").style.display = "none";
  document.getElementById("errado6").style.display = "none";
  document.getElementById("respostacerta6").style.display = "none";

  if (selecionado6 === "13") {
    document.getElementById("correto6").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado6").style.display = "block";
    document.getElementById("respostacerta6").style.display = "block";
  }
  document.getElementById("proxima7").style.display = "block";
}

function proxima7() {
  document.getElementById("pergunta6").style.display = "none";
  document.getElementById("opcoes6").style.display = "none";
  document.getElementById("conferir6").style.display = "none";
  document.getElementById("correto6").style.display = "none";
  document.getElementById("errado6").style.display = "none";
  document.getElementById("respostacerta6").style.display = "none";
  document.getElementById("proxima7").style.display = "none";
  document.getElementById("americadosul").style.display = "none";

  document.getElementById("pergunta7").style.display = "block";
  document.getElementById("gui").style.display = "block";
  document.getElementById("opcoes7").style.display = "block";
  document.getElementById("conferir7").style.display = "block";
}

function conferir7() {
  const resposta7 = document.getElementsByName("resposta7");
  let selecionado7 = "";
  for (let i = 0; i < resposta7.length; i++) {
    if (resposta7[i].checked) {
      selecionado7 = resposta7[i].value;
      break;
    }
  }

  document.getElementById("correto7").style.display = "none";
  document.getElementById("errado7").style.display = "none";
  document.getElementById("respostacerta7").style.display = "none";

  if (selecionado7 === "gui") {
    document.getElementById("correto7").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado7").style.display = "block";
    document.getElementById("respostacerta7").style.display = "block";
  }
  document.getElementById("proxima8").style.display = "block";
}   

function proxima8() {
  document.getElementById("pergunta7").style.display = "none";
  document.getElementById("opcoes7").style.display = "none";
  document.getElementById("conferir7").style.display = "none";
  document.getElementById("correto7").style.display = "none";
  document.getElementById("errado7").style.display = "none";
  document.getElementById("respostacerta7").style.display = "none";
  document.getElementById("proxima8").style.display = "none";
  document.getElementById("gui").style.display = "none";

  document.getElementById("pergunta8").style.display = "block";
  document.getElementById("bordercollie").style.display = "block";
  document.getElementById("opcoes8").style.display = "block";
  document.getElementById("conferir8").style.display = "block";
}

function conferir8() {
  const resposta8 = document.getElementsByName("resposta8");
  let selecionado8 = "";
  for (let i = 0; i < resposta8.length; i++) {
    if (resposta8[i].checked) {
      selecionado8 = resposta8[i].value;
      break;
    }
  }

  document.getElementById("correto8").style.display = "none";
  document.getElementById("errado8").style.display = "none";
  document.getElementById("respostacerta8").style.display = "none";

  if (selecionado8 === "bordercollie") {
    document.getElementById("correto8").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado8").style.display = "block";
    document.getElementById("respostacerta8").style.display = "block";
  }
  document.getElementById("proxima9").style.display = "block";
}

function proxima9() {
  document.getElementById("pergunta8").style.display = "none";
  document.getElementById("opcoes8").style.display = "none";
  document.getElementById("conferir8").style.display = "none";
  document.getElementById("correto8").style.display = "none";
  document.getElementById("errado8").style.display = "none";
  document.getElementById("respostacerta8").style.display = "none";
  document.getElementById("proxima9").style.display = "none";
  document.getElementById("bordercollie").style.display = "none";

  document.getElementById("pergunta9").style.display = "block";
  document.getElementById("zygmuntbauman").style.display = "block";
  document.getElementById("opcoes9").style.display = "block";
  document.getElementById("conferir9").style.display = "block";
}

function conferir9() {
  const resposta9 = document.getElementsByName("resposta9");
  let selecionado9 = "";
  for (let i = 0; i < resposta9.length; i++) {
    if (resposta9[i].checked) {
      selecionado9 = resposta9[i].value;
      break;
    }
  }

  document.getElementById("correto9").style.display = "none";
  document.getElementById("errado9").style.display = "none";
  document.getElementById("respostacerta9").style.display = "none";

  if (selecionado9 === "zygmuntbauman") {
    document.getElementById("correto9").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado9").style.display = "block";
    document.getElementById("respostacerta9").style.display = "block";
  }
  document.getElementById("proxima10").style.display = "block";
}

function proxima10() {
  document.getElementById("pergunta9").style.display = "none";
  document.getElementById("opcoes9").style.display = "none";
  document.getElementById("conferir9").style.display = "none";
  document.getElementById("correto9").style.display = "none";
  document.getElementById("errado9").style.display = "none";
  document.getElementById("respostacerta9").style.display = "none";
  document.getElementById("proxima10").style.display = "none";
  document.getElementById("zygmuntbauman").style.display = "none";

  document.getElementById("pergunta10").style.display = "block";
  document.getElementById("bortoleto").style.display = "block";
  document.getElementById("opcoes10").style.display = "block";
  document.getElementById("conferir10").style.display = "block";
}

function conferir10() {
  const resposta10 = document.getElementsByName("resposta10");
  let selecionado10 = "";
  for (let i = 0; i < resposta10.length; i++) {
    if (resposta10[i].checked) {
      selecionado10 = resposta10[i].value;
      break;
    }
  }

  document.getElementById("correto10").style.display = "none";
  document.getElementById("errado10").style.display = "none";
  document.getElementById("respostacerta10").style.display = "none";

  if (selecionado10 === "bortoleto") {
    document.getElementById("correto10").style.display = "block";
    acertos++;
  } else {
    document.getElementById("errado10").style.display = "block";
    document.getElementById("respostacerta10").style.display = "block";
  }
  document.getElementById("verresultados").style.display = "block";
}

function verResultados() {
  document.getElementById("pergunta10").style.display = "none";
  document.getElementById("opcoes10").style.display = "none";
  document.getElementById("conferir10").style.display = "none";
  document.getElementById("correto10").style.display = "none";
  document.getElementById("errado10").style.display = "none";
  document.getElementById("respostacerta10").style.display = "none";
  document.getElementById("verresultados").style.display = "none";
  document.getElementById("bortoleto").style.display = "none";

  document.getElementById("resultados").style.display = "block";
  document.getElementById("resultadoscontainer").style.display = "block";
  document.getElementById("acertos").style.display = "block";
  document.getElementById("resultadoFinal").style.display = "block";
  document.getElementById("acertosTotal").innerText = acertos;
  document.getElementById("laam28ee").style.display = "block";
  document.getElementById("imglaam").style.display = "block";
  document.getElementById("br").style.display = "block";
}