import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

import React from "react";

export const ApiContext = createContext({});

export default function ApiContextProvider({ children }){

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [cardSelect, setCardSelect] = useState(null);
  const [cardsFilter, setCardsFilter] = useState([]);
  const [listAllPokemons, setListAllPokemons] =useState([])
  const [loading , setLoading] = useState(true)
  const [modalPokedex , setModalPokedex] = useState(false)

  useEffect(() => {
    if(cards.length>1){
      setCardsFilter(cards)
    }
  }, [cards]);

  useEffect(() => {
    api
      .get(`/pokemon?offset=${page*36}&limit=36`)
      .then((res) => {
        res.data.results.map((ele) => getCards(ele.name, setCards));
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [page]);
  
  useEffect(() => {
    api
      .get(`/pokemon?limit=100000&offset=0`)
      .then((res) => {
        setListAllPokemons(res.data.results)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!cardSelect) {
      setCardSelect(cardsFilter[0]);
    }
  }, [cards]);

  const getCards = (name, setFunction) => {
    setFunction([])
    api
      .get(`/pokemon/${name}`)
      .then((res) => {
        setFunction((cards) => [...cards, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const chooseCard = (id) => {
    const card = cardsFilter.find((ele) => ele.id === id);
    setCardSelect(card);
  };


  const inputChange = (e) => {
    setCardsFilter([])
    setPage(0)
    const filtered = listAllPokemons.filter( ele => ele.name.includes(e.target.value.toLowerCase()))
    filtered.slice(0, 72).map(ele => getCards(ele.name, setCardsFilter))
  };

  const changePage = (type) => {
    if(type=="next"){
      if(page<=32){
        setPage((page)=>page+1)
      }
    }else{
      if(page>0)
      setPage((page)=>page-1)
    }
  };

 

  return (
    <ApiContext.Provider
      value={{
        changePage,
        cards,
        cardsFilter,
        chooseCard,
        cardSelect,
        inputChange,
        loading,
        modalPokedex,
        setModalPokedex
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
