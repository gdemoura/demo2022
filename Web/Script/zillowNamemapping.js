function refreshNamemapping()
{
  // Browsers.Item(btChrome).Run("https://www.zillow.com/homedetails/*");

  var pnlProperty = Aliases.browser.pageSanFranciscoCaRealEstateSanF2.Price;

  // Do something that updates the web page and the pnlSpecialOffers object
  // ...

  // Force a search for the pnlSpecialOffers object
  pnlProperty.RefreshMappingInfo();
  // You can also force a search for all child mapped objects of pageExample
  // Aliases.browser.pageExample.RefreshMappingInfo();

}