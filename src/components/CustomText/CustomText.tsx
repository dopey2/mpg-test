import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
    title: string | number;
    size?: "normal" | "medium" | "big" | "h1"
    color?: string;
    fontWeight?: "normal" | "bold"
}

const CustomText: FC<Props> = ({ title, size, color, fontWeight }) => {

    return (
        <Text style={[
            styles[size || "normal"],
            {
                color: color || "black",
                fontWeight: fontWeight || "normal",
            }
        ]}>{title}</Text>
    );
};

const styles = StyleSheet.create({
   normal: {
       fontSize: 14,
   },
   medium: {
        fontSize: 16,
   },
   big: {
       fontSize: 18,
   },
   h1: {
      fontSize: 20,
   },
});

export default CustomText;
