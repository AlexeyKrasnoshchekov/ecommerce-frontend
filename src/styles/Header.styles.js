import styled from "styled-components";

export const HeaderComponent = styled.div`
  display: flex;
  position: sticky;
  z-index: 2;
  background-color: white;
  top: 0px;
  width: 100%;
  height: 80px;
  margin: 30px auto;
  box-sizing: border-box;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;
  margin-top: 0px;
`;
export const CategoriesList = styled.div`
  display: flex;
  list-style-type: none;
  width: 220px;
  justify-content: space-between;
`;
export const CategoryItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  line-height: 67px;
  font-family: "Raleway";
  height: 100%;
  color: #1d1f22;
  padding: 0 10px;
`;
export const BasketArea = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
`;

export const BasketCount = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  background-color: #000;
  height: 15px;
  width: 15px;
  color: white;
  justify-content: center;
  align-items: center;
`;
export const Arrow = styled.div`
  transform: rotate(90deg);
  cursor: pointer;
  font-size: 18px;
  width: 6px;
`;