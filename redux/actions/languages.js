import {
    SET_ACTIVE_LANGUAGE,
    SET_TRANSLATED_LANGUAGE,
    SET_SOURCE_LANGUAGE,
    GET_POPULAR_LANGUAGES,
    SET_SEARCH_QUERY
} from "../actionsTyps";

export const setActiveLanguage = language => ({ type: SET_ACTIVE_LANGUAGE, language });
export const setSourceLanguage = language => ({ type: SET_SOURCE_LANGUAGE, language });
export const setTranslatedLanguage = language => ({ type: SET_TRANSLATED_LANGUAGE, language });
export const getPopularLanguages = language => ({ type: GET_POPULAR_LANGUAGES, language });
export const setSearchQuery = searchQuery => ({ type: SET_SEARCH_QUERY, searchQuery });
