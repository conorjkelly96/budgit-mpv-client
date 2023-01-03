import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
    }
  }
`;
