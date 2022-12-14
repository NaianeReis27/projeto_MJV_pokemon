import { Container } from "./styles";
import pokeball from "../../assets/icon_pokeball.png";
import InputPixel from "../InputPixel";
const ModalLogin = () => {
  return (
    <Container>
      <div>
        <div>
       
          <div className="logo_login">
            <figure>
              <img src={pokeball} alt="pokeball_icon" />
            </figure>
            <h2>Login</h2>
          </div>
          
          <div className="container_form">
            <InputPixel label={"e-mail"} type={"email"}/>
            <InputPixel label={"password"} type={"password"}/>
            <button className="btn_login"></button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModalLogin;
