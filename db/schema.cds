using {
    managed,
    sap
} from '@sap/cds/common';

namespace test.mountain;

entity Peaks {
    key peak_id                    : String;
        peak_name                  : String;
        peak_alternative_name      : String;
        height_metres              : Integer;
        climbing_status            : String;
        first_ascent_year          : Int32;
        first_ascent_country       : String;
        first_ascent_expedition_id : String;
}

entity Expeditions {
    key expedition_id: String;
    peak_id: String;
    peak_name: String;
    year: Integer;
    season: String;
    basecamp_date: Date;
    highpoint_date: Date;
    termination_date: Date;
    termination_reason: String;
    highpoint_metres: Int32;
    members: String;
    member_deaths: String;
    hired_staff: String;
    hired_staff_deaths: String;
    oxygen_used: String;
    trekking_agency: String;
}
