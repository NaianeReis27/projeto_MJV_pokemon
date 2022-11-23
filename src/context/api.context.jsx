import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

import React from "react";

export const ApiContext = createContext({});

export default function ApiContextProvider({ children }) {

   const [cards, setCards] = useState([])
   const [page, setPage] = useState(0)
   const [limit, setLimit] = useState(20)
   const [cardSelect, setCardSelect] = useState(null)

    useEffect(()=>{
        api
        .get(`/pokemon?offset=${page}&limit=36`)
        .then((res) => {    
           res.data.results.map(ele => getCards(ele.name))
        })
        .catch((err) => console.log(err))
    }, [page,limit])

    useEffect(()=>{
      if(!cardSelect){
        setCardSelect(cards[0])
       }
    },[cards])

   const getCards = (name) =>{
    api
        .get(`/pokemon/${name}`)
        .then((res) => {
           setCards((cards) => [...cards, res.data]);
        })
        .catch((err) => console.log(err))
   }

  const chooseCard = (id) =>{
   const card = cards.find(ele => ele.id===id)
   setCardSelect(card)
  }
  
  return (
        <ApiContext.Provider
          value={{
           cards,
           chooseCard,
           cardSelect,
          }}
        >
          {children}
        </ApiContext.Provider>
    
  );
}
