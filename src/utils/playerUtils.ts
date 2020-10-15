import { UltraPositionType } from "../types/PlayerI";
import { STRINGS } from "../i18n/strings";

export const mapPositionToShortString = (ultraPosition: UltraPositionType) => {
    //@ts-ignore
    const key = {
        "p_10": "player_position_short_G",
        "p_20": "player_position_short_D",
        "p_21": "player_position_short_L",
        "p_31": "player_position_short_MD",
        "p_32": "player_position_short_MO",
        "p_40": "player_position_short_A",
    }["p_" + ultraPosition] || "";

    //@ts-ignore
    return STRINGS[key] || "";
};

export const mapPositionToString = (ultraPosition: UltraPositionType) => {
    //@ts-ignore
    const key = {
        "p_10": "player_position_G",
        "p_20": "player_position_D",
        "p_21": "player_position_L",
        "p_31": "player_position_MD",
        "p_32": "player_position_MO",
        "p_40": "player_position_A",
    }["p_" + ultraPosition] || "";

    //@ts-ignore
    return STRINGS[key] || "";
};


