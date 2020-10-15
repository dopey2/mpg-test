import { StyleSheet } from "react-native";
import {COLORS} from "../const/colors";

export const S = StyleSheet.create({
    f1: {
        flex: 1,
    },
    w100: {
        width: "100%",
    },
    row: {
        flexDirection: "row",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    p10: {
       padding: 10,
    },
    p20: {
        padding: 20,
    },
    mT10: {
       marginTop: 10,
    },
    mT20: {
        marginTop: 20,
    },
    mL5: {
        marginLeft: 5,
    },
    bgWhite: {
        backgroundColor: COLORS.white,
    },
});
