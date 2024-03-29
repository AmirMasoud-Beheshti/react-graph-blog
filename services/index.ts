import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
      categories {
        name
        slug
      }
    }
  `
  const results = await request(graphqlAPI || '', query)
  return results.postsConnection.edges
}
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      posts(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI||'', query, { slug });

  return result.posts;
};

export const getSimilarPosts = async (slug,categories) => {
  const query = gql`
  query getSimilarPosts($slug:String!, $categories:[String!]){
    posts(
      where: {slug_not: $slug, AND:{categories_some: {slug_in: $categories}}  }
      last:3
    )
  }`
  const results = await request(graphqlAPI || '', query)
  return results.posts;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI||'', query);

  return result.posts;
};