import {
    SET_ACTIVE_LANGUAGE,
    SET_TRANSLATED_LANGUAGE,
    SET_SOURCE_LANGUAGE,
    GET_POPULAR_LANGUAGES,
    SET_SEARCH_QUERY
} from "../actionsTyps";
import { getPopularLanguages } from "./../../utils";

const initialState = {
    languages: [
        {
            "_id": 1,
            "language": "Acholi",
            "count": 0,
            "active": false
        },
        {
            "_id": 2,
            "language": "Afrikaans",
            "count": 0,
            "active": false
        },
        {
            "_id": 3,
            "language": "Akan",
            "count": 0,
            "active": false
        },
        {
            "_id": 4,
            "language": "Albanian",
            "count": 0,
            "active": false
        },
        {
            "_id": 5,
            "language": "Amharic",
            "count": 0,
            "active": false
        },
        {
            "_id": 6,
            "language": "Arabic",
            "count": 0,
            "active": false
        },
        {
            "_id": 7,
            "language": "Ashante",
            "count": 0,
            "active": false
        },
        {
            "_id": 8,
            "language": "Asl",
            "count": 0,
            "active": false
        },
        {
            "_id": 9,
            "language": "Assyrian",
            "count": 0,
            "active": false
        },
        {
            "_id": 10,
            "language": "Azerbaijani",
            "count": 0,
            "active": false
        },
        {
            "_id": 11,
            "language": "Azeri",
            "count": 0,
            "active": false
        },
        {
            "_id": 12,
            "language": "Bajuni",
            "count": 0,
            "active": false
        },
        {
            "_id": 13,
            "language": "Basque",
            "count": 0,
            "active": false
        },
        {
            "_id": 14,
            "language": "Behdini",
            "count": 0,
            "active": false
        },
        {
            "_id": 15,
            "language": "Belorussian",
            "count": 0,
            "active": false
        },
        {
            "_id": 16,
            "language": "Bengali",
            "count": 0,
            "active": false
        },
        {
            "_id": 17,
            "language": "Berber",
            "count": 0,
            "active": false
        },
        {
            "_id": 18,
            "language": "Bosnian",
            "count": 0,
            "active": false
        },
        {
            "_id": 19,
            "language": "Bravanese",
            "count": 0,
            "active": false
        },
        {
            "_id": 20,
            "language": "Bulgarian",
            "count": 0,
            "active": false
        },
        {
            "_id": 21,
            "language": "Burmese",
            "count": 0,
            "active": false
        },
        {
            "_id": 22,
            "language": "Cakchiquel",
            "count": 0,
            "active": false
        },
        {
            "_id": 23,
            "language": "Cambodian",
            "count": 0,
            "active": false
        },
        {
            "_id": 24,
            "language": "Cantonese",
            "count": 0,
            "active": false
        },
        {
            "_id": 25,
            "language": "Catalan",
            "count": 0,
            "active": false
        },
        {
            "_id": 26,
            "language": "Chaldean",
            "count": 0,
            "active": false
        },
        {
            "_id": 27,
            "language": "Chamorro",
            "count": 0,
            "active": false
        },
        {
            "_id": 28,
            "language": "Chao-chow",
            "count": 0,
            "active": false
        },
        {
            "_id": 29,
            "language": "Chavacano",
            "count": 0,
            "active": false
        },
        {
            "_id": 30,
            "language": "Chin",
            "count": 5,
            "active": false
        },
        {
            "_id": 31,
            "language": "Chuukese",
            "count": 0,
            "active": false
        },
        {
            "_id": 32,
            "language": "Cree",
            "count": 0,
            "active": false
        },
        {
            "_id": 33,
            "language": "Croatian",
            "count": 0,
            "active": false
        },
        {
            "_id": 34,
            "language": "Czech",
            "count": 0,
            "active": false
        },
        {
            "_id": 35,
            "language": "Dakota",
            "count": 0,
            "active": false
        },
        {
            "_id": 36,
            "language": "Danish",
            "count": 0,
            "active": false
        },
        {
            "_id": 37,
            "language": "Dari",
            "count": 0,
            "active": false
        },
        {
            "_id": 38,
            "language": "Dinka",
            "count": 0,
            "active": false
        },
        {
            "_id": 39,
            "language": "Diula",
            "count": 0,
            "active": false
        },
        {
            "_id": 40,
            "language": "Dutch",
            "count": 10,
            "active": false
        }
    ],
    popularLanguages: [],
    sourceLanguage: {
        "name": "enter",
        "_id": 144,
        "language": "Russian",
        "count": 0
    },
    translatedLanguage: {
        "name": "result",
        "_id": 42,
        "language": "English",
        "count": 0
    },
    searchQuery: ""

};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_POPULAR_LANGUAGES:
        case SET_ACTIVE_LANGUAGE: {
            return {
                ...state,
                languages: state.languages.map(item => {
                    if(action.language && (item._id === action.language._id)) {
                        return {
                            ...item,
                            count: action.language.count + 1,
                            active: true
                        }
                    }
                    return {...item, active: false}
                }),
                popularLanguages: getPopularLanguages(state.languages)
            }
        }
        case SET_SOURCE_LANGUAGE: {
            return {
                ...state,
                sourceLanguage: { name: "enter", ...action.language }
            }
        }
        case SET_TRANSLATED_LANGUAGE: {
            return {
                ...state,
                translatedLanguage: { name: "result", ...action.language }
            }
        }
        case SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        }
        default: {
            return state
        }
    }
};
