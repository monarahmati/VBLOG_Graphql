import { gql } from "@apollo/client";

const GET_AUTHORS_INFO = gql`
# query {
#   authors {
#     avatar {
#       id
#       url
#     }
#     id
#     name
#     slug
#     posts {
#       coverPhoto {
#         url
#       }
#     }
#   }
# }

query {
  authors {
    slug
    stage
    id
    name
    avatar {
      url
    }
  }
}
`;

export {GET_AUTHORS_INFO};