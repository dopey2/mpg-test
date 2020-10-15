import React, { FC } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';
import { COLORS } from "../../const/colors";


interface Props {
    title: string;
    onPress: () => void;
    selected: boolean
}

const Tag: FC<Props> = (props) => {

    return (
        <Pressable onPress={props.onPress}>
            <View style={[styles.tag, props.selected && styles.selectedTag]}>
                <Text style={[styles.text, props.selected && styles.selectedText]}>{props.title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    tag: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50,
        borderColor: COLORS.primary,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 12,
        color: COLORS.primary,
    },
    selectedTag: {
        backgroundColor: COLORS.primary,
    },
    selectedText: {
        color: COLORS.white,
    },
});

export default Tag;
