import { Image } from "react-native";
import React from "react";

export default (navigation, focused) => {
    const { routeName } = navigation.state;
    let imageAddress;
    if(routeName === "Translate") {
        focused
            ? imageAddress = require("./../assets/translate_focused.png")
            : imageAddress = require("./../assets/translate_default.png")
    } else if (routeName === "Saved") {
        focused
            ? imageAddress = require("./../assets/saved_focused.png")
            : imageAddress = require("./../assets/saved_default.png")
    }

    return imageAddress && <Image style source={ imageAddress } />
};