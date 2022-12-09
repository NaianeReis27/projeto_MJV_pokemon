import { Container } from "./styles";
import Logo from "../../assets/logoPokemon.svg";
import { Link } from "react-router-dom";


const NavBar = ({ styles }) => {
  return (
    <Container styles={styles}>
      <div>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default NavBar;
