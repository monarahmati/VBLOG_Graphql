import { gql } from "@apollo/client";

const GET_POST_COMMENT = gql`
query getPostcomment( $slug: String!){
  comments(where: {post: { slug: $slug }}) {
    id
    name
    text
  }
}

`;

export {GET_POST_COMMENT};