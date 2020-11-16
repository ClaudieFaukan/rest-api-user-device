import { OSPlatform, UserDevice } from 'f2-user-device';
import {UserDeviceRequest} from '../src/request-handler';

/**
 * REQUETES
 */
export const req: Partial<UserDeviceRequest> = {
    headers:{
        "f2UserDevice": "2381558d-4f0f-4608-8add-29bfd7990df5"
    }
}
export const reqEmpty: Partial<UserDeviceRequest> = {
    headers:{
        "empty": "other"
    }
}
export const reqFalseUuid: Partial<UserDeviceRequest> = {
    headers:{
        "f2UserDevice": "4f0f-4608-8add"
    }
}
export const reqErrorFinder: Partial<UserDeviceRequest> = {
    headers:{
        "f2UserDevice": "fatalError"
    }
}
/**
 * BDD avec 1 objet device
 */
export const deviceBdd:UserDevice = {
                    enabled: true,
                    id: 123,
                    token:"imTOKEN",
                    userId:10,
                    agent:"Petrel",
                    agentVersion:"1.0.0",
                    app:"FakeR2T",
                    appVersion:"2.0.1",
                    hardwareModel:"intel CP7",
                    mac:"5E:FF:56:A2:AF:15",
                    platform:OSPlatform.Android,
                    release: null,
                    uuid: "2381558d-4f0f-4608-8add-29bfd7990df5",
                    version:"dev"
                }
/**
 * Finder pointant sur notre deviceBdd
 */
export class RestApiUserDeviceFinder {

    find(uuid:string):Promise <UserDevice | null> {

        return new Promise((resolve,reject)=>{

            if(uuid === "fatalError"){

                reject("fatalError");
            }
            if(deviceBdd.uuid === uuid){

                resolve(deviceBdd);
            }
            else{
                resolve(null)
            }
        })
    }
}