import React, { FC } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';


interface Props {
    title: string;
    onPress: () => void;
}

const MainButton: FC<Props> = (props) => {

    return (
        <Pressable onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 48,
        backgroundColor: "#45c945",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "white",
    },
});

export default MainButton;
