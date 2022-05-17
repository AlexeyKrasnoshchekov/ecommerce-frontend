import styled from "styled-components";


export const ProductComponent = styled.div`
  display: grid;
  width: 100%;
  min-height: 550px;
  grid-template-columns: 1fr 6fr 3fr;
  justify-content: space-between;
  padding-top: 72px;
  padding-bottom: 72px;
  font-family: "Raleway";
  color: #1d1f22;
`;
export const ProductImageRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  margin-right: 50px;
  box-sizing: border-box;
  justify-content: start;
  align-items: center;
`;
export const ProductImageRowItem = styled.div`
  max-width: 100%;
  min-width: 100%;
  height: 90px;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #eee;
  margin-bottom: 32px;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.3);
  }
`;
export const ProductMainImage = styled.div`
  width: 100%;
  max-height: 550px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #eee;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const ProductInfo = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  width: 292px;
`;
export const PLPdescription = styled.div`
  overflow: hidden;
  max-height: 250px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 12;
`;
export const ProductBrand = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 27px;
`;
export const ProductName = styled.div`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 43px;
`;
export const PDPheading = styled.div`
  font-weight: 700;
  font-family: Roboto;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
`;
export const PLPprice = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PDPbutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 292px;
  height: 52px;
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #5ece7b;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;
export const AttList = styled.div`
  widht: 100%;
  margin-bottom: 40px;
`;
export const AttItem = styled.div`
  display: flex;
  justify-content: center;
  width: 63px;
  height: 45px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #fff;
  color: #000;
`;