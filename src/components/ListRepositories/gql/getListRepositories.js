import {gql} from 'apollo-boost';

const getListRepositories = gql`
    query getListRepositories($searchQuery: String!, $limit: Int) {
        search(query: $searchQuery, first: $limit, type: REPOSITORY) {
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
            }
        }
    }
`;

export default getListRepositories;
