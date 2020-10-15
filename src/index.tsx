import React from "react";
import { Provider } from "react-redux";
import { Navigation } from "react-native-navigation";

import { COLORS } from "./const/colors";
import { SCREENS } from "./const/screens";
import { store } from "./store";
import Players from "./app/Players/Players";
import Details from "./app/Details/Details";

const withRedux = (Component: any) => (props: any) => {
    return (
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
    );
};

Navigation.registerComponent(SCREENS.players, () => withRedux(Players));
Navigation.registerComponent(SCREENS.details, () => withRedux(Details));

Navigation.setDefaultOptions({
    topBar: {
        title: {
            color: COLORS.white,
        },
        backButton: {
            color: COLORS.white,
        },
        background: {
            color: COLORS.primary,
        },
    },
});

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: SCREENS.players,
                        },
                    }
                ],
            },
        },
    });
});


