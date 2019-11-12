sap.ui.define(["sap/m/Page", "sap/m/App"],
	function (Page, App) {
		sap.ui.jsview("Testes.Testes.view.Main", {
			getControllerName: function () {
				return "Testes.Testes.controller.Main";
			},
			createContent: function (oController) {
				var oForm = sap.ui.jsfragment("Testes.Testes.view.fragments.main.form", oController);
				var oTable = sap.ui.jsfragment("Testes.Testes.view.fragments.main.table", oController);
				var oFooter = sap.ui.jsfragment("Testes.Testes.view.fragments.main.footer", oController);
				var oPage = new Page({
					title: "Cadastro de vendas",
					id: "page",
					content: [oForm, oTable],
					footer: [oFooter]
				});
				var app = new App(this.createId("app"), {
					initialPage: "oPage"
				});
				app.addPage(oPage);
				return app;
			}
		});
	});