import React, { FC } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Tag from "../../../components/Tag/Tag";
import { S } from "../../../utils/styles";
import { PLAYER_ULTRA_POSITION } from "../../../const/mpg";
import { mapPositionToString } from "../../../utils/playerUtils";
import { COLORS } from "../../../const/colors";

interface Props {
    search: string;
    selectedPosition: string;
    onChangeSearch: (val: string) => void;
    onChangeSelectedPosition: (val: string) => void;
}

const PlayersFilter: FC<Props> = ({
    search,
    selectedPosition,
    onChangeSearch,
    onChangeSelectedPosition,
}) => {

    return (
        <View>
            <View style={[S.p10]}>
                <TextInput
                    style={styles.input}
                    value={search}
                    onChangeText={onChangeSearch}
                    placeholder={"Recherche par nom"}
                />

                <ScrollView
                    style={[S.w100, S.row, S.mT10]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Tag
                        key={"default"}
                        title={"TOUT"}
                        selected={!selectedPosition}
                        onPress={() => onChangeSelectedPosition("")}
                    />

                    {PLAYER_ULTRA_POSITION.map((value) => {
                        return (
                            <View
                                style={S.mL5}
                                key={value}
                            >
                                <Tag
                                    title={mapPositionToString(value)}
                                    selected={selectedPosition === value.toString()}
                                    onPress={() => onChangeSelectedPosition(value.toString())}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   input: {
       borderWidth: 1,
       borderRadius: 5,
       paddingLeft: 10,
       paddingVertical: 5,
       borderColor: COLORS.secondary,
       color: COLORS.secondary,

   },
});

export default PlayersFilter;
