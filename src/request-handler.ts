import { RequestHandler, Request, RequestArg } from 'f2-rest-api';
import { UserDevice } from 'f2-user-device';


export interface RestApiUserDeviceFinder {
    
    find(uuid: string): Promise<UserDevice | null>;
}

export type UserDeviceRequest = Request & {userDevice: UserDevice | null}

export function getUserDeviceHandler(finder: RestApiUserDeviceFinder): RequestHandler {

    return async (req: RequestArg | UserDeviceRequest, _res, next) => {
        
        const uuid = req.headers['f2UserDevice'] as string | undefined;
        
        let userDevice: UserDevice | null = null;
        let error: Error | undefined;
        
        if(uuid) {

            try {
            
                userDevice = await finder.find( uuid );
            }
            catch(err) {
                error =err
            }
        }

        (req as UserDeviceRequest).userDevice = userDevice;
                    
        next(error);
    };
}