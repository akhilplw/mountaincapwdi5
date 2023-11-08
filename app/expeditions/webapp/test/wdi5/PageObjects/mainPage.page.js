module.exports = {
  iClickGoButton: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions-btnSearch",
        },
      })
      .press();
  },

  iEnterPeakFilter: async (sText) => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions::FilterField::peak_name",
        },
      })
      .enterText(sText);
  },

  iEnterSearchFilter: async (sExpID) => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions::BasicSearchField-inner",
        },
      })
      .enterText(sExpID);
  },
  iGetSearchTableEntry: async (sText) => {
    const text = await browser
      .asControl({
        selector: {
          controlType: "sap.m.Text",
          viewName: "sap.fe.templates.ListReport.ListReport",
          viewId: "mountaineering.expeditions::ExpeditionsList",
          bindingPath: {
            path: `/Expeditions(ID='MANA15312',IsActiveEntity=true)`,
            propertyPath: "ID",
          },
        },
      })
      .getText();
    expect(text).toEqual(sText);
  },
  iGetSearchTableEntry1: async (sText) => {
    const text = await browser
      .asControl({
        selector: {
          controlType: "sap.m.Text",
          viewName: "sap.fe.templates.ListReport.ListReport",
          viewId: "mountaineering.expeditions::ExpeditionsList",
          bindingPath: {
            path: `/Expeditions(ID='Test',IsActiveEntity=true)`,
            propertyPath: "ID",
          },
        },
      })
      .getText();
    expect(text).toEqual(sText);
  },
  
  iNavigateObjectPage: async () => {
    await browser
      .asControl({
        selector: {
          controlType: "sap.m.ColumnListItem",
          viewName: "sap.fe.templates.ListReport.ListReport",
          viewId: "mountaineering.expeditions::ExpeditionsList",
          bindingPath: {
            value: "navigatedRow",
          },
        },
      })
      .press();
  },

  iClickCreate: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsList--fe::table::Expeditions::LineItem::StandardAction::Create",
        },
      })
      .press();
  },

  iClearPeaKValue: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsList--fe::FilterBar::Expeditions::FilterField::peak_name",
        },
      })
      .enterText("");
  },
};
