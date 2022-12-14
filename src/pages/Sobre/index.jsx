import NavBar from "../../components/NavBar";
import { Imagem } from "../../components/Pokebola";
import TreinadoraIsabella from "../../components/TreinadoraIsabella";
import { Amarrar, Aside, Section } from "./styles";
import Naiane from "../../assets/naianeperfil.jpg"
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";




 const Sobre = () => {

    return (      
 
        <main >

        <NavBar styles={{ "background-color": "var(--main-color)" }}/>;

        <Amarrar>

        <Section>
            <h1>O projeto</h1>
           
            <p> Esse projeto foi realizado durante a School ‘React’ proporcionada pela empresa de consultoria MJV nos meses de Novembro e Dezembro de 2022. 

O desafio proposto foi a criação de um site utilizando os conceitos aprendidos do react tal qual hooks, ciclo de desmontagem, router-dom, entre outros. Um dos requisitos necessários para sua concepção era a escolha de uma API.

O grupo determinou, por meio de votação, a escolha da API de Pokémon e logo em seguida foi elaborada uma ideia inicial de UI design pelo Figma. Após os primeiros encontros, cada pessoa do grupo optou por escolha própria qual parte deveria ser trabalhada. </p>
<div>

<h4> Tecnologias </h4>
<ul>
    <li>React Styled-components</li>
    <li>Axios </li>
    <li>React Router Dom</li>
    <li>CorelDRAW</li>
    <li>Figma</li>
</ul>

<h4> Funcionalidades </h4>
<ul>
    <li>Utilização de SPA para otimização de desempenho;</li>
    <li>Listagem de pokémons com o uso da PokéApi; </li>
    <li>Busca por pokémons;</li>
    <li>Selecionar pokémon: Cria uma interface na aplicação com mais detalhes sobre o pokémon escolhido; </li>
    <li>Mini game: jogo baseado no clássico jogo da velha com temática pokémon;</li>
</ul>
</div>



<p>Agradecimentos especiais à toda equipe da <a href="https://www.mjvinnovation.com/pt-br/" target="_blank">MJV</a> que proporcionou as aulas de React, disponibilizou material, foram prestativos e nos deu essa oportunidade incrível de aprender com o <a href="https://www.instagram.com/tsu.node/" target="_blank">Gabriel Tsunoda</a>, professor maravilhoso com didática excelente! </p>

<p>Este site é o produto final do processo, esperamos que gostem ❤️</p>

<p>aqui vocês podem conferir o <a href="https://www.figma.com/file/Vcv7pq7IhSN2fsu5OCBEo1/Pokedex---REACT?node-id=38%3A399&t=DgqOabTjOHAwo64b-1" target="_blank"> Figma</a>.
aqui vocês podem conferir o projeto na íntegra pelo <a href="https://github.com/NaianeReis27/projeto_MJV_pokemon" target="_blank">Github</a> . </p>
            <Imagem />


        


        </Section>


        <Aside>  
            <h2>Programadoras</h2> 

            <div className="nome">

            <img src={Naiane} />    
            <h3> Naiane Pinheiro</h3>   

            </div>
            
            <div className="icones">
            <a href="https://www.linkedin.com/in/naianereis/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/NaianeReis27" target="_blank"><AiFillGithub /></a>
            </div>
            <div>       
                <p> "A parte que eu mais curti no projeto foi a nostalgia que ele me traz, pois minha infância foi marcada por jogos dos anos 2000 e naquela época boa parte dos jogos eram desenvolvidos em pixel art. </p>    
                <p> O maior desafio foi entender como o  arquivo  svg se comporta no JavaScript." </p>
            </div>

            <div className="nome">
             <TreinadoraIsabella  />
             <h3> Isabella Canto </h3>

            </div>
            <div className="icones">
            <a href="https://www.linkedin.com/in/isabella-canto/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/ACAXIN" target="_blank"><AiFillGithub /></a>
            </div>
            <div>
              
                <p> "Adorei ter aprendido sobre React e todas as funcionalidades vistas em sala de aula, utilizando um tema muito especial da infância. Acredito que essa forma mais lúdica de poder 'brincar' com o site utilizando o react foram muito divertidas e agregou muito no aprendizado.</p>


                <p> Foi um projeto desafiador, encontrando alguns obstaculos. Entretanto, foram fundamentais para meu desenvolvimento profissional!" </p>

            </div>


        </Aside>
        </Amarrar>
        

        


        </main>

    )
}

export default Sobre;

