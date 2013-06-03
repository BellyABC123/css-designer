/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with multiple windows in a stack
(function() {

	var selectedItem = 0;
	var items = [];
	items.push({'border-width':'1px', 'border-style':'solid'});
	items.push({'border-width':'1px', 'border-style':'solid'});
	/*items.push({'border-width':'5px', 'border-style':'dotted'});
	items.push({'border-width':'1px', 'border-style':'solid'});
	items.push({'border-width':'2px', 'border-style':'solid', 'border-radius':'20px', 'box-shadow':'2px 4px 10px 0px #000000', 'background-image':'-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(91, 98, 230, 1)), color-stop(100%,rgba(15, 15, 51, 1)))'});
	items.push({'border-width':'3px', 'border-style':'solid'});
	items.push({'border-width':'7px', 'border-style':'solid'});
	items.push({'border-width':'1px', 'border-style':'solid'});*/
	Ti.App.Properties.setList('items',items);

	Ti.App.addEventListener('app:selectItem', function(e) {
		//TODO: set slider start values  
		selectedItem = e.id;
	});
	
	Ti.App.addEventListener('change_value',function(e){
		var items = Ti.App.Properties.getList('items',[]);
		items[selectedItem][e.name] = e.value;
		Ti.App.Properties.setList('items',items);
		Ti.App.fireEvent('app:sendCssChange', { id:selectedItem, name:e.name, value:e.value});
	});
	
	
/*
box-shadow: 2px 4px 10px 0px #000000;     
-webkit-box-shadow: 2px 4px 10px 0px #000000;
-moz-box-shadow: 2px 4px 10px 0px #000000;
-ms-box-shadow: 2px 4px 10px 0px #000000;
-o-box-shadow: 2px 4px 10px 0px #000000;

background-image: -moz-linear-gradient(top,  rgba(91, 98, 230, 1) 0%, rgba(15, 15, 51, 1) 100%);
background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(91, 98, 230, 1)), color-stop(100%,rgba(15, 15, 51, 1)));
background-image: -webkit-linear-gradient(top,  rgba(91, 98, 230, 1) 0%,rgba(15, 15, 51, 1) 100%);
background-image: -o-linear-gradient(top,  rgba(91, 98, 230, 1) 0%,rgba(15, 15, 51, 1) 100%);
background-image: -ms-linear-gradient(top,  rgba(91, 98, 230, 1) 0%,rgba(15, 15, 51, 1) 100%);
background-image: linear-gradient(to bottom,  rgba(91, 98, 230, 1) 0%,rgba(15, 15, 51, 1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5B62E6', endColorstr='#0F0F33',GradientType=0 ); 
*/

		
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
		
	var smallest = width;
	if(height<width){smallest=height;}
	smallest = smallest/Ti.Platform.displayCaps.logicalDensityFactor; 
		
	var isTablet = osname === 'ipad' || (osname === 'android' && smallest > 750);
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}else{
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	new Window().open();
})();
