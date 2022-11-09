function contactUs()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  //Runs a keyword test.
  KeywordTests.login.Run();
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  Project.Variables.excellData23.Reset();
  var RecordIdx;
  for(RecordIdx = 1; RecordIdx <= 3; RecordIdx++)
  {
    //Clicks the 'linkContactUs' link.
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageContactus.Wait();
    //Sets the text KeywordTests.contactUs.Variables.excellData2("Name") in the 'Name' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.Name.SetText(Project.Variables.excellData23.Value("Name"));
    //Sets the text KeywordTests.contactUs.Variables.excellData2("Email") in the 'emailinputYourEmail' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText(Project.Variables.excellData23.Value("Email"));
    //Enters KeywordTests.contactUs.Variables.excellData2("Enquiry") in the 'textareaEnquiry' object.
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.excellData23.Value("Enquiry"));
    //Clicks the 'buttonSendEmail' button.
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    //Delays the test execution for the specified time period.
    Delay(800);
    //Checks whether the 'contentText' property of the Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen object equals 'Your enquiry has been successfully sent to the store owner.'.
    aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "contentText", cmpEqual, "Your enquiry has been successfully sent to the store owner.");
    Project.Variables.excellData23.Next();
  }
}