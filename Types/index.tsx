export interface Movies {
    data: {

        movies: Array<Movie>
    }
}
export interface Movie {
    id: number,
    title: string,
    releaseYear: number
}