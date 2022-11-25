const agua = (marca) => {
  const produto = {
    ["Bonafont"]: [
      {
        Produto: "agua Bonafont",
        Valor: 1.5 + "R$",
      },
    ],
    ["Crystal"]: [
      {
        Produto: "agua Crystal",
        Valor: 1.6 + "R$",
      },
    ],
    ["Serra Negra Puríssima"]: [
      {
        Produto: "agua Crystal",
        Valor: 1.6 + "R$",
      },
    ],
  };
  console.log(
    "As aguas disponiveis são essas, digite a marca da agua: ",
    produto
  );

  console.log("Você escolheu: ", Object.entries(produto[marca]));
};

const refrigerantes = (marca) => {
  const produto = {
    ["Pepsi"]: [
      {
        Produto: "Refri Pepsi",
        Valor: 7.5 + "R$",
      },
    ],
    ["Coca-Cola"]: [
      {
        Produto: "Coca-Cola",
        Valor: 10.0 + "R$",
      },
    ],
    ["Dolinho"]: [
      {
        Produto: "Dolinho",
        Valor: 4.5 + "R$",
      },
    ],
  };

  console.log(
    "Os Refrigerantes disponiveis são esses, digite a marca do refrigerante: ",
    produto
  );

  console.log("Você escolheu: ", Object.entries(produto[marca]));
};

const sake = (marca) => {
  const produto = {
    ["Azuma Kirin"]: [
      {
        Produto: "Azuma Kirin",
        Valor: 20.0 + "R$",
      },
    ],
    ["SHIRATAKI SAKE"]: [
      {
        Produto: "SHIRATAKI SAKE",
        Valor: 30.0 + "R$",
      },
    ],
    ["Jun Daiti"]: [
      {
        Produto: "Jun Daiti",
        Valor: 50.0 + "R$",
      },
    ],
  };

  console.log(
    "Os Sakes disponiveis são esses, digite o nome  do sake: ",
    produto
  );

  console.log(Object.entries(produto[marca]));
};

const drinks = (marca) => {
  const produto = {
    ["Dry Martini"]: [
      {
        Produto: "Dry Martini",
        Valor: 35.0 + "R$",
      },
    ],
    ["Margarita"]: [
      {
        Produto: "Margarita",
        Valor: 55.0 + "R$",
      },
    ],
    ["Piña Colada"]: [
      {
        Produto: "Piña Colada",
        Valor: 66.0 + "R$",
      },
    ],
  };

  console.log(
    "Os drinks disponiveis são esses, digite o nome do drink: ",
    produto
  );

  console.log("Você escolheu: ", Object.entries(produto[marca]));
};

const menu = {
  1: [agua],
  2: [refrigerantes],
  3: [sake],
  4: [drinks],
};

function barCabecaDeJavali(opcao, escolhaDoMenu, marcaDoProduto) {
  function escolha() {
    return escolhaDoMenu;
  }

  if (opcao === menu) {
    console.log(
      "Digite o numero com o produto desejado, para voltar ao menu digite 5"
    );
    return menu;
  }
  if (opcao === "") {
    if (escolha() === 1) {
      console.log(menu[escolhaDoMenu]);
    }
    if (escolha() === 2) {
      console.log(menu[escolhaDoMenu]);
    }
    if (escolha() === 3) {
      console.log(menu[escolhaDoMenu]);
    }
    if (escolha() === 4) {
      console.log(menu[escolhaDoMenu]);
    }
  }
}

console.log(barCabecaDeJavali("", 1, "Crystal"));
