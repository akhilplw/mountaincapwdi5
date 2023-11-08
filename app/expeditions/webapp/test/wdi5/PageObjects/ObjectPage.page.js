module.exports = {
  iGetDetailPageTitle: async (sExpID) => {
    const sTitle = await browser
      .asControl({
        selector: {
          controlType: "sap.m.Title",
          viewName: "sap.fe.templates.ObjectPage.ObjectPage",
          viewId: "mountaineering.expeditions::ExpeditionsObjectPage",
          bindingPath: {
            path: "",
            propertyPath: "ID",
          },
        },
      })
      .getText();

    expect(sTitle).toEqual(sExpID);
  },

  iCheckPeakNameDetailPage: async (aPeakName) => {
    const sPeakName = await browser
      .asControl({
        selector: {
          controlType: "sap.m.Label",
          viewName: "sap.fe.templates.ObjectPage.ObjectPage",
          viewId: "mountaineering.expeditions::ExpeditionsObjectPage",
          bindingPath: {
            path: `/Expeditions(ID=${aPeakName},IsActiveEntity=true)`,
            propertyPath: "peak_name",
          },
        },
      })
      .getText();
    expect(sPeakName).toEqual(aPeakName);
  },
  iAddExpID: async (sExpID) => {
    await browser
      .asControl({
        selector: {
          id: "CreateDialog::Expeditions::ID-inner",
          searchOpenDialogs: true,
        },
      })
      .enterText(sExpID);
  },

  iClickCreateContiue: async () => {
    await browser
      .asControl({
        selector: {
          controlType: "sap.m.Button",
          viewName: "sap.fe.templates.ObjectPage.ObjectPage",
          viewId: "mountaineering.expeditions::ExpeditionsObjectPage",
          properties: {
            text: "Continue",
          },
          searchOpenDialogs: true,
        },
      })
      .press();
  },

  iEnterTestPeakName: async (sNewPeakName) => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::FormContainer::FieldGroup::Main::FormElement::DataField::peak_name::Field-edit",
        },
      })
      .enterText(sNewPeakName);
  },

  iEnterYear: async (sYear) => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::FormContainer::FieldGroup::Main::FormElement::DataField::year::Field-edit",
        },
      })
      .enterText(sYear);
  },

  iEnterHighpointYear: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::FormContainer::FieldGroup::Main::FormElement::DataField::highpoint_date::Field-edit",
        },
      })
      .enterText("20231002");
  },

  iEnterStartingYear: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::FormContainer::FieldGroup::Main::FormElement::DataField::basecamp_date::Field-edit",
        },
      })
      .enterText("20231102");
  },

  iClickDetailCreate: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::FooterBar::StandardAction::Save",
        },
      })
      .press();
  },

  iDeleteNewExpedition: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::StandardAction::Delete",
        },
      })
      .press();
  },

  iClickEditButton: async () => {
    await browser
      .asControl({
        selector: {
          id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::StandardAction::Edit",
        },
      })
      .press();
  },

  iAddSeasonValue: async(sText) => {
    await browser.asControl({
        selector: {
            id: "mountaineering.expeditions::ExpeditionsObjectPage--fe::FormContainer::FieldGroup::Main::FormElement::DataField::season::Field-edit"
    }}).enterText(sText);
  }
};
