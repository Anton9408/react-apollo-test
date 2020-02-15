import {gql} from 'apollo-boost';

const getListRepositories = gql`
    query getListRepositories($searchQuery: String!, $limit: Int, $cursorBefore: String) {
        search(query: $searchQuery, first: $limit, after: $cursorBefore, type: REPOSITORY) {
            repositoryCount
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        description
                        url
                        stargazers {
                            totalCount
                        }
                        licenseInfo {
                            name
                        }
                        owner {
                            id,
                            login
                            avatarUrl
                        }
                        createdAt
                    }
                }
                cursor
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`;

export default getListRepositories;
