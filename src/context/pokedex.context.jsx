import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const PokedexContext = createContext({});

export default function PokedexContextProvider({ children }) {
  const [page, setPage] = useState(0);
  const [cardSelect, setCardSelect] = useState(null);
  const [cardsFilter, setCardsFilter] = useState([]);
  const [capturePokemons, setCapturePokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalPokedex, setModalPokedex] = useState(false);
  const [listImage, setListImage] = useState([]);
  const [index, setIndex] = useState(0);
  const [evolutionsList, setEvolutionList] = useState([]);
  const [listEvolution, setListEvolution] = useState([]);
  const [encounter, setEncounter] = useState(null);
  const [IsActiveBtn, setIsActiveBtn] = useState(true);

  //  busca todos os pokemons para  a pesquisa
  useEffect(() => {
    api
      .get(`/pokemon?limit=100000&offset=0`)
      .then((res) => {
        setCapturePokemons(res.data.results);
        res.data.results
          .slice(0, 36)
          .map((ele) => getCards(ele.name, setCardsFilter));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //  limita a quantidade de pokemons em 36 por pagina.

  useEffect(() => {
    const pokemonForPage = capturePokemons.slice((page)* 36, (page+1)* 36);
    pokemonForPage.map((ele) => getCards(ele.name, setCardsFilter));
  }, [page]);

  // filtra a lista, ativa e desativa botão de next e previuos

  const inputChange = (e) => {
    e.target.value == "" ? setIsActiveBtn(true) : setIsActiveBtn(false);
    setCardsFilter([]);
    const filtered = capturePokemons.filter((ele) =>
      ele.name.startsWith(e.target.value.toLowerCase())
    );
    filtered.slice(0, 36).map((ele) => getCards(ele.name, setCardsFilter));
  };

  // seleciona um cardSelect como padrão

  useEffect(() => {
    if (cardsFilter.length>0 && !cardSelect) {
      setCardSelect(cardsFilter[0]);
    }
  }, [cardsFilter]);

  // busca os detalhes do pokemon para a construção dos cards

  const getCards = (name, setFunction) => {
    setFunction([]);
    api
      .get(`/pokemon/${name}`)
      .then((res) => {
        setFunction((cards) => [...cards, res.data]);
      })
      .catch((err) => console.log(err));
  };

  //  busca na api os encounters dos pokemons

  useEffect(() => {
    if (cardSelect) {
      api
        .get(`encounter-method/${cardSelect.id}`)
        .then((res) => {
          setEncounter(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [cardSelect]);

  // filtra a carta clicada.

  const chooseCard = (id) => {
    const card = cardsFilter.find((ele) => ele.id === id);
    setListImage([]);
    setCardSelect(card);
    setIndex(0);
  };

  // start algumas funcionalidades do modal da pokedex.

  useEffect(() => {
    getEvolution(cardSelect?.id);
    for (const key in cardSelect?.sprites) {
      if (typeof cardSelect?.sprites[key] == "string") {
        setListImage((listImage) => [cardSelect?.sprites[key], ...listImage]);
      }
    }
  }, [cardSelect, modalPokedex]);

  // troca de pagina
  const changePage = (type) => {
   
    if (IsActiveBtn && !modalPokedex) {
      if (type == "next") {
        if (page <= 32) {
          setPage((page) => page + 1);
        }
      } else {
        if (page > 0) setPage((page) => page - 1);
      }
    }
  };

  // troca a imagem do pokemon no modal

  const changeImage = (type) => {
    if (type == "next") {
      if (index < listImage.length - 1) {
        setIndex(index + 1);
      }
    } else {
      if (index > 0) setIndex(index - 1);
    }
  };

  // busca as habilidades de cada pokemon

  const getAbilities = (name, functionSet) => {
    api
      .get(`ability/${name}`)
      .then((res) => {
        if (res.data.flavor_text_entries[0].language.name == "en") {
          functionSet(res.data.flavor_text_entries[0].flavor_text);
        }
      })
      .catch((err) => console.log(err));
  };

  const getEvolution = (id) => {
    api
      .get(`pokemon-species/${id}`)
      .then((res) => {
        getEvolutionDetails(res.data.evolution_chain.url);
      })
      .catch(() => setEvolutionList([]));
  };

  const getEvolutionDetails = (url) => {
    setListEvolution([]);
    api
      .get(`${url}`)
      .then((res) => {
        if (res.data.chain.species) {
          setListEvolution((list_evolution) => [
            ...list_evolution,
            res.data.chain.species,
          ]);
          if (res.data.chain.evolves_to[0].species) {
            setListEvolution((list_evolution) => [
              ...list_evolution,
              res.data.chain.evolves_to[0].species,
            ]);
          }
          if (res.data.chain.evolves_to[0].evolves_to.length > 0) {
            setListEvolution((list_evolution) => [
              ...list_evolution,
              res.data.chain.evolves_to[0].evolves_to[0].species,
            ]);
          }
          listEvolution.forEach((ele) => getCards(ele.name, setEvolutionList));
        }
      })
      .catch(() => setEvolutionList([]));
  };

  return (
    <PokedexContext.Provider
      value={{
        encounter,
        evolutionsList,
        getAbilities,
        index,
        listImage,
        changeImage,
        changePage,
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
