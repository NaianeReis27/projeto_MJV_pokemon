import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

import React from "react";

export const ApiContext = createContext({});

export default function ApiContextProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [pageFilter, setPageFilter] = useState(0);
  const [limit, setLimit] = useState(20);
  const [cardSelect, setCardSelect] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [cardsFilter, setCardsFilter] = useState([]);
  const [listAllPokemons, setListAllPokemons] =useState([])


  useEffect(() => {
   setCardsFilter(cards)
  }, [cards]);

  useEffect(() => {
    api
      .get(`/pokemon?offset=${page*36}&limit=36`)
      .then((res) => {
        res.data.results.map((ele) => getCards(ele.name, setCards));
        console.log(page)
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
    const filtered = listAllPokemons.filter( ele => ele.name.includes(e.target.value))
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
      
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
