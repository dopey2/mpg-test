import { testSaga } from 'redux-saga-test-plan';
import { players_selector, saga_filterPlayers } from "../../src/app/Players/saga";
import { ASYNC_FILTER_PLAYER, setFilteredPlayers } from "../../src/app/Players/action";
import { PlayerI } from "../../src/types/PlayerI";

const players = [
    {
        firstname: "Gianluigi",
        lastname: "Buffon",
        ultraPosition: 1,
    },
    {
        firstname: "Andrea",
        lastname: "Raggi",
        ultraPosition: 20,
    },
    {
        firstname: "Souleymane ",
        lastname: "Camara",
        ultraPosition: 40,
    },
    {
        firstname: "Jimmy ",
        lastname: "Briand",
        ultraPosition: 40,
    }
];

describe("TEst saga_filterPlayers ", () => {
    describe("When i filter by goalkeeper", () => {
        it('Should only put Gianluigi', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "", selectedPosition: "1" };
            const expected = [players[0]] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

    describe("When i filter by defender ", () => {
        it('Should only put Andrea Raggi', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "", selectedPosition: "20" };
            const expected = [players[1]] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

    describe("When i filter by attacker ", () => {
        it('Should put Souleymane and Jimmy', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "", selectedPosition: "40" };
            const expected = [players[2], players[3]] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

    describe("When i filter by name with the query 'gi' ", () => {
        it('Should put Gianluigi Buffon & Andrea Raggi', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "gi", selectedPosition: "" };
            const expected = [players[0], players[1]] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

    describe("When i filter by name with the query 'gi' and by attackers ", () => {
        it('Should put an empty array', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "gi", selectedPosition: "40" };
            const expected = [] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

    describe("When i filter by name with the query 'Jimmy'", () => {
        it('Should only put Jimmy', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "Jimmy", selectedPosition: "" };
            const expected = [players[3]] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

    describe("When i filter by name with the query 'u'", () => {
        it('Should put Button and Souleymane', () => {

            const action = { type: ASYNC_FILTER_PLAYER, search: "u", selectedPosition: "" };
            const expected = [players[0], players[2]] as PlayerI[];

            testSaga(saga_filterPlayers, action)
                .next()
                .select(players_selector)
                .next(players)
                .put(setFilteredPlayers(expected))
                .next()
                .isDone();
        });
    });

});

