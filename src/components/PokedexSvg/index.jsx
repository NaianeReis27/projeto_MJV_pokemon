import { Container } from "./styles";
import { useContext } from "react";
import { ApiContext } from "../../context/api.context";
import ModalPokedex from "../ModalPokedex";
import ButtonsSvg from "../ButtonsSvg";

const PokedexSvg = () => {
  const { changePage, modalPokedex } = useContext(ApiContext);

  return (
    <>
      {modalPokedex && <ModalPokedex />}
      <ButtonsSvg/>
      <Container
        width="2041"
        height="679"
        viewBox="0 0 2041 1069"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1017.4 15.7293H1507.5V1032.2C1344.03 1032.84 1180.55 1033.31 1017.08 1033.73C1016.72 694.427 1016.72 355.035 1017.08 15.7293H1017.4V15.7293ZM0.646176 0H665.92L2040 0.728694V1032.01C2026.39 1044.15 2012.75 1056.27 1999.11 1068.37H19.469C13.1859 1061.98 6.90658 1055.58 0.646932 1049.16C-0.201949 699.494 0.64542 349.683 0.646176 0V0ZM1506.86 16.4379H1017.72V1033.03L1506.86 1031.49V16.4379ZM2039.36 1.43396L1.2834 0.352633L1.28377 1048.85L19.7165 1067.66H1998.88L2039.36 1031.68V1.43396V1.43396ZM1017.4 16.0834V1033.38V16.0834V16.0834ZM0.964778 0L2039.68 1.08133V1031.84L1998.99 1068.01H19.5926L0.965165 1049.01L0.964778 0V0Z"
          fill="#A80003"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2039.68 0V1029.84H1449.25V0H2039.68V0ZM0.965088 0.374557H1449.25V1049.01H0.965088V0.374557V0.374557Z"
          fill="#EF2D2D"
        />
        <path
          d="M131.256 117.73C153.582 117.73 171.681 99.6309 171.681 77.3049C171.681 54.979 153.582 36.8802 131.256 36.8802C108.93 36.8802 90.8317 54.979 90.8317 77.3049C90.8317 99.6309 108.93 117.73 131.256 117.73Z"
          fill="#EDF1F0"
          stroke="#EDF1F0"
          stroke-width="0.639874"
          stroke-miterlimit="22.9256"
        />
        <path
          d="M131.256 112.1C150.473 112.1 166.052 96.5219 166.052 77.3049C166.052 58.0879 150.473 42.5095 131.256 42.5095C112.039 42.5095 96.4609 58.0879 96.4609 77.3049C96.4609 96.5219 112.039 112.1 131.256 112.1Z"
          fill="#67B8F8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M119.566 54.7192C121.988 59.3401 119.678 68.4771 114.406 75.1275C109.134 81.778 102.897 83.4236 100.475 78.8027C98.0532 74.1819 100.363 65.0449 105.635 58.3944C110.907 51.744 117.144 50.0987 119.566 54.7192Z"
          fill="#FEFEFE"
          fill-opacity="0.501961"
          stroke="#FEFEFE"
          stroke-opacity="0.501961"
          stroke-width="0.639874"
          stroke-miterlimit="22.9256"
        />
        <path
          d="M204.913 63.6983C211.146 63.6983 216.199 58.6452 216.199 52.4119C216.199 46.1785 211.146 41.1254 204.913 41.1254C198.68 41.1254 193.626 46.1785 193.626 52.4119C193.626 58.6452 198.68 63.6983 204.913 63.6983Z"
          fill="#EF2D2D"
          stroke="#A80003"
          stroke-width="1.59987"
          stroke-miterlimit="22.9256"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M201.121 45.086C201.907 46.585 201.157 49.5485 199.447 51.7058C197.737 53.8628 195.714 54.3965 194.929 52.8979C194.143 51.3989 194.892 48.4354 196.602 46.2781C198.312 44.1211 200.335 43.5874 201.121 45.086Z"
          fill="white"
          fill-opacity="0.501961"
          stroke="white"
          stroke-opacity="0.501961"
          stroke-width="0.639874"
          stroke-miterlimit="22.9256"
        />
        <path
          d="M244.36 63.6983C250.593 63.6983 255.647 58.6452 255.647 52.4119C255.647 46.1785 250.593 41.1254 244.36 41.1254C238.127 41.1254 233.074 46.1785 233.074 52.4119C233.074 58.6452 238.127 63.6983 244.36 63.6983Z"
          fill="#F6DD2D"
          stroke="#A80003"
          stroke-width="1.59987"
          stroke-miterlimit="22.9256"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M240.568 45.086C241.354 46.585 240.604 49.5485 238.894 51.7058C237.184 53.8628 235.161 54.3965 234.376 52.8979C233.59 51.3989 234.339 48.4354 236.049 46.2781C237.759 44.1211 239.782 43.5874 240.568 45.086Z"
          fill="white"
          fill-opacity="0.501961"
        />
        <path
          d="M283.807 63.6983C290.04 63.6983 295.094 58.6452 295.094 52.4119C295.094 46.1785 290.04 41.1254 283.807 41.1254C277.574 41.1254 272.521 46.1785 272.521 52.4119C272.521 58.6452 277.574 63.6983 283.807 63.6983Z"
          fill="#2CC340"
          stroke="#A80003"
          stroke-width="0.639874"
          stroke-miterlimit="22.9256"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M280.015 45.086C280.801 46.585 280.051 49.5485 278.342 51.7058C276.632 53.8628 274.609 54.3965 273.823 52.8979C273.037 51.3989 273.786 48.4354 275.497 46.2781C277.207 44.1211 279.23 43.5874 280.015 45.086Z"
          fill="white"
          fill-opacity="0.501961"
        />
       
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1454.31 67.9676L1452.24 67.9625L1450.67 69.297L1439.78 78.5332H1002.61H1000.21L998.555 80.2685L935.89 145.983H0V157.183H938.288H940.686L942.341 155.447L1005.01 89.7331H1441.84H1443.89L1445.34 88.5065L1449.58 1049.36L1458.2 1030.19L1457.71 79.1758L2038.7 80.5927L2038.73 69.3928L1454.31 67.9676Z"
          fill="#A80003"
        />
        <rect x="57" y="188" width="1343" height="741" fill="#FAF4F4" />
      </Container>
    </>
  );
};

export default PokedexSvg;
