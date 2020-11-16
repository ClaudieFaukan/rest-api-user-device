import { UserDevice, UserDeviceManager } from 'f2-user-device';

import { RestApiUserDeviceFinder } from './request-handler'


export class RestApitUserDeviceDatabaseFinder implements RestApiUserDeviceFinder {

    constructor(readonly userDeviceManager:UserDeviceManager){}

    public find(uuid:string): Promise<UserDevice | null> {

        return this.userDeviceManager.findOneEnabledUserByUuid(uuid);
    }
}