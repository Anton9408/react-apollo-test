import {gql} from 'apollo-boost';

const getListRepositories = gql`
    query getListRepositories($searchData: String!, $limit: Int) {
        search(query: $searchData, first: $limit, type: REPOSITORY) {
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
