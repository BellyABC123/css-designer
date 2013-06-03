//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var LeftNav = require('ui/common/LeftNav');
	var BorderStyle = require('ui/panels/borderStyle');
	var BorderRadius = require('ui/panels/borderRadius');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'black',
		height:Titanium.UI.FILL,
		width:Titanium.UI.FILL,
		navBarHidden:false,
		exitOnClose:true
	});
	
	var leftView = Ti.UI.createView({
		width:300,
		height:Titanium.UI.FILL,
		left:0,
		top:0,
		backgroundColor:'blue'
	});
	var LeftNav = new LeftNav();
	leftView.add(LeftNav);
	self.add(leftView);
	
	var rightView = Ti.UI.createView({
		width:300,
		height:Titanium.UI.FILL,
		right:0,
		top:0,
		backgroundColor:'white'
	});
	var tableData = [];//[ {title: 'Basic'}, {title: 'Background'}, {title: 'Bevel'}, {title: 'Border Radius'}, {title: 'Border'}, {title: 'Inner Shadow'}, {title: 'Outer Shadow'}, {title: 'Text'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'}, {title: 'Border Radius'} ];
	
	var borderStyleRow = Ti.UI.createTableViewRow({height: 200});
	var borderStyleView = new BorderStyle();
	borderStyleRow.add(borderStyleView);
	tableData.push(borderStyleRow);
	
	var borderRadiusRow = Ti.UI.createTableViewRow({height: 200});
	var borderRadiusView = new BorderRadius();
	borderRadiusRow.add(borderRadiusView);
	tableData.push(borderRadiusRow);
	
	var table = Ti.UI.createTableView({
	  data: tableData,
	  rowHeight:60
	});
	rightView.add(table);
	
	table.addEventListener('click',function(e){
		if (e.source && e.source.objName !== 'table') {
			Ti.App.fireEvent('bottom_toggle');
			Ti.App.fireEvent('right_out');
		}
	});
	
	var webview = Ti.UI.createWebView({
		url: '/canvas.html',
		height:Titanium.UI.FILL,
		left:300,
		right:300
	});
	self.add(webview);
	
	webview.addEventListener('load',function(e) {
		Ti.App.fireEvent('app:createItems', { items:Ti.App.Properties.getList('items') });
	});
	
	self.add(rightView);
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;