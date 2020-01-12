import React, { useState, memo } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { List } from '@ui-kitten/components';
import { connect } from "react-redux";

import { Container, DataField, Textarea, SelectLanguage } from "./../components";
import { setSourceText, setTranslatedText, createDataField, saveDataField } from "../redux/actions/text";

const TranslateScreen = memo((
    {
        navigation,
        sourceLanguage,
        translatedLanguage,
        setSourceText,
        setTranslatedText,
        sourceText,
        translatedText,
        createDataField,
        dataFields,
        saveDataField
    }) => {
    const [reverse, setReverse] = useState(false);

    return (
        <Container>

           <View style={ reverse ? styles.rowReverse : styles.row } >

               <SelectLanguage navigation={ navigation.navigate } data={ sourceLanguage } />
               <TouchableOpacity style={ styles.reverse } onPress={ () => setReverse(!reverse) } >
                   <View>
                       <Image source={ require("./../assets/icon_left.png") } />
                       <Image source={ require("./../assets/icon_right.png") } />
                   </View>
               </TouchableOpacity>
               <SelectLanguage navigation={ navigation.navigate } data={ translatedLanguage } />

           </View>

            <Textarea
                language={ sourceLanguage }
                value={ sourceText }
                onChange={ setSourceText }
                onKeyPress={ createDataField }
                saveData={ saveDataField }
            />
            { !!sourceText &&
                <Textarea
                    language={ translatedLanguage }
                    value={ translatedText }
                    onChange={ setTranslatedText }
                    onKeyPress={ createDataField }
                    saveData={ saveDataField }
                />
            }

            <View style={ styles.fieldsBlock }>
                <List
                    data={ dataFields }
                    keyExtractor={ (item, index) => item._id + index }
                    renderItem={({ item }) => <DataField item={ item } /> }
                    refreshing
                    inverted
                />
            </View>

        </Container>
    );
});


const styles = StyleSheet.create({
    reverse: {
        marginHorizontal: 8,
        backgroundColor: "#fff",
        minWidth: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    row: {
        flexDirection: "row"
    },
    rowReverse: {
        flexDirection: "row-reverse"
    },
    fieldsBlock: {
        width: "100%",
        flex: 1,
        marginBottom: 30
    }

});

const mapStateToProps = ({ languages, text }) => ({
    sourceLanguage: languages.sourceLanguage,
    translatedLanguage: languages.translatedLanguage,
    sourceText: text.sourceText,
    translatedText: text.translatedText,
    dataFields: text.dataFields
});

const mapDispatchToProps = dispatch => ({
    setSourceText: text => dispatch(setSourceText(text)),
    setTranslatedText: text => dispatch(setTranslatedText(text)),
    createDataField: payload => dispatch(createDataField(payload)),
    saveDataField: (payload, saved) => dispatch(saveDataField(payload, saved))
});

export default connect(mapStateToProps, mapDispatchToProps)(TranslateScreen);