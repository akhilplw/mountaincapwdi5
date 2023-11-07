using { test.mountain as mountain } from '../db/schema';

service AdminService @(requires: 'any') {
    // @odata.draft.enabled:true
    entity Peaks as projection on mountain.Peaks;
    @odata.draft.enabled:true
    entity Expeditions as projection on mountain.Expeditions;
    
    

}