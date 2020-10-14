import React, { FC, useCallback, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ListRenderItemInfo,
    ActivityIndicator,
    TextInput,
    ScrollView
} from 'react-native';

import { SCREENS } from "../const/screens";
import { PLAYER_POSITION } from "../const/positon";
import { PlayerI } from "../types/PlayerI";
import { getPlayers } from "../api";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import Tag from "../components/Tag/Tag";

interface Props {
    changeScreen: (screen: string, props?: string) => void;
}

const Players: FC<Props> = (props) => {

    const [players, setPlayers] = useState<Array<PlayerI>>([]);
    const [filteredPlayers, setFilteredPlayer] = useState<Array<PlayerI>>([]);
    const [search, setSearch] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getPlayers();
            setPlayers(data);
            setFilteredPlayer(data);
            setError("");
        }
        catch(err) {
            setError("Erreur");
        }
        finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        filter();
    }, [search, selectedPosition]);


    const filter = useCallback(() => {
        const byPosition = players.filter((player) => {
           return !selectedPosition || player.ultraPosition.toString() === selectedPosition.toString();
        });

        const byNameAndPosition = byPosition.filter((player) => {
            return `${player.firstname} ${player.lastname}`.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredPlayer(byNameAndPosition);
    }, [search, selectedPosition]);

    const onPressPlayer = useCallback((id: string) => {
        props.changeScreen(SCREENS.details, id);
    }, []);

    const onChangeText = useCallback((text) => {
        setSearch(text);
    }, []);

    const changeSelectedPosition = useCallback((position) => {
        setSelectedPosition(position);
    }, []);


    const renderItem = useCallback((info: ListRenderItemInfo<PlayerI>) => {
        return (
            <PlayerCard
                key={info.item.id}
                onPress={onPressPlayer}
                name={`${info.item.firstname} ${info.item.lastname}`}
                position={`${info.item.position}`}
                id={info.item.id}
            />
        );
    }, []);


    return (
            <View style={styles.container}>
                {loading ? (
                    <View style={[styles.container, styles.center]}>
                        <ActivityIndicator/>
                        <Text>chargement...</Text>
                    </View>
                ) : (
                    error ? (
                        <View style={[styles.container, styles.center]}>
                            <Text>{error}</Text>
                        </View>
                    ) : (
                        <View style={styles.container}>
                            <View style={styles.filterWrapper}>
                                <TextInput
                                    style={styles.textInput}
                                    value={search}
                                    onChangeText={onChangeText}
                                    placeholder={"Recherche par nom"}
                                />

                                <ScrollView
                                    style={styles.tagScrollView}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Tag
                                        key={"default"}
                                        title={"TOUT"}
                                        selected={!selectedPosition}
                                        onPress={() => changeSelectedPosition("")}
                                    />

                                    {Object.entries(PLAYER_POSITION).map(([key, value]) => {
                                        return (
                                            <View
                                                style={styles.tagWrapper}
                                                key={key}
                                            >
                                                <Tag
                                                    title={value.toUpperCase()}
                                                    selected={selectedPosition === key}
                                                    onPress={() => changeSelectedPosition(key)}
                                                />

                                            </View>
                                        );
                                    })}

                                </ScrollView>
                            </View>
                            <FlatList
                                data={filteredPlayers as Array<PlayerI>}
                                renderItem={renderItem}
                                contentContainerStyle={styles.list}
                                keyExtractor={(item: PlayerI) => item.id}
                            />
                        </View>
                    )
                )}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        padding: 10,
    },
    filterWrapper: {
        padding: 10,
    },
    textInput: {
        padding: 10,
        borderBottomWidth: 1,
    },
    tagScrollView: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
    },
    tagWrapper: {
        marginLeft: 5,
    },
});

export default Players;
