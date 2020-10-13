import React, { FC, useCallback, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import { PLAYER_POSITION } from "../const/positon";
import { SCREENS } from "../const/screens";
import { PlayerStatI } from "../types/PlayerStat";
import { getPlayerDetail } from "../api";
import MainButton from "../components/Button/MainButton";

interface Props {
    id: string;
    changeScreen: (screen: string, id?: string) => void;
}

const Details: FC<Props> = (props) => {

    const [player, setPlayer] = useState<PlayerStatI | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getPlayerDetail(props.id.replace("player_", ""));
            setPlayer(data);
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

    const onBackPress = useCallback(() => {
        props.changeScreen(SCREENS.players);
    }, []);

    let position = "";
    const key = player && player.ultraPosition.toString();
    if(key && PLAYER_POSITION.hasOwnProperty(key)){
        //@ts-ignore
        position = PLAYER_POSITION[key];
    }

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                {loading ? (
                    <View style={[styles.container, styles.center]}>
                        <ActivityIndicator/>
                        <Text>chargement...</Text>
                    </View>
                ) : (
                    error || !player ? (
                        <View style={[styles.container, styles.center]}>
                            <Text>{error}</Text>
                        </View>
                    ) : (
                        <View style={styles.playerDetail}>
                            <View style={styles.center}>
                                <Text style={styles.textPrimary}>
                                    {player.firstname} {player.lastname}
                                </Text>
                                <Text style={styles.textSecondary}>{position}</Text>
                                <Text style={styles.textSecondary}>
                                    {player.club}
                                </Text>
                            </View>
                            <View style={styles.rowDetail}>
                                <View style={[styles.container, styles.center]}>
                                    <Text>Cote</Text>
                                    <Text>{player.quotation}</Text>
                                </View>
                                <View style={[styles.container, styles.center]}>
                                    <Text>Note moyenne</Text>
                                    <Text>{player.stats.avgRate}</Text>
                                </View>
                                <View style={[styles.container, styles.center]}>
                                    <Text>Titulaire</Text>
                                    <Text>{player.stats.appearances.starter}</Text>
                                </View>
                            </View>

                            <View style={styles.buttonWrapper}>
                                <MainButton
                                    title={"MENU"}
                                    onPress={onBackPress}
                                />
                            </View>

                        </View>
                    )
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    playerDetail: {
        flex: 1,
        padding: 10,
    },
    textPrimary: {
        fontSize: 20,
    },
    textSecondary: {
        fontSize: 16,
    },
    rowDetail: {
        marginTop: 10,
        flexDirection: "row",
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        width: 200,
        height: 48,
        backgroundColor: "#45c945",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Details;
