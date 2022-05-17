import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 388px;
  min-height: 444px;
  text-decoration: "none";
  color: "#1D1F22";
  fontfamily: "Raleway";
  box-sizing: border-box;
  justify-content: space-between;
  padding: 16px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.3);
    #CartToBusket {
      display: flex;
    }
  }
`;
export const CartImage = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 338px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #eee;
`;
export const CartProductBrand = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  margin-top: 20px;
`;
export const CartProductName = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
`;
export const CartProductPrice = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
`;
export const CartOutOfStock = styled.div`
  position: absolute;
  display: block;
  width: 180px;

  margin-left: calc(194px - 90px);
  margin-top: 169px;

  text-transform: uppercase;
  font-size: 24px;
  color: #8d8f9a;
  z-index: 1;
`;

export const CartToBusket = styled.div`
  display: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  background-color: #5ece7b;
  margin-left: 250px;
  margin-top: 304px;
  height: 52px;
  width: 52px;
  color: white;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;