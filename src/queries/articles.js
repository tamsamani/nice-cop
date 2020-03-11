import gql from 'graphql-tag';

export const GET_ARTICLES = gql`
  query {
    articles {
      id
      title
      price
      state
      size
      category
      description
      image {
        url
      }
      created_at
      user {
        username
      }
    }
  }
`;