import { Room } from '../models/room';

export const ROOMS: Room[] = [
{
    id: "590b72e12b13cf00114afde6",
    createdBy: {
        id: "ag.blom@student.avans.nl",
        name: "Alec Blom"
    },
    createdOn: "2017-05-04T18:28:49.982Z",
    gameTemplate: {
        id: "Ram"
    },
    players: [
    {
        id: "ag.blom@student.avans.nl",
        name: "Alec Blom"
    }
    ],
    maxPlayers: 32,
    minPlayers: 2,
    state: "open",
},
{
    id: "590b56e02b13cf00114afd55",
    createdBy: {
        id: "ag.blom@student.avans.nl",
        name: "Alec Blom",
    },
    createdOn: "2017-05-04T16:29:20.102Z",
    gameTemplate: {
        id: "Shanghai"
    },
    players: [
    {
        id: "ag.blom@student.avans.nl",
        name: "Alec Blom"
    }
    ],
    maxPlayers: 32,
    minPlayers: 2,
    state: "open"
},
{
    id: "590b396d2b13cf00114afba2",
    createdBy: {
        id: "raa.guerand@student.avans.nl",
        name: "Roel Guerand",
    },
    createdOn: "2017-05-04T14:23:41.872Z",
    gameTemplate: {
        id: "Ram",
    },
    players: [
    {
        id: "raa.guerand@student.avans.nl",
        name: "Roel Guerand",
    }
    ],
    maxPlayers: 13,
    minPlayers: 12,
    state: "open"
},
{
    id: "590afd592b13cf00114afa80",
    createdBy: {
        id: "tme.vannimwegen@student.avans.nl",
        name: "Tom van Nimwegen",
    },
    createdOn: "2017-05-04T10:07:21.677Z",
    gameTemplate: {
    id: "Dragon"
    },
    players: [
    {
        id: "tme.vannimwegen@student.avans.nl",
        name: "Tom van Nimwegen",
    },
    {
        id: "raa.guerand@student.avans.nl",
        name: "Roel Guerand",
    }
    ],
    maxPlayers: 99,
    minPlayers: 3,
    state: "open",
}]