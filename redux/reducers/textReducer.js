import {
    SET_SOURCE_TEXT,
    SET_TRANSLATED_TEXT,
    CREATE_DATA_FIELD,
    SAVE_DATA_FIELD,
    DELETE_DATA_FIELD
} from "../actionsTyps";

const initialState = {
    sourceText: "",
    translatedText: "",
    dataFields: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_TRANSLATED_TEXT:
        case SET_SOURCE_TEXT: {
            return {
                ...state,
                sourceText: action.text,
                translatedText: action.text
            }
        }
        case SAVE_DATA_FIELD:
        case CREATE_DATA_FIELD: {
            return {
                ...state,
                sourceText: "",
                translatedText: "",
                dataFields: [
                    ...state.dataFields,
                    {
                        _id: action.payload,
                        source: action.payload,
                        translated: action.payload,
                        saved: action.saved ? action.saved : false
                    }
                ]
            }
        }
        case DELETE_DATA_FIELD: {
            return {
               ...state,
                dataFields: state.dataFields.filter(item => item._id !== action.data._id)
            }
        }
        default: {
            return state
        }
    }
}