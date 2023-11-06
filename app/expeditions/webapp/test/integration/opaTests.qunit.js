sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'test/expeditions/test/integration/FirstJourney',
		'test/expeditions/test/integration/pages/ExpeditionsList',
		'test/expeditions/test/integration/pages/ExpeditionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ExpeditionsList, ExpeditionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('test/expeditions') + '/index.html'
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