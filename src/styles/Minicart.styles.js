import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
export const MinicartItemsContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  overflow: auto;
`;

export const ViewBagButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 145px;
  height: 43px;
  margin-right: 12px;
  border: 1px solid rgba(29, 31, 34, 1);
  color: #000;
  text-transform: uppercase;
  cursor: pointer;
`;
export const ProductAddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 145px;
  height: 43px;
  background-color: #5ece7b;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;
