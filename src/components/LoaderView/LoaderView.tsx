import React, { FC } from "react";
import {
    View,
    Text,
    ActivityIndicator,
} from "react-native";

import { STRINGS } from "../../i18n/strings";
import { S } from "../../utils/styles";

const LoaderView: FC = () => {

    return (
        <View style={[S.f1, S.center, S.bgWhite]}>
            <ActivityIndicator/>
            <Text>{STRINGS.loading}</Text>
        </View>
    );
};

export default LoaderView;

