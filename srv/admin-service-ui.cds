using AdminService from './admin-service';
annotate AdminService.Expeditions with {
    expedition_id @(
        UI.Hidden
    );
    peak_name @title : 'Peak Name';
    year @title : 'Year';
    season @title : 'Season';
    basecamp_date @title : 'Basecamp Date';
    highpoint_date @title : 'Highpoint Date'
};

annotate AdminService.Expeditions with @(
	UI: {
		// HeaderInfo: {
		// 	TypeName: 'Risk',
		// 	TypeNamePlural: 'Risks',
		// 	Title          : {
        //         $Type : 'UI.DataField',
        //         Value : title
        //     },
		// 	Description : {
		// 		$Type: 'UI.DataField',
		// 		Value: descr
		// 	}
		// },
		// SelectionFields: [Peak Name],
		LineItem: [
			{Value: peak_name},
			{Value: year},
			// {
			// 	Value: prio,
			// 	Criticality: criticality
			// },
			// {
			// 	Value: impact,
			// 	Criticality: criticality
			// }
		],
		// Facets: [
		// 	{$Type: 'UI.ReferenceFacet', Label: 'Main', Target: '@UI.FieldGroup#Main'}
		// ],
		// FieldGroup#Main: {
		// 	Data: [
		// 		{Value: miti_ID},
		// 		{
		// 			Value: prio,
		// 			Criticality: criticality
		// 		},
		// 		{
		// 			Value: impact,
		// 			Criticality: criticality
		// 		}
		// 	]
		// }
	},
) {

};
