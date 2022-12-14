import { Estilos } from "./styles";
import React, { useEffect, useState } from "react";
import PrimeiroJogador from "../../components/PrimeiroJogador"
import SegundoJogador from "../../components/SegundoJogador"
import ModalJogo from "../../components/ModalJogo"
import Pikachu from "../../assets/Pikachu.png";
import EquipeRocket from "../../assets/EquipeRocket.png";
import { Button } from "../../styles/button";
import NavBar from "../../components/NavBar";





export const Jogo = () => {
    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState("O");
    const [Winner, setWinner] = useState(null);
    const handleCellClick = (index) => {
        if(board[index] !== "") return null;
        
      
        setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer: item));
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); 

    }



    const checkWinner = () => {
        const  possibleWaysToWin = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],

            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],

            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],
            [board[1], board[5], board[9]],
        ];

            possibleWaysToWin.forEach(cells => {
            if (cells.every(cell => cell === "O" ))
            setWinner(<SegundoJogador/>);
            if(cells.every(cell => cell === "X"))
            setWinner(<PrimeiroJogador/>);

        })
        checkDraw();

    }
    const checkDraw = () => {
        if(board.every(item => item !== ""))
            setWinner("E");
        
    }

    useEffect(checkWinner, [board]);

    const resetGame = () => {

        setCurrentPlayer("O");
        setBoard(emptyBoard);
        setWinner(null);
    }
    

    return(
    
        <Estilos>
            <NavBar styles={{ "background-color": "var(--main-color)" }}/>
            <h1> Batalha! </h1>
           
         <div className="head">
         <img src={Pikachu}  className="batalha"/>


            <div className={`board ${Winner ? "game-over" : ""}`}>
                {board.map((item, index) =>

                <div key={index} className={`cell ${item}`}
                onClick={() => handleCellClick(index)}>
                {item}
                </div>
     
                )}

       
            </div>

            {Winner &&  
            <ModalJogo>
            {Winner === "E" ?
            <h2 className="winner-message">
            <span className={Winner}>
            Empatou!
            </span>
        </h2>
        :    
            <h2 className="winner-message">
                <span className={Winner}>
                {Winner} 

                </span>
                venceu!
            </h2>
        }    
        <div className="botao">

         <Button variant="secundary"  onClick={resetGame}>
          Recomeçar Jogo!

         </Button>
         </div>              
        </ModalJogo>
        }

         <img src={EquipeRocket} />
         </div>




      
        </Estilos>

    );
    

}
 
export default Jogo;
           