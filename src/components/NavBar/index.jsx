import { Container } from "./styles";
import Logo from "../../assets/logoPokemon.svg";

const NavBar = ({ styles }) => {
  return (
    <Container styles={styles}>
      <div>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Pokedex</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default NavBar;
