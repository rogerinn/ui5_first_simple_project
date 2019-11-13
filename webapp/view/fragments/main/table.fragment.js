sap.ui.define(["sap/m/Table", "sap/m/ColumnListItem", "sap/m/Text", "sap/m/Label", "sap/m/StandardListItem", "sap/m/Column"], function (
	Table, ColumnListItem, Text, Label,
	StandardListItem, Column) {
	sap.ui.jsfragment("Testes.Testes.view.fragments.main.table", {
		createContent: function (oController) {
			var oTable = new Table({
				noDataText: "Nenhum dado disponível",
				items: {
					path: "/tabela_vendas",
					model: "hanadb",
					template: new ColumnListItem({
						type: "Detail",
						detailPress: [oController.onDeleteDiaolog],
						cells: [
							new Text({
								text: "{hanadb>empresa}"
							}),
							new Text({
								text: "{hanadb>produto}"
							}),
							new Text({
								text: "{hanadb>quantidade}"
							}),
							new Text({
								text: "{hanadb>preco}"
							}),
							new Text({
								text: "{hanadb>data_venda}"
							}),
							new Text({
								text: "{hanadb>preco_total}"
							})
						]
					})
				},
				columns: [
					new Column({
						width: "auto",
						hAlign: "Left",
						vAlign: "Top",
						minScreenWidth: "Phone",
						demandPopin: false,
						header: [
							new Label({
								text: "Empresa"
							})
						]
					}),
					new Column({
						width: "auto",
						hAlign: "Left",
						vAlign: "Top",
						minScreenWidth: "Tablet",
						demandPopin: true,
						header: [
							new Label({
								text: "Produtos"
							})
						]
					}),
					new Column({
						width: "auto",
						hAlign: "Left",
						vAlign: "Top",
						minScreenWidth: "Tablet",
						demandPopin: true,
						header: [
							new Label({
								text: "Quantidade"
							})
						]
					}),
					new Column({
						width: "auto",
						hAlign: "Left",
						vAlign: "Top",
						minScreenWidth: "Tablet",
						demandPopin: true,
						header: [
							new Label({
								text: "Preço Unitário"
							})
						]
					}),
					new Column({
						width: "auto",
						hAlign: "Left",
						vAlign: "Top",
						minScreenWidth: "Tablet",
						demandPopin: true,
						header: [
							new Label({
								text: "Data da Venda"
							})
						]
					}),
					new Column({
						width: "auto",
						hAlign: "Left",
						vAlign: "Top",
						minScreenWidth: "Tablet",
						demandPopin: true,
						header: [
							new Label({
								text: "Preço Total"
							})
						]
					})
				],
				headerToolbar: [
					new sap.m.Toolbar({
						content: [
							new sap.m.Title({
								text: "Vendas confirmada"
							})
						]
					})
				]
			});
			return oTable;
		}
	});
});