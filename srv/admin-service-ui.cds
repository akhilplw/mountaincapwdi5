using AdminService from './admin-service';


annotate AdminService.Peaks with {
    peak_id               @(UI.Hidden);
    peak_name             @title: 'Peak Name';
    peak_alternative_name @title: 'Peak Alternative Name';
    height_metres         @title: 'Height(m)';
    climbing_status       @title: 'Climbing Status';
    first_ascent_year     @title: 'First Ascent Year';
    first_ascent_country  @title: 'First Ascent Country';
    first_ascent          @(UI.Hidden);
};

annotate AdminService.Peaks with @(UI: {
    LineItem        : [
        {
            Value                 : peak_name,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : peak_alternative_name,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : height_metres,
            ![@HTML5.CssDefaults] : {width: '5rem'}
        },
        {
            Value                 : climbing_status,
            ![@HTML5.CssDefaults] : {width: '7rem'}
        },
        {
            Value                 : first_ascent_year,
            ![@HTML5.CssDefaults] : {width: '4rem'}
        },
        {
            Value                 : first_ascent_country,
            ![@HTML5.CssDefaults] : {width: '6rem'}
        }
    ],
    SelectionFields : [peak_name],
    HeaderInfo      : {
        TypeName      : 'Peak',
        TypeNamePlural: 'Peaks',
        Title         : {
            $Type: 'UI.DataField',
            Value: peak_name
        },
        Description   : {
            $Type: 'UI.DataField',
            Value: peak_alternative_name
        }
    },
    Facets          : [{
        $Type : 'UI.ReferenceFacet',
        Label : 'Main Details',
        Target: '@UI.FieldGroup#Main'
    }],
    // basecamp_date,highpoint_date,termination_date,termination_reason, ,oxygen_used,trekking_agency
    FieldGroup #Main: {Data: [
        {
            Value                 : height_metres,
        },
        {
            Value                 : climbing_status,
        },
        {
            Value                 : first_ascent_year,
        },
        {
            Value                 : first_ascent_country,
        }
    ]}
});


// annotate AdminService.Expeditions with {
//     expedition_id @(
//         UI.Hidden
//     );
//     peak_name @title : 'Peak Name';
//     year @title : 'Year';
//     season @title : 'Season';
//     basecamp_date @title : 'Basecamp Date';
//     highpoint_date @title : 'Highpoint Date';
//     termination_reason @title : 'Termination Reason';
//     oxygen_used @title : 'Oxygen Used';
//     trekking_agency @title : 'Trekking \n Agency';
// };

// // expedition_id,peak_id,peak_name,year,season,basecamp_date,highpoint_date,termination_date,termination_reason,highpoint_metres,members,member_deaths,hired_staff,hired_staff_deaths,oxygen_used,trekking_agency

// annotate AdminService.Expeditions with @(
// 	UI: {
// 		LineItem: [
// 			{Value: peak_name,
// 			![@HTML5.CssDefaults] : {width : '10rem'}},
// 			{Value: year,
// 			![@HTML5.CssDefaults] : {width : '4rem'}},
// 			{Value: season, ![@HTML5.CssDefaults] : {width : '4rem'}},
// 			{Value: basecamp_date},
// 			{Value: highpoint_date},
// 			{Value: termination_reason, ![@HTML5.CssDefaults] : {width : '15rem'}},
// 			{Value: oxygen_used, ![@HTML5.CssDefaults] : {width : '4rem'}},
// 			{Value: trekking_agency, ![@HTML5.CssDefaults] : {width : '5rem'}},
// 		],
// 		HeaderInfo: {
// 			TypeName: 'Expedition',
// 			TypeNamePlural: 'Expeditions',
// 			Title          : {
//                 $Type : 'UI.DataField',
//                 Value : peak_name
//             },
// 			Description : {
// 				$Type: 'UI.DataField',
// 				Value: peak_name
// 			}
// 		},
// 		SelectionFields: [peak_name],
// 		Facets: [
// 			{$Type: 'UI.ReferenceFacet', Label: 'Main', Target: '@UI.FieldGroup#Main1'}
// 		],
// 		FieldGroup#Main1: {
// 			Data: [
// 				{Value: expedition_id},
// 				// {
// 				// 	Value: prio,
// 				// 	Criticality: criticality
// 				// },
// 				// {
// 				// 	Value: impact,
// 				// 	Criticality: criticality
// 				// }
// 			]
// 		}
// 	},
// ) {

// };
