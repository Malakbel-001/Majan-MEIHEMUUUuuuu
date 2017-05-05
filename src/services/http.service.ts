import { Injectable } from '@angular/core';

import { Room } from '../models/room';
import { ROOMS } from './mock.games';

@Injectable()
export class HttpService {
    getGames(): Room[]{
        return ROOMS;
    }
}