sap.ui.define(["sap/m/Table", "sap/m/ColumnListItem", "sap/m/Text", "sap/m/Label", "sap/m/StandardListItem", "sap/m/Column"], function (
	Table, ColumnListItem, Text, Label,
	StandardListItem, Column) {
	sap.ui.jsfragment("Testes.Testes.view.fragments.main.table", {
		createContent: function (oController) {
			var oTable = new Table({
				noDataText: "Nenhum dado disponível",
				items: [
					new ColumnListItem({
						type: "Detail",
						detailPress: [oController.onDeleteDiaolog],
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
			return oTable;
		}
	});
});