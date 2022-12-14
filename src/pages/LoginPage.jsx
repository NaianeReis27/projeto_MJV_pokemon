import NavBar from "../components/NavBar";
import ModalLogin from "../components/ModalLogin";

const LoginPage = () => {
  return (
    <>
      <NavBar styles={{ "background-color": "var(--main-color)" }}/>;
      <ModalLogin/>
    </>
  );
};

export default LoginPage;
