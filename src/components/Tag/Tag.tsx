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
        borderColor: "#45c945",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 12,
        color: "#45c945",
    },
    selectedTag: {
        backgroundColor: "#45c945",
    },
    selectedText: {
        color: "white",
    },
});

export default Tag;
