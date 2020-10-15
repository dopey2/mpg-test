import React, { FC, useCallback, useEffect, useState } from "react";
import {
    Text,
    View,
    FlatList,
    ListRenderItemInfo
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "react-native-navigation";

import { SCREENS } from "../../const/screens";
import { PlayerI } from "../../types/PlayerI";
import { S } from "../../utils/styles";
import { State } from "../reducers";
import { mapPositionToShortString } from "../../utils/playerUtils";
import { async_filterPlayer, async_getPlayers } from "./action";

import PlayersFilter from "./components/PlayersFilter";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import LoaderView from "../../components/LoaderView/LoaderView";
import {setPlayerDetailsId} from "../Details/action";

interface Props {
    componentId: string;
}

const Players: FC<Props> = (props) => {

    const filteredPlayers: Array<PlayerI> = useSelector((s: State) => s.players.filteredPlayers);
    const loading: boolean = useSelector((s: State) => s.players.loading);
    const error: string = useSelector((s: State) => s.players.error);

    const [search, setSearch] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(async_getPlayers());
    }, []);

    useEffect(() => {
        dispatch(async_filterPlayer(search, selectedPosition));
    }, [search, selectedPosition]);


    const onPressPlayer = useCallback((id: string) => {
        dispatch(setPlayerDetailsId(id));
        Navigation.push(
            props.componentId, {
                component: {
                    name: SCREENS.details,
                    passProps: { id },
                },
            }
        );
    }, []);

    const onChangeSearch = useCallback((text) => {
        setSearch(text);
    }, []);

    const onChangeSelectedPosition = useCallback((position) => {
        setSelectedPosition(position);
    }, []);

    const renderItem = useCallback((info: ListRenderItemInfo<PlayerI>) => {
        return (
            <PlayerCard
                key={info.item.id}
                onPress={onPressPlayer}
                name={`${info.item.firstname} ${info.item.lastname}`}
                position={mapPositionToShortString(info.item.ultraPosition)}
                club={info.item.club}
                id={info.item.id}
            />
        );
    }, []);


    if(loading) {
        return <LoaderView/>;
    }

    if(error) {
        return (
            <View style={[S.f1, S.center, S.bgWhite]}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={[S.w100, S.bgWhite]}>
            <PlayersFilter
                search={search}
                selectedPosition={selectedPosition}
                onChangeSearch={onChangeSearch}
                onChangeSelectedPosition={onChangeSelectedPosition}
            />

            <FlatList
                data={filteredPlayers as Array<PlayerI>}
                renderItem={renderItem}
                contentContainerStyle={S.p10}
                keyExtractor={(item: PlayerI) => item.id}
            />
        </View>
    );
};

export default Players;
