import {gql} from 'apollo-boost';

const getListLicenses = gql`
    query GetListLicensies {
        licenses {
            id
            name
            key
        }
    }
`;

export default getListLicenses;
