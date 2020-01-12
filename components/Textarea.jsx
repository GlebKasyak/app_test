import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '@ui-kitten/components';

import RenderIcons from "./../components/RenderIcons";
import { getInputStyle } from "./../utils/textFieldSettings";

export default ({ language, value, onChange, onKeyPress, saveData }) => {
    const label = language.language;
    const inputStyle = getInputStyle(language.name);
    return (
        <Input
            value={ value }
            multiline={ true }
            label={ label }
            onKeyPress={ e => {
                if(e.nativeEvent.key === "Enter") onKeyPress(value)
            }}
            onChangeText={ text => onChange(text) }
            labelStyle={ [styles.inputLabel, { color: inputStyle.labelStyle.color }] }
            icon={ () =>
                <RenderIcons
                    name={ language.name }
                    value={ value }
                    saveData={ saveData }
                />
            }
            style={ [styles.input, inputStyle.labelStyle] }
            textStyle={ [styles.inputText, inputStyle.inputText] }
            status="control"
            placeholder="Enter text"
            placeholderTextColor="#8F9BB3"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 21,
        width: "100%"
    },
    inputText: {
        paddingVertical: 9,
        paddingHorizontal: 8,
        textAlignVertical: "top",
        fontSize: 15,
        height: 96
    },
    inputLabel: {
        fontSize: 12,
        lineHeight: 16,
        textTransform: "uppercase",
        marginBottom: 12,
        fontWeight: "bold",
    }
});