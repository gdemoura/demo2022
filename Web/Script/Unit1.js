function sendingData()
{
  // Get the sheet of the Excel file
  var excelFile = Excel.Open("C:\\Users\\gabriel.demoura\\OneDrive - SmartBear Software, Inc\\Documents\\zillowResults.xlsx");
  var excelSheet = excelFile.SheetByTitle("Sheet1");
  
  // Write the obtained data into a new row of the file
  var rowIndex = excelSheet.RowCount + 1;
  excelSheet.Cell("A", rowIndex).Value = Project.Variables.Adress;
  excelSheet.Cell(2, rowIndex).Value = Project.Variables.sqFeet;
  
  // Save the file to apply the changes
  excelFile.Save();
}
