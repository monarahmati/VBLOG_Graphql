import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
 query {
  posts {
    author {
      id
      name
      avatar {
        url
      }
    }
    title
    stage
    slug
    id
    coverPhoto {
      url
    }
  }
}
`;

export {GET_BLOGS_INFO};