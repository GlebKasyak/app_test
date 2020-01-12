
export const getIcons = name => {
    if(name === "enter") {
        return {
            topIcon: require("./../assets/cross.png"),
            bottomIcon: require("./../assets/volume_blue.png")
        }
    } else {
        return {
            topIcon: require("./../assets/small_atar_gray.png"),
            bottomIcon: require("./../assets/volume_white.png")
        }
    }
};

export const getInputStyle = name => {
    if(name === "enter") {
        return {
            labelStyle: {
                color: "#3366FF",
                backgroundColor: "#fff"
            },
            inputText: {
                color: "#222B45"
            }
        }
    } else {
        return {
            labelStyle: {
                color: "#8992A3",
                backgroundColor: "#3366FF",
            },
            inputText: {
                color: "#fff"
            }
        }
    }
};