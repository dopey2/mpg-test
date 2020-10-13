export interface PlayerI {
    id: string,
    firstname: string,
    lastname: string,
    position: number,
    ultraPosition: 10 | 20 | 21 | 31 | 32 | 40,
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
