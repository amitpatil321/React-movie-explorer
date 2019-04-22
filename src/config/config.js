export const API_KEY            = "08308f4c5d9eb1e0301d7a1887838bec"; 
export const API_BASE_URL       = "https://api.themoviedb.org/3";

// Movie detaisl page 
export const MOVIES_PER_PAGE    = 20;
export const CAST_PER_PAGE      = 8;
export const COMPANIES_PER_PAGE = 8;

// Actor profile page details
export const META_ITEMS_PERPAGE = 18;

export const COLORS = ["#EF233C","#86A397","#21D19F","#45B69C","#522B47","#7DD181","#4B7F52","#2E5EAA","#393A10","#7189FF","#624CAB","#119822","#31CB00","#2A7221","#C64191","#1A5E63","#2A324B","#F0C808","#DD1C1A","#7C238C","#680E4B","#053C5E","#D2BF55","#17BEBB","#A14A76","#515A47","#453F78","#832232","#EAF27C","#7FB069","#136F63","#22AAA1","#9191E9","#457EAC","#00F0B5","#5E239D","#F61067","#F7A278"];

// Routes
export const ROUTES = {
    HOME            : "/home",
    MOVIE           : "/movie/",
    PRODUCTION      : "/company/",
    PERSON          : "/person/",
    GENRE           : "/genre/"
}

// image constants
export const NO_PHOTO = {
    POSTER : "/images/no_poster.PNG",
    PERSON : "/images/no_photo.jpg",
    LOGO   : "/images/no_logo.jpg"
}

export const TMDB_IMAGE = "http://image.tmdb.org/t/p";

// Image sizes
export const IMAGE_SIZE = {
    ORIGINAL : TMDB_IMAGE+"/original",
    SMALL    : TMDB_IMAGE+"/w185",
    MEDIUM   : TMDB_IMAGE+"/w342"
}

// Error messages
export const ERRORS = {
    PROFILE_NOT_FOUND : "Error fetching person profile!",
    NOTHING_TO_SHOW   : "Nothing to show!",
    NO_DATA_FOUND     : "No data found!"
}