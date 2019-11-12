sap.ui.define(["sap/m/Label", "sap/m/Select", "sap/ui/core/Item", "sap/m/MaskInput", "sap/m/DatePicker"], function (Label, Select, Item,
	MaskInput,DatePicker) {
	sap.ui.jsfragment("Testes.Testes.view.fragments.main.form", {
		createContent: function (oController) {
			var oForm = new sap.ui.layout.form.SimpleForm({
				layout: "ResponsiveGridLayout",
				title: "Suas vendas",
				editable: true,
				content: [
					new Label({
						text: "Empresa"
					}),
					new Select({
						items: [new Item({
							text: "Abap"
						}), new Item({
							text: "Teste"
						})]
					}),
					new Label({
						text: "Produto"
					}),
					new Select({
						items: [new Item({
							text: "Abap"
						}), new Item({
							text: "Teste"
						})]
					}),
					new Label({
						text: "Quantidade"
					}),
					new MaskInput({
						placeholder: "Número de produtos vendidos",
						mask: "99999999999999"
					}),
					new Label({
						text: "Preço Unitário"
					}),
					new MaskInput({
						placeholder: "Por produto vendido",
						mask: "99999999999999"
					}),
					new Label({
						text: "Preço Unitário"
					}),
					new DatePicker({
						placeholder: "Insira a data",
						change: [oController.handleChange]
					})
				]
			});
			return oForm;
		}
	});
});