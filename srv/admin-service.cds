using { test.mountain as mountain } from '../db/schema';

service AdminService @(requires: 'any') {
    entity Expeditions as projection on mountain.Expeditions;
    // entity Peaks as projection on mountain.Peaks;

}