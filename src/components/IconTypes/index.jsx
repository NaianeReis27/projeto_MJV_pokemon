import { Box } from "./styles";
import sprite from "../../assets/iconsType.png";
import { ApiContext } from "../../context/api.context";
import { useContext, useEffect, useState } from "react";

const IconTypes = ({type, size}) => {

  return (
    <Box size={size}>
      <div className={`sprite sprite-${type}`}></div>
    </Box>
  );
};

export default IconTypes;
