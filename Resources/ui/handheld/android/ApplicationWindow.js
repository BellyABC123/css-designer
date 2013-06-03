//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var LeftNav = require('ui/common/LeftNav');
	var actionBar;
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'black',
		height:Titanium.UI.FILL,
		width:Titanium.UI.FILL,
		navBarHidden:false,
		exitOnClose:true
	});
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	

	var leftView = Ti.UI.createView({
		width:300,
		height:Titanium.UI.FILL,
		left:-300,
		top:0,
	});
	var LeftNav = new LeftNav();
	leftView.add(LeftNav);
	
	var left_animation = Ti.UI.createAnimation();
	left_animation.left = 0;
	left_animation.duration = 200;
	
	var left_animation_off = Ti.UI.createAnimation();
	left_animation_off.left = -300;
	left_animation_off.duration = 200;
	
	Ti.App.addEventListener('left_toggle', function(e) {
		if(leftView.left<0){
			leftView.animate(left_animation);
		}else{
			leftView.animate(left_animation_off);
		}
	});
	
	Ti.App.addEventListener('left_out', function(e) {
		leftView.animate(left_animation_off);
	});
	
	Ti.App.addEventListener('left_in', function(e) {
		leftView.animate(left_animation);
	});
	
	self.add(leftView);
	
	
	var rightView = Ti.UI.createView({
		width:300,
		height:Titanium.UI.FILL,
		right:-300,
		top:0,
		backgroundColor:'white'
	});
	
	var tableData = [ {title: 'Basic'}, {title: 'Background'}, {title: 'Bevel'}, {title: 'Border Radius'}, {title: 'Border'}, {title: 'Inner Shadow'}, {title: 'Outer Shadow'}, {title: 'Text'}, {title: 'Text Stroke'}, {title: 'Text Shadow'}, {title: 'Text Bevel'}, {title: 'Transform'}, {title: 'Filter'} ];
	var table = Ti.UI.createTableView({
	  data: tableData,
	  rowHeight:60,
	  separatorColor:'#F1F1F1'
	});
	rightView.add(table);
	
	table.addEventListener('click',function(e){
		if (e.source && e.source.objName !== 'table') {
			Ti.App.fireEvent('change_bottom',{title:e.source.title});
			Ti.App.fireEvent('bottom_up');
			Ti.App.fireEvent('right_out');
		}
	});
	
	var animation = Ti.UI.createAnimation();
	animation.right = 0;
	animation.duration = 200;
	
	var animation_off = Ti.UI.createAnimation();
	animation_off.right = -300;
	animation_off.duration = 200;	
	
	Ti.App.addEventListener('right_toggle', function(e) {
		if(rightView.right<0){
			rightView.animate(animation);
		}else{
			rightView.animate(animation_off);
		}
	});
	
	Ti.App.addEventListener('right_out', function(e) {
		rightView.animate(animation_off);
	});
	
	Ti.App.addEventListener('right_in', function(e) {
		rightView.animate(animation);
	});
	
	self.add(rightView);
	
	
	self.addEventListener("focus", function() {
        if (self.activity) {
           actionBar = self.activity.actionBar;
            var activity = self.activity;
            actionBar.displayHomeAsUp=true;
            if (actionBar) {
                actionBar.onHomeIconItemSelected = function() {
                    Ti.App.fireEvent('left_toggle');
                };
            }
            activity.onCreateOptionsMenu = function(e) {
			    var menu = e.menu;
			    var menuItem = menu.add({
			        title : "Settings",
			        showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
			    });
			    menuItem.addEventListener("click", function(e) {
			        Ti.App.fireEvent('right_toggle');
			    });

			};
        }
	});		
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
