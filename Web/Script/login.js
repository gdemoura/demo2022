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