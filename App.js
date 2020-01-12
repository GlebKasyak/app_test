import React from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { Provider } from "react-redux";
import store from "./redux/store"

import { LanguagesListScreen, SavedScreen, TranslateScreen } from "./screens";
import { getTabBarIcon } from "./utils";


export default App = () => (
        <Provider store={ store } >
            <ApplicationProvider mapping={ mapping } theme={ lightTheme } >
                <TabBar />
            </ApplicationProvider>
        </Provider>
);

const StackNavigation = createStackNavigator({
    Translate: {
        screen: TranslateScreen
    },
    LanguagesList: {
        screen: LanguagesListScreen
    }
}, {
    defaultNavigationOptions: {
        headerShown: false,
        headerTitleAlign: "center",
        headerTitle: "Translate from",
        headerTitleStyle: {
            color: "#8992A3",
            textTransform: "uppercase",
            fontSize: 15,
            fontWeight: "bold"
        },
        headerStyle: {
            borderBottomColor: "transparent",
            shadowOpacity: 5,
            elevation: 5,
            shadowRadius: 10,
            shadowColor: "#000",
            height: 77,
        }
    }
});

const TabNavigator = createBottomTabNavigator(
    {
        Translate: {
            screen: StackNavigation
        },
        Saved: {
            screen: SavedScreen
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => getTabBarIcon(navigation, focused),

        }),
        tabBarOptions: {
            activeTintColor: "#3366FF",
            inactiveTintColor: "#8F9BB3",
            style: {
                height: 70,
                shadowOpacity: 20,
                elevation: 20,
                shadowRadius: 10,
                shadowColor: "#000",
                paddingTop: 15,
                borderTopColor: "transparent",
            },
            labelStyle: {
                fontSize: 15,
                fontWeight: "bold",
                paddingBottom: 8.5
            }
        }
    }
);

const TabBar = createAppContainer(TabNavigator);