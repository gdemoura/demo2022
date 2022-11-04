function purchase()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'imageShowProductsInCategory' control.
  Aliases.browser.pageShop.sectionContent.articleFurniture.linkShowProductsInCategory.imageShowProductsInCategory.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageFurniture.Wait();
  //Clicks the 'imageBallChairWhiteJpg' control.
  Aliases.browser.pageFurniture.sectionContent.link.imageBallChairWhiteJpg.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageEeroAarnioBallChair1966.Wait();
  //Clicks the 'textnodeAddToCart' control.
  Aliases.browser.pageEeroAarnioBallChair1966.sectionContent.articleEeroAarnioBallChair1966.linkAddToCart.textnodeAddToCart.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageEeroAarnioBallChair1966.Wait();
  //Clicks the 'textnode' control.
  Aliases.browser.pageEeroAarnioBallChair1966.asideOffcanvasCart.linkCheckout.textnode.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageBillingaddress.Wait();
  //Clicks the 'buttonBillToThisAddress' button.
  Aliases.browser.pageBillingaddress.sectionContent.fieldsetSelectBillingAddressunde.buttonBillToThisAddress.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageShippingaddress.Wait();
  //Clicks the 'buttonShipToThisAddress' button.
  Aliases.browser.pageShippingaddress.sectionContent.fieldsetSelectShippingAddressund.buttonShipToThisAddress.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageShippingmethod.Wait();
  //Clicks the 'buttonNext' button.
  Aliases.browser.pageShippingmethod.sectionContent.buttonNext.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pagePaymentmethod.Wait();
  //Clicks the 'buttonNext' button.
  Aliases.browser.pagePaymentmethod.sectionContent.buttonNext.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageConfirm.Wait();
  //Sets the state of the 'checkboxIAgreeWithThe' checkbox to True.
  Aliases.browser.pageConfirm.sectionContent.formConfirmOrderForm.checkboxIAgreeWithThe.ClickChecked(true);
  //Clicks the 'buttonConfirm' button.
  Aliases.browser.pageConfirm.sectionContent.buttonConfirm.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageCompleted.sectionContent.textnodeYourOrderHasBeenReceived object equals 'Your order has been received'.
  //aqObject.CheckProperty(Aliases.browser.pageCompleted.sectionContent.textnodeYourOrderHasBeenReceived, "contentText", cmpEqual, "Your order has been received");
}