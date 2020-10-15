import { ElementType } from "./TypeHelper";
import { PLAYER_ULTRA_POSITION } from "../const/mpg";

export type UltraPositionType = ElementType<typeof PLAYER_ULTRA_POSITION>

export interface PlayerI {
    id: string,
    firstname: string,
    lastname: string,
    position: number,
    ultraPosition: UltraPositionType,
    teamId: number,
    quotation: number,
    club: string,
    stats: {
        "avgRate": number,
        "sumGoals": number,
        "currentChampionship": number,
        "percentageStarter": number
    }
}
