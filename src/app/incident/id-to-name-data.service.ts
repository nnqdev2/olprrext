import { Injectable } from '@angular/core';
@Injectable()
export class IdToNameDataService {
    private idToName = [{'reportedBy': 'Reported By'}, {'reportedByPhone': 'Reported By Phone'}
                        , {'reportedByEmail': 'Reported By Email'}, {'releaseType': 'Site Type'}
                        , {'siteName': 'Site Name'}, {'siteCounty': 'Site County'}
                        , {'streetNbr': 'Street Nbr'}, {'streetQuad': 'Street Quad'}];
    idToNameMap = new Map<string, string>();
    constructor() {
        this.idToNameMap.set('reportedBy', 'Reported By');
        this.idToNameMap.set('reportedByPhone', 'Reported By Phone');
        this.idToNameMap.set('reportedByEmail', 'Reported By Email');
        this.idToNameMap.set('releaseType', 'Site Type');
        this.idToNameMap.set('siteName', 'Site Name');
        this.idToNameMap.set('siteCounty', 'Site County');
        this.idToNameMap.set('streetNbr', 'Street Nbr');
        this.idToNameMap.set('streetQuad', 'Street Quad');
    }
    // function reverse(s: string): string;
    getIdToNameMap():  Map<string, string> {
        return this.idToNameMap;
    }
    getName(id: string): string {
        return this.idToNameMap.get(id);
    }

// streetName is required and must be valid.
// streetType is required and must be valid.
// siteCity is required and must be valid.
// siteZipcode is required and must be valid.
// company is required and must be valid.
// discoveryDate is required and must be valid.
// confirmationCode is required and must be valid.
// discoveryCode is required and must be valid.
// causeCode is required and must be valid.
// sourceId is required and must be valid.
// rpFirstName is required and must be valid.
// rpLastName is required and must be valid.
// rpOrganization is required and must be valid.
// rpAddress is required and must be valid.
// rpCity is required and must be valid.
// rpState is required and must be valid.
// rpZipcode is required and must be valid.
// rpPhone is required and must be valid.
// icFirstName is required and must be valid.
// icLastName is required and must be valid.
// icOrganization is required and must be valid.
// icCity is required and must be valid.
// icState is required and must be valid.
// icZipcode is required and must be valid.
// icPhone is required and must be valid.

}
