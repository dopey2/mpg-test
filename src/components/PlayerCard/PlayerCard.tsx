import React, { FC, useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text, Pressable
} from 'react-native';

interface Props {
    name: string;
    position: string;
    id: string;
    onPress: (id: string) => void;
}

const PlayerCard: FC<Props> = (props) => {

    const onPress = useCallback(() => {
        props.onPress(props.id);
    }, []);

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text>{props.name}</Text>
                <Text>{props.position}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        elevation: 2,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
});

export default PlayerCard;
