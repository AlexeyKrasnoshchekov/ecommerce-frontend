import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query ($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
      attributes {
        id
        name
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;
