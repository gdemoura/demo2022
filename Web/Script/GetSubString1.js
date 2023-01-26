function GetSubString1()
{
  var first = Aliases.browser.pageBallChair.sectionContent.articleBallChair.asideBallChair.textnode259900ExclTax.contentText;
  var firstPrice = aqString.SubString(first, 0, 9);
  Project.Variables.firstPrice = firstPrice;
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn.Click();
  let page = browser.pageLogin;
  page.Wait();
  let textbox = page.sectionContent;
  let textbox2 = textbox.textboxUsernameoremail;
  textbox2.Click();
  textbox2.SetText("gabedemo");
  let passwordBox = textbox.Password;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  textbox.buttonLogIn.ClickButton();
}

function EventControl1_OnStartTest(Sender)
{
  
}