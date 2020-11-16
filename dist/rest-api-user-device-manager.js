"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestApitUserDeviceDatabaseFinder = void 0;
class RestApitUserDeviceDatabaseFinder {
    constructor(userDeviceManager) {
        this.userDeviceManager = userDeviceManager;
    }
    find(uuid) {
        return this.userDeviceManager.findOneEnabledUserByUuid(uuid);
    }
}
exports.RestApitUserDeviceDatabaseFinder = RestApitUserDeviceDatabaseFinder;
