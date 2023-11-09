const { wdi5 } = require("wdio-ui5-service");
const MainPage = require("../PageObjects/mainPage.page");
const ObjectPage = require("../PageObjects/ObjectPage.page");

describe("Testing: ", () => {
  let sPeak = "Manaslu",
    sExpID = "MANA15312",
    sNewExpID = "Test",
    sNewPeakName = "Test",
    sNewSeason = "SeasonTest";

  it("Test for data in the table", async () => {
    await MainPage.iClickGoButton();
    // await MainPage.iEnterPeakFilter(sPeak);
    await MainPage.iEnterSearchFilter(sExpID);
    await MainPage.iClickGoButton();
    await MainPage.iGetSearchTableEntry(sExpID);
  });

  it("Test for Detail Page Values", async () => {
    await MainPage.iNavigateObjectPage();
    await ObjectPage.iGetDetailPageTitle(sExpID);
    await ObjectPage.iCheckPeakNameDetailPage(sExpID, sPeak);
    await browser.back();
  });

  // it.skip("Delete the test expedition", async () => {
  //   await MainPage.iEnterSearchFilter(sNewExpID);
  //   await MainPage.iClearPeaKValue();
  //   await MainPage.iClickGoButton();
  //   await MainPage.iNavigateObjectPage();
  //   await MainPage.iDeleteNewExpedition();
  // });

  it("Create a new entry", async () => {
    await MainPage.iClickCreate();
    await ObjectPage.iAddExpID(sNewExpID);
    await ObjectPage.iClickCreateContiue();
    await ObjectPage.iEnterTestPeakName(sNewPeakName);
    await ObjectPage.iEnterYear("2023");
    await ObjectPage.iEnterHighpointYear();
    await ObjectPage.iEnterStartingYear();
    await ObjectPage.iClickDetailCreate();
    await browser.back();
    // await MainPage.iClearPeaKValue();
    await MainPage.iEnterPeakFilter(sNewPeakName);
    await MainPage.iEnterSearchFilter(sNewExpID);
    await MainPage.iClickGoButton();
    await MainPage.iGetSearchTableEntry1(sNewExpID);
  });

  it("Edit already added entry", async () => {
    await MainPage.iNavigateObjectPage();
    await ObjectPage.iClickEditButton();
    await ObjectPage.iAddSeasonValue(sNewSeason);
    await ObjectPage.iDraftSave();
    await browser.navigateTo("http://localhost:4004/expeditions/webapp/index.html");
    // await browser.waitUntil(async () => {
    //   const sUrl = await browser.getUrl();
    //   return (sUrl === "http://localhost:4004/expeditions/webapp/index.html");
    // });
    await MainPage.iClickGoButton();
    await MainPage.iEnterSearchFilter(sNewExpID);
    await MainPage.iClickGoButton();
    await MainPage.iCheckNewSeasonAdded(sNewSeason);
  });
});
