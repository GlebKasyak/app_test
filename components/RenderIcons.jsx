import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import { getIcons } from "../utils/textFieldSettings";

export default ({ name, value, saveData }) => (
    <View style={ style.iconsBlock } >
        <TouchableOpacity onPress={() => {
            if(name === "result") {
                saveData(value, true)
            } return null
        }} >
            <Image source={ getIcons(name).topIcon } />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={ getIcons(name).bottomIcon } />
        </TouchableOpacity>
    </View>
);

const style = StyleSheet.create({
    iconsBlock: {
        height: 96,
        paddingVertical: 12,
        paddingRight: 15,
        justifyContent: "space-between"
    }
});