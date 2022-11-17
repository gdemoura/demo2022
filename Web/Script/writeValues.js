function WriteTextToFile()
{
  var sPath ="C:\Users\gabriel.demoura\OneDrive - SmartBear Software, Inc\Documents";

  // Creates a text file at the specified location
  aqFile.Create(sPath);

  // Opens the created file for writing
 // var myFile = aqFile.OpenTextFile(sPath, aqFile.faWrite, aqFile.ctUnicode);

  // Writes text to the file
  myFile.WriteLine(Project.Variables.Adress);
  myFile.WriteLine(Project.Variables.sqFeet);
  

  // Closes the file
  //myFile.Close();
}