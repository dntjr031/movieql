import {getMovies} from "../db/db";

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
    },
}

export default resolvers;
