import { Box } from "./styles";

const IconTypes = ({type, size}) => {

  return (
    <Box size={size}>
      <div className={`sprite sprite-${type}`}></div>
    </Box>
  );
};

export default IconTypes;
