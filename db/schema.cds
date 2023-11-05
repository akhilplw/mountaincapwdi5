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
        first_ascent_year          : Date;
        first_ascent_country       : String;
        first_ascent_expedition_id : String;
}
