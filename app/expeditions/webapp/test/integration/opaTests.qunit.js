sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mountaineering/expeditions/test/integration/FirstJourney',
		'mountaineering/expeditions/test/integration/pages/ExpeditionsList',
		'mountaineering/expeditions/test/integration/pages/ExpeditionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ExpeditionsList, ExpeditionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mountaineering/expeditions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheExpeditionsList: ExpeditionsList,
					onTheExpeditionsObjectPage: ExpeditionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);