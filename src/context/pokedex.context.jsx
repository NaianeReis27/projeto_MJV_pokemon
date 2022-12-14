import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const PokedexContext = createContext({});

export default function PokedexContextProvider({ children }){

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [cardSelect, setCardSelect] = useState(null);
  const [cardsFilter, setCardsFilter] = useState([]);
  const [listAllPokemons, setListAllPokemons] =useState([])
  const [loading , setLoading] = useState(true)
  const [loadingImg , setLoadingImg] = useState(true)
  const [modalPokedex , setModalPokedex] = useState(false)
  const [listImage, setListImage] = useState([])
  const [index, setIndex] = useState(0)
  const [evolutionsList, setEvolutionList] = useState([])
  const [listEvolution, setListEvolution] = useState([])
  const [encounter, setEncounter] = useState(null)
  
  
  useEffect(() => {
    api
      .get(`/pokemon?offset=${page*36}&limit=36`)
      .then((res) => {
        res.data.results.map((ele) => getCards(ele.name, setCards));
        setTimeout(() => {
          setLoading(false)
        }, 1500);
        
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
    if(cardSelect){
      api
      .get(`encounter-method/${cardSelect.id}`)
      .then((res) => {
        setEncounter(res.data)
      })
      .catch((err) => console.log(err));
    }
  }, [cardSelect]);


  useEffect(() => {
    if (!cardSelect) {
      setCardSelect(cardsFilter[0]);
    }
  }, [cards, loading]);

  const getCards = (name, setFunction) => {
    setFunction([])
    api
      .get(`/pokemon/${name}`)
      .then((res) => {
        setFunction((cards) => [...cards, res.data]);
        setTimeout(() => {
          setLoadingImg(false)
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const chooseCard = (id) => {
    const card = cardsFilter.find((ele) => ele.id === id);
    setListImage([])
    setCardSelect(card);
    setIndex(0)
  };

  useEffect(() => {
    if(cards.length>1){
      setCardsFilter(cards)
    }
  }, [cards]);


  useEffect(()=>{
      getEvolution(cardSelect?.id)
      for (const key in cardSelect?.sprites) {
        if(typeof(cardSelect?.sprites[key]) == "string"){
          setListImage(listImage => [cardSelect?.sprites[key], ...listImage])
        }
      }
  },[cardSelect, modalPokedex, page])

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
  
  const changeImage = (type) => {
    if(type == "next"){
      if(index < listImage.length - 1){
        setIndex(index + 1)
      }
    }else{
      if(index > 0)
       setIndex(index -1)
    }
  };

  const getAbilities = (name, functionSet) => {
    api
      .get(`ability/${name}`)
      .then((res) => {
        if(res.data.flavor_text_entries[0].language.name == "en"){
          functionSet(res.data.flavor_text_entries[0].flavor_text)
        } 
      })
    
      .catch((err) => console.log(err)); 
  };

  const getEvolution = (id) => {
    api
      .get(`pokemon-species/${id}`)
      .then((res) => {
        getEvolutionDetails(res.data.evolution_chain.url)
      })
      .catch(() => setEvolutionList([]));
  };


  const getEvolutionDetails = (url) => {
    setListEvolution([])
    api
      .get(`${url}`)
      .then((res) => {
        if(res.data.chain.species){
          setListEvolution((list_evolution) => [...list_evolution, res.data.chain.species ])
          if(res.data.chain.evolves_to[0].species){
            setListEvolution((list_evolution) => [...list_evolution, res.data.chain.evolves_to[0].species])
          }
          if(res.data.chain.evolves_to[0].evolves_to.length > 0 ){
            setListEvolution((list_evolution) => [...list_evolution, res.data.chain.evolves_to[0].evolves_to[0].species])
          }
          listEvolution.forEach(ele => getCards(ele.name, setEvolutionList))
        }
        
      })
      .catch((err) =>
        setEvolutionList([])
      ); 
  };


  return (
    <PokedexContext.Provider
      value={{
        loadingImg,
        encounter,
        evolutionsList,
        getAbilities,
        index,
        listImage,
        changeImage,
        changePage,
        cards,
        cardsFilter,
        chooseCard,
        cardSelect,
        inputChange,
        loading,
        modalPokedex,
        setModalPokedex,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
