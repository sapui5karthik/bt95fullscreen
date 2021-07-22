sap.ui.define([
		"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zsapui5proj06fullscreen.ZSAPUI5_Proj06_FullScreen.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);