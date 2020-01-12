import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { Button  } from "@ui-kitten/components";


export default ({ data, navigation }) => (
    <View style={ styles.controlContainer } >
        <Button
            onPress={ () => navigation("LanguagesList", data.name) }
            icon={ () =>
                <Image style={{ width: 10, height: 6 }} source={require("./../assets/tick.png")} />
            }
            style={ styles.button }
            textStyle={ styles.text }
            size="large"
            status="control"
        >
            { data.language }
        </Button>
    </View>
);

const styles = StyleSheet.create({
    controlContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    button: {
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        textAlign: "left",
        maxHeight: 48
    },
    text: {
        color: "#3366FF",
        fontWeight: "bold",
        fontSize: 15,
    },
});
