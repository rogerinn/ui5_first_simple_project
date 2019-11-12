sap.ui.define(["sap/m/Label", "sap/m/Select", "sap/ui/core/Item", "sap/m/MaskInput", "sap/m/DatePicker", "sap/ui/layout/form/SimpleForm",
		"sap/m/ObjectNumber"
	],
	function (Label, Select, Item,
		MaskInput, DatePicker, SimpleForm, ObjectNumber) {
		sap.ui.jsfragment("Testes.Testes.view.fragments.main.form", {
			createContent: function (oController) {
				var oForm = new SimpleForm({
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
							})]
						}),
						new Label({
							text: "Produto"
						}),
						new Select({
							items: [new Item({
								text: "Abap"
							})]
						}),
						new Label({
							text: "Quantidade"
						}),
						new MaskInput({
							placeholder: "Número de produtos vendidos",
							mask: "999999"
						}),
						new ObjectNumber({
							unit: "R$",
							textAlign: "End"
						}),
						new Label({
							text: "Data"
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