"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDeviceHandler = void 0;
function getUserDeviceHandler(finder) {
    return async (req, _res, next) => {
        const uuid = req.headers['f2UserDevice'];
        let userDevice = null;
        let error;
        if (uuid) {
            try {
                userDevice = await finder.find(uuid);
            }
            catch (err) {
                error = err;
            }
        }
        req.userDevice = userDevice;
        next(error);
    };
}
exports.getUserDeviceHandler = getUserDeviceHandler;
