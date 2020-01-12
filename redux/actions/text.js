import {
    SET_SOURCE_TEXT,
    SET_TRANSLATED_TEXT,
    CREATE_DATA_FIELD,
    SAVE_DATA_FIELD,
    DELETE_DATA_FIELD
} from "../actionsTyps";

export const setSourceText = text => ({ type: SET_SOURCE_TEXT, text });
export const setTranslatedText = text => ({ type: SET_TRANSLATED_TEXT, text });
export const createDataField = payload => ({ type: CREATE_DATA_FIELD, payload });
export const saveDataField = (payload, saved) => ({ type: SAVE_DATA_FIELD, payload, saved });
export const deleteDataField = data => ({ type: DELETE_DATA_FIELD, data });