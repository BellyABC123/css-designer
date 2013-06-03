//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#000',
		navBarHidden:false,
	});
		
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	
	
	if (Ti.Platform.osname === "iphone") {
		var refresh = Titanium.UI.createButton({
			title : 'Settings'
		});
		self.setRightNavButton(refresh);
		
		refresh.addEventListener('click', function() {
			 Ti.App.fireEvent('right_toggle');
		});
	}

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
