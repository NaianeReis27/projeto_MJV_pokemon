import { Container } from "./styles";

const InfoCard = ({data}) => {
  

  return (
    <Container className="dataInfo">
    <h4>{data.stat.name}</h4>
    <p>{data.base_stat}</p>
    </Container>
  );
};

export default InfoCard;
