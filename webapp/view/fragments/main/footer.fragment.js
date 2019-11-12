sap.ui.define(["sap/m/Button", "sap/m/Label"], function (Button, Label) {
	sap.ui.jsfragment("Testes.Testes.view.fragments.main.footer", {
		createContent: function (oController) {
			var oFooter = new sap.m.Bar({
				contentLeft: [
					new Button({
						text: "Editar Venda",
						type: "Up"
					})
				],
				contentRight: [
					new Button({
						text: "Salvar Venda",
						type: "Accept",
						press: [oController.onApproveDialog]
					})
				]
			});
			return oFooter;
		}
	});
});