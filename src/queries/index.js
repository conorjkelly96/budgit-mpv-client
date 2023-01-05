import { gql } from "@apollo/client";

export const VIEW_MY_BUDGETS = gql`
  query Query {
    viewMyBudgets {
      id
      name
    }
  }
`;
