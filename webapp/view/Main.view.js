sap.ui.define(["sap/m/Button", "sap/m/Label", "sap/m/Input", "sap/m/Select", "sap/ui/core/Item", "sap/m/MaskInput", "sap/m/DatePicker",
		"sap/m/Table", "sap/m/ColumnListItem", "sap/m/StandardListItem", "sap/m/Text", "sap/m/Column"
	],
	function (Button,
		Label, Input, Select,
		Item, MaskInput, DatePicker, Table, ColumnListItem, StandardListItem, Text, Column) {
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
				var oForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout",
					title: "Suas vendas",
					editable: true,
					content: [
						sap.ui.jsfragment("my.own.frag", oController),
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
				var oTable = new Table({
					noDataText: "Nenhum dado disponível",
					items: [
						new ColumnListItem({
							type: "Detail",
							detailPress: [],
							cells: [
								new Text({
									text: "Frango assado"
								}),
								new Text({
									text: "Frango assado"
								}),
								new Text({
									text: "Frango assado"
								}),
								new Text({
									text: "Frango assado"
								}),
								new Text({
									text: "Frango assado"
								}),
								new Text({
									text: "Frango assado"
								})
							]
						}),
						new StandardListItem({
							title: "Vendas"
						})
					],
					columns: [
						new Column({
							header: [new Label({
								text: "Empresa"
							})]
						}),
						new Column({
							header: [new Label({
								text: "Produtos"
							})]
						}),
						new Column({
							header: [new Label({
								text: "Quantidade"
							})]
						}),
						new Column({
							header: [new Label({
								text: "Preço Unitário"
							})]
						}),
						new Column({
							header: [new Label({
								text: "Data da Venda"
							})]
						}),
						new Column({
							header: [new Label({
								text: "Preço Total"
							})]
						})
					]
				});
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
				var oPage = new sap.m.Page({
					title: "Cadastro de vendas",
					id: "page",
					content: [oForm, oTable],
					footer: [oFooter]
				});

				var app = new sap.m.App(this.createId("app"), {
					initialPage: "oPage"
				});
				app.addPage(oPage);
				return app;
			}

		});
	});