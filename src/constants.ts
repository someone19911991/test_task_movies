const genres = [
    { value: "action", name: "Action" },
    { value: "comedy", name: "Comedy" },
    { value: "horror", name: "Horror" },
    { value: "sci-fi", name: "Sci-Fi" },
    { value: "western", name: "Western" },
    { value: "romance", name: "Romance" },
    { value: "thriller", name: "Thriller" },
    { value: "fantasy", name: "Fantasy" },
    { value: "historical", name: "Historical" },
    { value: "crime", name: "Crime" },
    { value: "drama", name: "Drama" },
    { value: "animation", name: "Animation" },
    { value: "experimental", name: "Experimental" },
    { value: "Drama, War", name: "Drama, War" },
    { value: "Documentary", name: "Documentary" },
];
const movieTypes = [
    { value: "movie", name: "Movie" },
    { value: "series", name: "Series" },
    { value: "episode", name: "Episode" },
];
const validDateRegex = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
const validRuntimeRegex = /[0-9]{1,2}\s{1,}min/;
const englishLettersOnlyRegex = /^[A-Za-z\s]+$/;
const formDataKeys = [
    "Title",
    "Year",
    "Rated",
    "Released",
    "Runtime",
    "Genre",
    "Director",
    "Writer",
    "Actors",
    "Plot",
    "imdbID",
    "Type",
    "Poster",
];

export {
    genres,
    validDateRegex,
    validRuntimeRegex,
    englishLettersOnlyRegex,
    movieTypes,
    formDataKeys
};
