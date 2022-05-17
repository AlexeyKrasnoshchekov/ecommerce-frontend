import { gql } from "@apollo/client";

export const GET_PRODUCTS_BY_CAT = gql`
  query ($cat: String!) {
    category(input: { title: $cat }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
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
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;
