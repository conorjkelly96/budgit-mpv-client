import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
      user {
        id
        firstName
        email
        lastName
        username
      }
    }
  }
`;
