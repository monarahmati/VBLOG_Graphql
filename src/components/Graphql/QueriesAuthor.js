import { gql } from "@apollo/client";

const GET_AUTHOR_INFO = gql`
query getAuthorInfo( $slug: String! ) {
  author(where: {slug: $slug }) {
    posts {
      coverPhoto {
        url
      }
      title
      slug
      id
    }
    avatar {
      id
      url
    }
    description {
      html
    }
    field
    name
    id
  }
}

`;

export default GET_AUTHOR_INFO;