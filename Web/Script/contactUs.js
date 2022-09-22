function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/contactus");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'Name' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.Name.Click();
  //Sets the text 'Gabe' in the 'Name' text editor.
  Aliases.browser.pageContactus.sectionContent.formYourName.Name.SetText("Gabe");
  //Clicks the 'emailinputYourEmail' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.Click();
  //Sets the text 'g@smrt.com' in the 'emailinputYourEmail' text editor.
  Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText("g@smrt.com");
  //Clicks the 'textareaEnquiry' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Click();
  //Enters 'Where is my order?' in the 'textareaEnquiry' object.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys("Where is my order?");
  //Clicks the 'buttonSendEmail' button.
  Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
}