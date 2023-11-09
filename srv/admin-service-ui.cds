using AdminService from './admin-service';


annotate AdminService.Expeditions with {
    ID @title: 'Expedition ID';
    peak_id               @(UI.Hidden);
    peak_name             @title: 'Peak Name';
    season @title:'Season';
    year     @title: 'Year';
    highpoint_date @title : 'Highpoint Date';
    basecamp_date @title : 'Basecamp Date';
    highpoint_metres @title: 'Highpoint(m)';
    members @title : 'No. of Members';
    trekking_agency @title: 'Name of Trekking Agency'

    // peak_alternative_name @title: 'Peak Alternative Name';
    // height_metres         @title: 'Height(m)';
    // climbing_status       @title: 'Climbing Status';
    // first_ascent_country  @title: 'First Ascent Country';
    // first_ascent          @(UI.Hidden);
};

annotate AdminService.Expeditions with @(UI: {
    LineItem        : [
        {
            Value                 : ID,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : peak_name,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : season,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : year,
            ![@HTML5.CssDefaults] : {width: '5rem'}
        },
        {
            Value                 : basecamp_date,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : highpoint_date,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                :  highpoint_metres,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : members,
            ![@HTML5.CssDefaults] : {width: '10rem'}
        },
        {
            Value                 : trekking_agency,
            // ![@HTML5.CssDefaults] : {width: '10rem'}
        }


    ],
    SelectionFields : [peak_name],
    HeaderInfo      : {
        TypeName      : 'Expedition ID',
        TypeNamePlural: '',
        Title         : {
            $Type: 'UI.DataField',
            Value: ID
        },
        Description   : {
            $Type: 'UI.DataField',
            Value: peak_name
        }
    },
//  id,peak_id,peak_name,year,season,basecamp_date,highpoint_date,termination_date,termination_reason,highpoint_metres,members,member_deaths,hired_staff,hired_staff_deaths,oxygen_used,trekking_agency
    Facets          : [{
        $Type : 'UI.ReferenceFacet',
        Label : 'Main Details',
        Target: '@UI.FieldGroup#Main'
    }],
    // basecamp_date,highpoint_date,termination_date,termination_reason, ,oxygen_used,trekking_agency
    FieldGroup #Main: {Data: [
         {
            Value                 : peak_name,
        },
        {
            Value                 : year,
        },
        {
            Value                 : season,
        },
        {
            Value                 : basecamp_date,
        },
        {
            Value                 : highpoint_date,
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
