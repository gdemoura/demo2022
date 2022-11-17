function launchExcel()
{
  //Runs the "EXCEL" tested application.
  TestedApps.EXCEL.Run(1, true);
  //Selects the 'zillowResults.xlsx' item of the 'listRecommended' select control.
  //Aliases.EXCEL.wndExcel.FullpageUIHost.pane.paneBackstageView.client.paneHome.groupingHome.client.groupingRecommendedForYou.listRecommended.ClickItem("zillowResults.xlsx");
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.EXCEL.wndExcel.FullpageUIHost.pane.paneBackstageView.client.paneHome.groupingHome.client.groupingRecommendedForYou.listRecommended.client.client.listitemZillowresultsXlsx.Click();
}