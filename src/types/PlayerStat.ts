export interface PlayerStatI {
    "calendar": string,
    club: string;
    firstname: string;
    lastname: string;
    ultraPosition: number;
    id: string;
    nbMatch: string;
    position: string;
    quotation: string;
    stats: {
        appearances: {
            standBy: number;
            standIn: number;
            starter: number; // titulaire
            total: number;
            id: string;
        },
        percentageSaveShot: number;
        percentageStarter: number;
        percentageCleanSheet: number;
        avgRate: number; // moyenne
        // ...
    }
}
