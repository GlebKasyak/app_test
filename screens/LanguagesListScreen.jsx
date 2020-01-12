import React, { memo, useEffect } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { List, Input  } from '@ui-kitten/components';
import { connect } from "react-redux";

import { Container, LanguageBlock } from "./../components";
import {
    setActiveLanguage,
    setSourceLanguage,
    setTranslatedLanguage,
    getPopularLanguages,
    setSearchQuery
} from "./../redux/actions/languages";

const LanguagesListScreen = memo(
    ({
            navigation,
            languages,
            setActive,
            setSourceLanguage,
            setTranslatedLanguage,
            getPopularLanguages,
            popularLanguages,
            setSearchQuery,
            searchQuery
    }) => {

    const setLanguage = language => {
        const name = navigation.state.params;

        if(name === "enter") {
            setSourceLanguage(language)
        } else if (name === "result") {
            setTranslatedLanguage(language)
        }
        setActive(language);
        getPopularLanguages(language)
    };

    useEffect(() => {
        getPopularLanguages();
    }, []);

    return (
        <Container>
            <View style={ styles.searchBlock }>
                <Input
                    value={ searchQuery }
                    onChangeText={ text => setSearchQuery(text) }
                    textStyle={ styles.inputText }
                    status="control"
                    size="large"
                    placeholder="Search"
                    placeholderTextColor="#8F9BB3"
                    removeClippedSubviews={ true }
                />
            </View>
            <View style={ styles.popularLanguages }>
                { popularLanguages.map(item =>
                   <LanguageBlock key={ item._id } item={ item } setLanguage={ setLanguage } />
                ) }
            </View>
            <List
                style={ styles.languageList }
                data={ languages.filter(item =>
                    item.language.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
                ) }
                inverted
                renderItem={
                    ({ item }) =>
                        <LanguageBlock
                            item={ item }
                            setLanguage={ setLanguage }
                        />
                }
            />
        </Container>
    );
});

const styles = StyleSheet.create({
    inputText: {
        color: "#8F9BB3",
        fontSize: 15,
    },
    popularLanguages: {
        width: "100%",
        marginTop: 10
    },
    languageList: {
        width: "100%",
    },
    searchBlock: {
        width: '100%',
        backgroundColor: "#fff",
        marginTop: 26,
    }
});


LanguagesListScreen.navigationOptions = ({ navigation }) => ({
    headerShown: true,
    headerLeft: () =>
        <TouchableOpacity onPress={() => navigation.navigate("Translate")} >
            <Image style={{ left: 15 }} source={ require("./../assets/back_image.png") } />
        </TouchableOpacity>,
});

const mapStateToProps = ({ languages }) => ({
    languages: languages.languages,
    popularLanguages: languages.popularLanguages,
    searchQuery: languages.searchQuery
});

const mapDispatchToProps = dispatch => ({
    setActive: language => dispatch(setActiveLanguage(language)),
    setSourceLanguage: language => dispatch(setSourceLanguage(language)),
    setTranslatedLanguage: language => dispatch(setTranslatedLanguage(language)),
    getPopularLanguages: languages => dispatch(getPopularLanguages(languages)),
    setSearchQuery: searchQuery => dispatch(setSearchQuery(searchQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesListScreen);