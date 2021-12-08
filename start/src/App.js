import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Logo from './componentes/img/godzilla-fofo-natalino.png'

{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
       isso aqui é um segredo no meio do código, se você achou ele... parabéns e bem, agora vai começar a 
       brincadeira! O negócio é o seguinte, eu espalhei umas palavras aí ao longo do código e se você quiser 
       procurar e dps juntar elas vai ter uma surpresa! É isso, boa sorte S2
        <p>
          Luís lindo <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          aaa e pra você não se confundir com as mensagens deixadas com as palavras, elas estarão sinalizadas, 
          eu vou avisar que é a palavra.
        </a>
      </header>
    </div>
  );
}*/}


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="motivo" element={<Motivo />} />
      <Route path="jiripoca" element={<Jiripoca />} />
      <Route path="about" element={<About />} />
      <Route path="importante" element={<Importante />} />
      <Route path="informacoes" element={<Informacoes />} />
      <Route path="salafrario" element={<Salafrario />} />
      <Route path="fim" element={<Fim />} />
    </Routes>
    </header>
    </div>
  );
}

// App.js
function Home() {
  return (
    <>
      <main>
       <h1>Cartão de Natal especial Godzilla</h1>
        <p>Como "prometido" eu fiz o site, que na verdade se transformou em um cartão, mas isso não vem ao caso.</p>
        <p>Então se você quiser continuar vendo a sua surpresa</p>
      </main>
      <nav>
        <Link to="/motivo">Clique aqui S2</Link>
      </nav>
      {/*A primeira palavra é: "Καλά"*/}
      <main>
        <p> caso não queira</p>
      </main>
      <nav>
        <Link to="/salafrario">Clique aqui T-T </Link>
      </nav>

    </>
  );
}

function Motivo() {
  return (
    <>
      <main>
        <h2>Mas qual o motivo de um outro site/cartão?</h2>
        <p>
          Bem, primeiramente eu não gostei muito do primeiro que eu fiz, tu merecia mais, e eu só não fiz mais naquele dia pq a menina 
          não tinha ensinado como fazia essa budega e o povo do Youtube que eu achei só falavam em códigos, eu não sou progamadora, 
          não sei o básico do básico, então só falei "dois beijos, vou pro meu amiguinho Canvas" e por sorte deu "certo" e ficou minimamente 
          aceitável (o que salvou foram os desenhos que eu personalizei e as minhas ótimas escolhas para as músicas).
           {/*a segunda palavra é: "Χριστούγεννα,"*/} 
          E também, eu achei que o seu presente de Natal tava com pouca coisa kakaka aí com isso aqui, você ganha mais um presentinho (esse é 
          melhor pq foi de graça, só custou minha alma e sanidade mental). {/*tá, confesso que quando dá certo eu recupero toda sanidade*/}
        </p>
        <p>
            Obs.: como estou usando os códigos, posso colocar segredos no meio dele. <br/> Então já queria avisar que se você olhar
          o código (qualquer coisa te empresto o computador pra você fazer isso) vai ter coisa escondida.
        </p>
      </main>
      <nav>
        <Link to="/jiripoca">Clica em mim</Link>
      </nav>
    </>
  );
}

function Jiripoca() {
  return (
    <>
      <main>
        <h2>AGORA BORA COMEÇAR</h2>
        <p>
          A JIRIPOCA VAI PIARRR
        </p>
        <iframe width="790" height="341" src="https://www.youtube.com/embed/172D4kqIkQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>
      <nav>
        <Link to="/about">Vamo que vamo</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>O que o Luís e o Godzilla tem em comum?</h2>
        <p>
          São predadores (rawr), altos e fortes, mudam de aparência com o passar do tempo, 
          melhoram o mundo <br/> (okay, {/*a terceira palavra é: "αγάπη"*/} esse depende da versão do Godzilla, mas xiu) e por fim, <br/>
          os dois tem ótimas companhias (o Godzilla tem a Mothra e o Luís tem a Thalita)

        </p>
      </main>
      <nav>
        <Link to="/importante">Pra frente</Link>
      </nav>
    </>
  );
}

function Importante() {
  return (
    <>
      <main>
        <h2>Qual o motivo do Luís ser tão importante?</h2>
        <p>
          Não sei se ele já viu como ele fecha os olhos quando dá risada, ou como ele fica fofo de cabelo bagunçado (não do
          jeito que ele gosta), mas garanto que esses dois motivos já são o suficiente. Porém, como só foram dois, e dois não é 
          meu número da sorte, irei listar mais dois.
          Quando ele me encara e fica falando que eu mereço ser amada e tudo mais (inclusive amo a carinha que ele faz quando diz isso) 
          ele é divertido, sempre me faz rir, mesmo sem dizer nada, um segundinho do lado dele e eu já não consigo parar de sorrir.
        </p>
      </main>
      <nav>
        <Link to="/informacoes">Avante guerreiro</Link>
      </nav>
    </>
  );
}

function Informacoes(){
  return (
    <>
      <main>
        <h2> Agora vem a parte das cantadas, então se prepare </h2>
        <p>
        Não sou lego, mas quando estou com você, o meu coração cai em pedaços. <br/>
        Entre Star Wars e Star Trek, eu prefiro Star com você. <br/>
        Se a vida é um jogo você é o DLC que faz valer a pena. <br/>
        Você não é "a força", mas eu quero estar sempre com você. <br/>
        14 milhões de universos e em todos eles eu me vejo com você. <br/>
        Você é tão lindo, que até o raio gama. {/*desculpa, mas eu achei essa muito boa, tô rindo até agr*/} <br/>
        Você não é Frascos de Estus, mas sempre me restaura.
        </p>
      </main>
      <nav>  
      <Link to="/fim">Clique aqui :( </Link>
      </nav>
    </>
  );
}

function Salafrario() {
  return (
    <>
      <main>
        <h2>VOCÊ É BOBO? É?</h2>
        <p>
         Clica no vídeo pra tu ver o que eu acho dessa sua gracinha, seu salafrário
        </p>
        <iframe width="699" height="393" src="https://www.youtube.com/embed/ZnB-BAWqflw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>
      <nav className="box">
        <Link className="App-link" to="/">Home</Link>
      </nav>
    </>
  );
}

function Fim(){
  return (
    <>
      <main>
        <h2>Então esse é o fim </h2>
        <p>
          Espero que você tenha amado o seu presente de Natal {/*a última palavra é: "μου.". Agora vai no tradutor e junta tudo. 
          Eu jamais seria capaz de te dar um presente de Natal sem te dizer isso.*/}
        </p>
      </main>
        <img src={Logo}/>  {/*foi por isso que eu fiquei muito feliz e te mandei o áudio. fiquei mais de 2 horas procurando como colocava 
      imagem no site*/}
      <nav className="box">
        <Link className="App-link" to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
