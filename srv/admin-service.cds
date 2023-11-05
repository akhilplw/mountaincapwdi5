using { test.mountain as mountain } from '../db/schema';

service AdminService @(requires: 'any') {
    entity Peaks as projection on mountain.Peaks;
    entity Expeditions as projection on mountain.Expeditions;
}