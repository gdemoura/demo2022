function word()
{
 Aliases.WINWORD.formWord.panel.pane.pane.client.listFile.listitemOpen.Click();
}

function delete()
{
  while(Aliases.Orders.MainForm.OrdersView.wItemCount != 0)
  {
    //Clicks the 0 subitem of the Aliases.Orders.MainForm.OrdersView.listitem item of the 'OrdersView' list view.
    //Aliases.Orders.MainForm.OrdersView.ClickItem(Aliases.Orders.MainForm.OrdersView.listitem);
    //Clicks the 'listitem' object.
    Aliases.Orders.MainForm.OrdersView.listitem.Click(44, 3);
    //Clicks the 6 item of the 'ToolBar' toolbar.
    Aliases.Orders.MainForm.ToolBar.ClickItem(6, false);
    //Clicks the 'btnYes' button.
    Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  }
}