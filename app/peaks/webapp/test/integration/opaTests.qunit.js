sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'test/peaks/test/integration/FirstJourney',
		'test/peaks/test/integration/pages/PeaksList',
		'test/peaks/test/integration/pages/PeaksObjectPage'
    ],
    function(JourneyRunner, opaJourney, PeaksList, PeaksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('test/peaks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePeaksList: PeaksList,
					onThePeaksObjectPage: PeaksObjectPage
                }
            },
            opaJourney.run
        );
    }
);