function intellect()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://elyonsite1.intellectapps.net/Intellect/login.aspx?Logout=1");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxUsername' control.
  Aliases.browser.pageLogin2.formForm1.framePageurl.formForm1.textboxUsername.Click();
  //Sets the text 'ts' in the 'textboxUsername' text editor.
  Aliases.browser.pageLogin2.formForm1.framePageurl.formForm1.textboxUsername.SetText("ts");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageLogin2.formForm1.framePageurl.formForm1.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin2.formForm1.framePageurl.formForm1.passwordboxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'submitbuttonLogIn' button.
  Aliases.browser.pageLogin2.formForm1.framePageurl.formForm1.submitbuttonLogIn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Clicks the 'panelProficiencyTesting' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm1.panelProficiencyTesting.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Clicks the 'linkNewProficiencyTest' link.
  Aliases.browser.pageTop.frameApppageSidepanelcontents.linkNewProficiencyTest.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Selects the 'Bechara, Mira' item of the 'selectLinkto10201000078561' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078561.ClickItem("Bechara, Mira");
  //Clicks the 'textareaItem10201000079871' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textareaItem10201000079871.Click();
  //Enters 'anything' in the 'textareaItem10201000079871' object.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textareaItem10201000079871.Keys("anything");
  //Selects the 'Los Angeles' item of the 'selectLinkto10201000078541' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078541.ClickItem("Los Angeles");
  //Selects the 'Development' item of the 'selectLinkto10201000078551' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078551.ClickItem("Development");
  //Clicks the 'imageImages' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.linkChooseDate.imageImages.Click();
  //Clicks the 'link25' link.
  Aliases.browser.pageTop.frameCalendar.formForm1.link25.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageTop.frameApppageItemdetails2.formForm1.panel.Click();
  //Clicks the 'link26' link.
  Aliases.browser.pageTop.frameCalendar.formForm1.link26.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Clicks the 'textboxItem10201000078591' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078591.Click();
  //Sets the text 'anything' in the 'textboxItem10201000078591' text editor.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078591.SetText("anything");
  //Selects the 'Biology' item of the 'selectLinkto10201000078601' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078601.ClickItem("Biology");
  //Selects the 'Fish oil' item of the 'selectLinkto10201000078611' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078611.ClickItem("Fish oil");
  //Selects the 'Lactose' item of the 'selectLinkto10201000078621' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078621.ClickItem("Lactose");
  //Clicks the 'textboxItem10201000078631' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078631.Click();
  //Sets the text 'anything' in the 'textboxItem10201000078631' text editor.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078631.SetText("anything");
  //Clicks the 'textboxItem10201000078641' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078641.Click();
  //Sets the text 'anything' in the 'textboxItem10201000078641' text editor.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078641.SetText("anything");
  //Selects the 'A2LA' item of the 'selectLinkto10201000078651' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078651.ClickItem("A2LA");
  //Selects the 'AACC' item of the 'selectLinkto10201000078661' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078661.ClickItem("AACC");
  //Selects the 'AOAC PT Program' item of the 'selectLinkto10201000078671' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000078671.ClickItem("AOAC PT Program");
  //Selects the 'Yes' item of the 'selectLinkto10201000106331' combo box.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.selectLinkto10201000106331.ClickItem("Yes");
  //Clicks the 'textboxDisplayitem10201000078681' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxDisplayitem10201000078681.Click();
  //Sets the text '2' in the 'textboxDisplayitem10201000078681' text editor.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxDisplayitem10201000078681.SetText("2");
  //Clicks the 'textboxItem10201000078691' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078691.Click();
  //Sets the text 'pass' in the 'textboxItem10201000078691' text editor.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.textboxItem10201000078691.SetText("pass");
  //Clicks the 'buttonProceed' button.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.buttonProceed.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'buttonSubmitForReview' button.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.buttonSubmitForReview.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTop.textnodeClosure object equals 'Closure'.
  aqObject.CheckProperty(Aliases.browser.pageTop.textnodeClosure, "contentText", cmpEqual, "Closure");
  //Clicks the 'textnodeTestResults' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm13.textnodeTabcontainerHeader.textnodeTestResults.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTop.frameApppageItemdetails.formForm1.cellstatus object equals 'Pass'.
  aqObject.CheckProperty(Aliases.browser.pageTop.frameApppageItemdetails.formForm1.cellstatus, "contentText", cmpEqual, "Pass");
  //Clicks the 'buttonClose' button.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm13.buttonClose.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTop.Wait();
  //Clicks the 'formForm12' control.
  Aliases.browser.pageTop.frameApppageItemdetails.formForm12.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTop.frameApppageItemdetails.formForm12 object equals 'Your portion of this activity is completed for now. This activity has been passed on to someone else.'.
  aqObject.CheckProperty(Aliases.browser.pageTop.frameApppageItemdetails.formForm12, "contentText", cmpEqual, "Your portion of this activity is completed for now. This activity has been passed on to someone else.");
}