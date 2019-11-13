function initModel() {
	var sUrl = "/HANA_SERVICE/vendas_pkg/servico.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}