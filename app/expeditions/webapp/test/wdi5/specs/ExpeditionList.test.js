const { wdi5 } = require("wdio-ui5-service")

describe("samples", () => {
    // it("Started Testing", () => {
    //     const logger = wdi5.getLogger()
    //     logger.log("Started Testing")
    // })

    it("Test for data in the table", async () => {
        await browser.asControl({
            selector: {
                id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions-btnSearch"
            }
        }).press();

        await browser.asControl({
            selector: {
                id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions::FilterField::peak_name-inner",
            }
        }).enterText("Manaslu");

        await browser.asControl({
            selector: {
                id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions::BasicSearchField-inner",
            }
        }).enterText("MANA15312");

        await browser.asControl({
            selector: {
                id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions-btnSearch"
            }
        }).press();
        const text = await browser.asControl({
            selector: {
                controlType: "sap.m.Text",
                viewName: "sap.fe.templates.ListReport.ListReport",
                viewId: "mountaineering.expeditions::ExpeditionsList",
                bindingPath: {
                    path: "/Expeditions(ID='MANA15312',IsActiveEntity=true)",
                    propertyPath: "ID"
                }
            }
        }).getText();
        expect(text).toEqual("MANA15312");

    })

    it("Check the values in the Detail Page", async () => {
        await browser.asControl({
            selector: {
                controlType: "sap.m.ColumnListItem",
                viewName: "sap.fe.templates.ListReport.ListReport",
                viewId: "mountaineering.expeditions::ExpeditionsList",
                bindingPath: {
                    value: "navigatedRow"
                }
            }
        }).press();

        const sTitle = await browser.asControl({
            selector: {
                controlType: "sap.m.Title",
                viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                viewId: "mountaineering.expeditions::ExpeditionsObjectPage",
                bindingPath: {
                    path: "/Expeditions(ID='MANA15312',IsActiveEntity=true)",
                    propertyPath: "ID"
                }
            }
        }).getText();

        expect(sTitle).toEqual("MANA15312");

        const sPeakName = await browser.asControl({
            selector: {
                controlType: "sap.m.Label",
                viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                viewId: "mountaineering.expeditions::ExpeditionsObjectPage",
                bindingPath: {
                    path: "/Expeditions(ID='MANA15312',IsActiveEntity=true)",
                    propertyPath: "peak_name"
                }
            }
        }).getText();
        expect(sPeakName).toEqual('Manaslu');
    });

    it("Create a new entry", async() => {
        
    })


})