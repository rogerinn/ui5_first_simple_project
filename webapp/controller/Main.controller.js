sap.ui.define([
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Label",
	"sap/m/MessageToast",
	"sap/m/Text",
	"sap/m/TextArea",
	"sap/ui/core/mvc/Controller",
	"sap/ui/layout/HorizontalLayout",
	"sap/ui/layout/VerticalLayout",
	"sap/m/ButtonType"
], function (Button, Dialog, Label, MessageToast, Text, TextArea, Controller, HorizontalLayout, VerticalLayout, ButtonType) {
	"use strict";

	return Controller.extend("Testes.Testes.controller.Main", {
		onInit: function () {

		},
		onApproveDialog: function () {
			var dialog = new Dialog({
				title: "Confirmar venda",
				type: "Message",
				content: new Text({
					text: "Deseja confirmar?"
				}),
				beginButton: new Button({
					type: ButtonType.Accept,
					text: "Confirmar",
					press: function () {
						MessageToast.show("Submit pressed!");
						dialog.close();
					}
				}),
				endButton: new Button({
					text: "Sair",
					type: "Reject",
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function () {
					dialog.destroy();
				}
			});

			dialog.open();
		}
	});
});