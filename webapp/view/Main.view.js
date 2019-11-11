sap.ui.jsview("Testes.Testes.view.Main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Main
	 */
	getControllerName: function () {
		return "Testes.Testes.controller.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Main
	 */
	createContent: function (oController) {
		var oLabel = new sap.m.Label({
			text: "teste",
			design: sap.m.LabelDesign.Bold,
			textAlign: sap.ui.core.TextAlign.Center,
			width: "100%"
		});

		var oForm = new sap.ui.layout.form.SimpleForm({
			layout: "ResponsiveGridLayout",
			title: "Suas vendas",
			editable: true,
			content: [
				new sap.m.Label({
					text: "Empresa"
				}),
				new sap.m.Input({
					placeholder: "Digite sua empresa"
				})
			]
		});

		var oPage = new sap.m.Page({
			title: "Cadastro de vendas",
			id: "page",
			content: [oLabel, oForm]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});