function calculator()
{
  //Runs the "WindowsCalculator" tested application.
  TestedApps.WindowsCalculator.Run();
  //Clicks the 'Eight' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Number_pad.Eight.Click();
  //Clicks the 'Five' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Number_pad.Five.Click();
  //Clicks the 'Multiply_by' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Standard_operators.Multiply_by.Click();
  //Clicks the 'Nine2' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Number_pad.Nine2.Click();
  //Clicks the 'Four' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Number_pad.Four.Click();
  //Clicks the 'Six' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Number_pad.Six.Click();
  //Clicks the 'Equals' object.
  Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Standard_operators.Equals.Click();
  //Checks whether the 'Text' property of the Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Display_is_0.TextContainer.NormalOutput object equals '80,410'.
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculator.LandmarkTarget.Display_is_0.TextContainer.NormalOutput, "Text", cmpEqual, "80,410");
}