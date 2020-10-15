import React, { FC, useCallback, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { COLORS } from "../../const/colors";
import { STRINGS } from "../../i18n/strings";
import { S } from "../../utils/styles";
import { PlayerStatI } from "../../types/PlayerStat";
import CustomText from "../../components/CustomText/CustomText";
import LoaderView from "../../components/LoaderView/LoaderView";
import { useDispatch, useSelector, useStore } from "react-redux";
import { State } from "../reducers";
import { async_getPlayerDetails } from "./action";

interface Props {
    id: string;
    changeScreen: (screen: string, id?: string) => void;
}

const Details: FC<Props> = (props) => {

    const playerId: string = useSelector((s: State) => s.details.id);
    const player: PlayerStatI | null = useSelector((s: State) => s.details.player);
    const loading: boolean = useSelector((s: State) => s.details.loading);
    const error: string = useSelector((s: State) => s.details.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(async_getPlayerDetails(playerId));
    }, []);


    if(loading) {
        return <LoaderView/>;
    }

    if(error || !player) {
        return (
            <View style={[S.f1, S.center, S.bgWhite]}>
               <Text>{error}</Text>
            </View>
        );
    }

    return (
            <View style={[S.f1, S.bgWhite]}>

                <View style={S.p20}>
                    <CustomText
                        title={`${player.firstname.toLocaleUpperCase()} ${player.lastname.toLocaleUpperCase()}`}
                        size={"h1"}
                        fontWeight={"bold"}
                        color={COLORS.secondary}
                    />
                </View>

                <View style={S.w100}>
                    <View style={[styles.desc]} >
                        <View style={S.f1}>
                            <CustomText
                                title={player.club}
                                color={COLORS.primary}
                            />
                        </View>
                        <View style={S.f1}>
                            <CustomText
                                title={STRINGS.player_club}
                                color={COLORS.secondary}
                            />
                        </View>
                    </View>

                    <View style={[styles.desc]} >
                        <View style={S.f1}>
                            <CustomText
                                title={player.quotation}
                                color={COLORS.primary}
                            />
                        </View>
                        <View style={S.f1}>
                            <CustomText
                                title={STRINGS.player_quote}
                                color={COLORS.secondary}
                            />
                        </View>
                    </View>

                    <View style={[styles.desc]} >
                        <View style={S.f1}>
                            <CustomText
                                title={player.stats.avgRate}
                                color={COLORS.primary}
                            />
                        </View>
                        <View style={S.f1}>
                            <CustomText
                                title={STRINGS.player_rate}
                                color={COLORS.secondary}
                            />
                        </View>
                    </View>

                    <View style={[styles.desc]} >
                        <View style={S.f1}>
                            <CustomText
                                title={player.stats.appearances.starter}
                                color={COLORS.primary}
                            />
                        </View>
                        <View style={S.f1}>
                            <CustomText
                                title={STRINGS.player_starter}
                                color={COLORS.secondary}
                            />
                        </View>
                    </View>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
   namePositionWrapper: {
       flexDirection: "row",
       justifyContent: "space-between",
       paddingHorizontal: 20,
   },
   desc: {
       width: "100%",
       flexDirection: "row",
       paddingHorizontal: 20,
       paddingVertical: 5,
       backgroundColor: COLORS.lightGrey,
       borderTopWidth: 1,
       borderColor: COLORS.grey,
   },
});

export default Details;
