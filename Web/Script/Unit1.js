function contactUsFlow()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait();
  //Clicks the 'textareaEnquiry' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Click();
  //Enters 'Is my order ready for pickup?' in the 'textareaEnquiry' object.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys("Is my order ready for pickup?");
  //Clicks the 'buttonSendEmail' button.
  Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(700);
  //Checks whether the 'contentText' property of the Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen object equals 'Your enquiry has been successfully sent to the store owner.'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "contentText", cmpEqual, "Your enquiry has been successfully sent to the store owner.");
}

function close()
{
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
  //Delays the test execution for the specified time period.
  Delay(500);
}

function login()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeLogIn' control.
  Aliases.browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Sets the text 'gabedemo' in the 'textboxUsernameoremail' text editor.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("gabedemo");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.header.navUsd.linkGabedemo.textnodeGabedemo object equals 'gabedemo'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.navUsd.linkGabedemo.textnodeGabedemo, "contentText", cmpEqual, "gabedemo");
}