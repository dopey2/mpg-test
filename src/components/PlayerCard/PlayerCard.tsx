import React, { FC, useCallback } from 'react';
import {
    StyleSheet,
    View,
    Pressable
} from 'react-native';

import { COLORS } from "../../const/colors";
import CustomText from "../CustomText/CustomText";

interface Props {
    name: string;
    position: string;
    club: string;
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
                <View style={styles.positionWrapper}>
                    <CustomText
                        title={props.position}
                        color={COLORS.white}
                        fontWeight={"bold"}
                    />
                </View>
                <View style={styles.rightWrapper}>
                    <CustomText title={props.name}/>
                    <CustomText title={props.club} color={COLORS.grey}/>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        borderRadius: 5,
        marginTop: 10,
        elevation: 2,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
    positionWrapper: {
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    positionText: {
        color: COLORS.white,
    },
    rightWrapper: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default PlayerCard;
