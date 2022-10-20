function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  OCR.Recognize(Aliases.browser.BrowserWindow).BlockByText("Shop", spLeftMost).Click();
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait();
  //Clicks the 'textboxYourName' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.Click();
  //Sets the text 'Gabe' in the 'textboxYourName' text editor.
  Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText("Gabe");
  //Clicks the 'formYourName' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.Click();
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
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait();
  //Clicks the 'panelContentWrapper' control.
  Aliases.browser.pageContactus.panelContentWrapper.Click();
}