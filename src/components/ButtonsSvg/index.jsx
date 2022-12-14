import { Container } from "./styles";
import { useContext } from "react";
import { PokedexContext } from "../../context/pokedex.context";

const ButtonsSvg = () => {
  const {changePage} = useContext(PokedexContext)

  return (
    <Container>
      <svg onClick={()=> changePage("next")} width="200px" height="60px" viewBox="-3 -10 290 95">
        <path
          d="M273.752 1.938H11.457c-5.686 0-10.296 4.753-10.296 10.617v54.098c0 5.864 4.61 10.617 10.296 10.617h262.295c5.687 0 10.296-4.753 10.296-10.617V12.555c0-5.864-4.609-10.617-10.296-10.617Z"
          fill="#0f344f"
          stroke="#0f344f"
          strokeWidth="5"
          strokeMiterlimit="22.926"
        />
        <path className="btn_pokedex"
          d="M270.251.764H10.898C5.275.764.718 5.396.718 11.109v52.71c0 5.713 4.557 10.344 10.18 10.344H270.25c5.622 0 10.18-4.631 10.18-10.344v-52.71c0-5.713-4.558-10.345-10.18-10.345Z"
          fill="#4890F8"
          stroke="#4890F8"
          strokeWidth=".64"
          strokeMiterlimit="22.926"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M179.183 27.447h-6.552v3.25h-3.308v6.61h.875v.907H172.631v8.952h.875v.908h2.426v2.4h.875v.908h10.148v-6.897H185.792v-.62h-5.446v-5.65h6.609v-6.898H185.792v-.62h-5.446V28.066H179.183v-.62Zm-78.941 23.027h.875v.908h6.897V38.214h5.395v12.26h.875v.908h6.897V34.625H120.018v-.62h-2.145v-2.688H116.71v-.62h-9.859v3.308h-2.138v-2.688H103.55v-.62h-3.308v19.777Zm23.902-3.308h-.875V33.948h3.308v-3.3h13.161v.619H140.901v2.681h2.144v.62H144.208v10.205h-13.167v2.393h12.004v.62H144.208v3.596H127.452v-.908h-.875v-2.4H124.144v-.908Zm6.897-6.609v-2.393h5.396v2.393h-5.396Zm15.255-6.552h.875v.908H149.604v2.393h.875v.908h2.426v5.65h-3.301v3.302h-3.308v3.308h.875v.908h6.897V48.074h5.396v2.4h.875v.908h6.897v-3.596H166.073v-.62h-2.145v-2.681H162.765v-.62h-2.138v-5.65h3.301v-3.302H167.236v-3.596H166.073v-.62h-6.609v3.308h-5.396v-2.688H152.905v-.62h-6.609v3.308Z"
          fill="#ffffff"
        />
       
      </svg>

      <svg onClick={()=> changePage("previous")}  width="200px" height="60px" viewBox="-3 -10 290 95">
        <path
          d="M274.035 2.174H11.739c-5.686 0-10.295 4.753-10.295 10.617v54.098c0 5.864 4.61 10.617 10.296 10.617h262.295c5.686 0 10.296-4.753 10.296-10.617V12.79c0-5.864-4.61-10.617-10.296-10.617z"
          fill="#0f344f"
          stroke="#0f344f"
          strokeWidth="5"
          strokeMiterlimit="22.926"
        />
        <path
          className="btn_pokedex"
          d="M270.533 1H11.18C5.558 1 1 5.632 1 11.345v52.71C1 69.768 5.558 74.4 11.18 74.4h259.353c5.622 0 10.18-4.632 10.18-10.345v-52.71c0-5.713-4.558-10.345-10.18-10.345z"
          fill="#4890F8"
          stroke="#4890F8"
          strokeWidth=".64"
          strokeMiterlimit="22.926"
        />
       
        <path
          d="M60.406 33.127h16.468v3.307h3.308v13.16h-3.308v3.309h-9.86v6.609h-6.608V33.126zm6.608 6.608v6.559h6.559v-6.559h-6.559zM83.433 33.127h3.307v3.307h3.302v-3.307h9.86v3.307h3.307v6.61H96.6v-3.309h-6.558v13.168h-6.61V33.127zM109.768 33.076h13.16v3.301h3.308v9.917h-13.167v3.3h13.167v3.309h-16.468v-3.308h-3.308V36.377h3.308v-3.3zm3.301 6.609v3.301h6.558v-3.301h-6.558zM129.487 33.127h6.609v6.608h6.558v-6.608h6.609v6.608h-3.308v6.559h-3.301v6.609h-6.558v-6.61h-3.301v-6.558h-3.308v-6.608zM152.514 29.818h6.609v3.308h-6.609v-3.308zm0 6.616h6.609v16.469h-6.609V36.434zM165.682 33.127h13.16v3.307h3.308v13.16h-3.308v3.309h-13.16v-3.308h-3.308v-13.16h3.308v-3.309zm3.301 6.608v6.559h6.558v-6.559h-6.558zM185.401 33.127h6.609v13.167h6.558V33.127h6.609v19.776h-16.468v-3.308h-3.308V33.127zM211.736 33.127h16.468v6.608h-3.307v-3.3h-9.86v3.3h9.86v3.308h3.307v6.552h-3.307v3.308h-13.161v-3.308h-3.308v-6.552h3.308v3.25h9.859v-3.25h-9.859v-3.308h-3.308v-3.3h3.308v-3.309z"
          fill="#FEFEFE"
        />
        <path
          clipRule="evenodd"
          d="M11.345 1h259.023c5.69 0 10.345 4.655 10.345 10.345v52.71c0 5.69-4.655 10.345-10.345 10.345H11.345C5.655 74.4 1 69.745 1 64.055v-52.71C1 5.655 5.655 1 11.345 1z"
          stroke="#373435"
          strokeWidth=".64"
          strokeMiterlimit="22.926"
        />
      </svg>
    </Container>
  );
};

export default ButtonsSvg;
