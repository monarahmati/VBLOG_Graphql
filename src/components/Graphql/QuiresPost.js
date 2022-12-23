import {gql} from '@apollo/client';


const GET_POST_INFO = gql `
query getPost( $slug: String!) {

  post(where: {slug: $slug }) {

    slug
    stage
    title
    id
    author {
      field
      name
      avatar {
        url
      }
    }
    coverPhoto {
      url
    }
    contect {
      html
    }
  }
}
`

export default GET_POST_INFO;