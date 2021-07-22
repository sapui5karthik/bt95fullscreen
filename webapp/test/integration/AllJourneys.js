/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/pages/Worklist",
	"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/pages/Object",
	"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/pages/NotFound",
	"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/pages/Browser",
	"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsapui5proj06fullscreen.ZSAPUI5_Proj06_FullScreen.view."
	});

	sap.ui.require([
		"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/WorklistJourney",
		"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/ObjectJourney",
		"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/NavigationJourney",
		"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/NotFoundJourney",
		"zsapui5proj06fullscreen/ZSAPUI5_Proj06_FullScreen/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});