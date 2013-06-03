//FirstView Component Constructor
function FirstView() {
	var self = Ti.UI.createView();
	var BorderStyle = require('ui/panels/borderStyle');

	var bottom_animation = Ti.UI.createAnimation();
	bottom_animation.bottom = 0;
	bottom_animation.duration = 100;
	
	var bottom_animation_off = Ti.UI.createAnimation();
	bottom_animation_off.bottom = -200;
	bottom_animation_off.duration = 100;
	
	var webheight_up = Ti.UI.createAnimation();
	webheight_up.bottom = 200;
	webheight_up.duration = 100;
	
	var webheight_down = Ti.UI.createAnimation();
	webheight_down.bottom = 0;
	webheight_down.height = Titanium.UI.FILL;
	webheight_down.duration = 100;
	
	var webview = Ti.UI.createWebView({
		url: '/canvas.html',
		height:Titanium.UI.FILL,
		width:Titanium.UI.FILL,
	});
	self.add(webview);
	
	var borderView = Ti.UI.createView({
		backgroundColor:'white',
		height:200,
		width:Titanium.UI.FILL,
		bottom:-200
	});
	var borderStyleView = new BorderStyle();
	borderView.add(borderStyleView);
	
	webview.addEventListener('load',function(e) {
		Ti.App.fireEvent('app:createItems', { items:Ti.App.Properties.getList('items') });
	});
	Ti.App.addEventListener('change_bottom', function(e) {
		borderView.removeAllChildren();
		switch(e.title){
			case "Basic":
			break;
			case "Background":
			break;
			case "Bevel":
			break;
			case "Border Radius":
				var BorderRadius = require('ui/panels/borderRadius');
				var borderRadiusView = new BorderRadius();
				borderView.add(borderRadiusView);
			break;
			case "Border":
				var BorderStyle = require('ui/panels/borderStyle');
				var borderStyleView = new BorderStyle();
				borderView.add(borderStyleView);
			break;
			case "Inner Shadow":
			break;
			case "Outer Shadow":
				var OuterShadow = require('ui/panels/OuterShadow');
				var outerShadowView = new OuterShadow();
				borderView.add(outerShadowView);
			break;
			case "Text":
			break;
			case "Text Stroke":
			break;
			case "Text Shadow":
			break;
			case "Text Bevel":
			break;
			case "Transform":
			break;
			case "Filter":
			break;
		}
	});
	
	
	Ti.App.addEventListener('bottom_up', function(e) {
		borderView.animate(bottom_animation);
	});
	
	Ti.App.addEventListener('bottom_toggle', function(e) {
		if(borderView.bottom<0){
			borderView.animate(bottom_animation);
			// TODO: do this with padding in the html
			//webview.animate(webheight_up);
		}else{
			borderView.animate(bottom_animation_off);
			// TODO: do this with padding in the html
			//webview.animate(webheight_down);
		}
	});

	self.add(borderView);
		
	return self;
}
module.exports = FirstView;