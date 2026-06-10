var pokemons = ["Charmander", "Bulbasaur", "Squirtle"];

var loginTela = document.getElementById("loginTela");
var appTela = document.getElementById("appTela");
var usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");
var loginErro = document.getElementById("loginErro");
var entrarBtn = document.getElementById("entrarBtn");

var nomePokemon = document.getElementById("nomePokemon");
var pokemonErro = document.getElementById("pokemonErro");
var pokemonSucesso = document.getElementById("pokemonSucesso");
var capturarFimBtn = document.getElementById("capturarFimBtn");
var capturarInicioBtn = document.getElementById("capturarInicioBtn");
var listaPokemon = document.getElementById("listaPokemon");
var contadorPokemon = document.getElementById("contadorPokemon");

entrarBtn.onclick = fazerLogin;
capturarFimBtn.onclick = adicionarNoFim;
capturarInicioBtn.onclick = adicionarNoInicio;

function fazerLogin() {
    limparMensagemLogin();

    if (usuario.value == "" || senha.value == "") {
        loginErro.innerHTML = "Preencha usuario e senha para entrar.";
    } else {
        if (usuario.value == "aluno" && senha.value == "fiap2025") {
            loginTela.className = "login-box escondido";
            appTela.className = "app-box";
            mostrarPokemons();
        } else {
            loginErro.innerHTML = "Usuario ou senha incorretos.";
        }
    }
}

function adicionarNoFim() {
    limparMensagensPokemon();

    if (nomePokemon.value == "") {
        pokemonErro.innerHTML = "Digite o nome do Pokémon capturado.";
    } else {
        pokemons.push(nomePokemon.value);
        nomePokemon.value = "";
        pokemonSucesso.innerHTML = "Pokémon capturado e adicionado ao final da lista.";
        mostrarPokemons();
    }
}

function adicionarNoInicio() {
    limparMensagensPokemon();

    if (nomePokemon.value == "") {
        pokemonErro.innerHTML = "Digite o nome do Pokémon para o time principal.";
    } else {
        pokemons.unshift(nomePokemon.value);
        nomePokemon.value = "";
        pokemonSucesso.innerHTML = "Pokémon adicionado ao inicio do time principal.";
        mostrarPokemons();
    }
}

function mostrarPokemons() {
    var conteudo = "";
    var textoContador = " Pokémon";
    var i = 0;

    if (pokemons.length == 1) {
        textoContador = " Pokémon";
    }

    contadorPokemon.innerHTML = pokemons.length + textoContador;

    if (pokemons.length == 0) {
        listaPokemon.innerHTML = "<li class='pokemon-item'><span class='nome'>Nenhum Pokémon registrado.</span></li>";
    } else {
        for (i = 0; i < pokemons.length; i++) {
            conteudo = conteudo + "<li class='pokemon-item'>";
            conteudo = conteudo + "<span class='numero'>#" + i + "</span>";
            conteudo = conteudo + "<span class='nome'>" + pokemons[i] + "</span>";
            conteudo = conteudo + "<button class='botao claro' onclick='editarPokemon(" + i + ")'>Editar</button>";
            conteudo = conteudo + "<button class='botao perigo' onclick='removerPokemon(" + i + ")'>Liberar Pokémon</button>";
            conteudo = conteudo + "</li>";
        }

        listaPokemon.innerHTML = conteudo;
    }
}

function editarPokemon(indice) {
    var novoNome = "";

    limparMensagensPokemon();
    novoNome = prompt("Digite o novo nome do Pokémon:", pokemons[indice]);

    if (novoNome == null || novoNome == "") {
        pokemonErro.innerHTML = "Edição cancelada. O Pokémon permaneceu inalterado.";
    } else {
        pokemons.splice(indice, 1, novoNome);
        pokemonSucesso.innerHTML = "Pokémon editado com sucesso.";
        mostrarPokemons();
    }
}

function removerPokemon(indice) {
    limparMensagensPokemon();
    pokemons.splice(indice, 1);
    pokemonSucesso.innerHTML = "Pokémon liberado pela posição #" + indice + ".";
    mostrarPokemons();
}

function limparMensagemLogin() {
    loginErro.innerHTML = "";
}

function limparMensagensPokemon() {
    pokemonErro.innerHTML = "";
    pokemonSucesso.innerHTML = "";
}
