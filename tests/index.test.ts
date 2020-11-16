import {expect} from 'chai'

import {req,reqEmpty,reqErrorFinder,reqFalseUuid,deviceBdd,RestApiUserDeviceFinder} from './data';
import {getUserDeviceHandler, UserDeviceRequest} from '../src/request-handler';


describe ( "RequestHandler testing ", () => {

    const deviceFinder = new RestApiUserDeviceFinder;
    const handler = getUserDeviceHandler(deviceFinder);
    
    it ( "find uuid ok", (done) => { 

        handler(req as UserDeviceRequest, null as any, (error?: any) => {

                expect(error).to.eq(undefined);
                expect(req.userDevice).to.eq(deviceBdd);

                done();
        });
    });

    it ( "uuid is not in req.header", (done) => { 

        handler(reqEmpty as UserDeviceRequest, null as any, (error?: any) => {

                expect(error).to.eq(undefined);
                expect(reqEmpty.userDevice).to.eq(null);

                done();
        });
    });

    it ( "uuid isn't bdd", (done) => { 

        handler(reqFalseUuid as UserDeviceRequest, null as any, (error?: any) => {

                expect(error).to.eq(undefined);
                expect(reqFalseUuid.userDevice).to.eq(null); 

                done();
        });
    });

    it ( "error", (done) => { 
        
        handler(reqErrorFinder as UserDeviceRequest, null as any, (error?: any) => {

                expect(error).to.eq("fatalError");  

                done();
        });
    });
});    