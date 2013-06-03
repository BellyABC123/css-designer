function OuterShadow() {
	var self = Ti.UI.createView({
		height:200,
		width:Titanium.UI.FILL,
		backgroundColor:'#b5b5b5'
	});
var blur = 0;
var x = 0;
var y = 0;
	var slider = Ti.UI.createSlider({
    	top: 10,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 1
    });
	self.add(slider);
	slider.addEventListener('stop', function(e) {
		blur = e.value;
		Ti.App.fireEvent('change_value',{name:'box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		
		Ti.App.fireEvent('change_value',{name:'-webkit-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-moz-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-ms-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-o-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
	});
	
	var slider_x = Ti.UI.createSlider({
    	top: 40,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 1
    });
	self.add(slider_x);
	slider_x.addEventListener('stop', function(e) {
		x = e.value;
		Ti.App.fireEvent('change_value',{name:'box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		
		Ti.App.fireEvent('change_value',{name:'-webkit-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-moz-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-ms-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-o-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		
	});
	
	var slider_y = Ti.UI.createSlider({
    	top: 70,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 1
    });
	self.add(slider_y);
	slider_y.addEventListener('stop', function(e) {
		y = e.value;
		Ti.App.fireEvent('change_value',{name:'box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		
		Ti.App.fireEvent('change_value',{name:'-webkit-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-moz-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-ms-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		Ti.App.fireEvent('change_value',{name:'-o-box-shadow', value:x+'px '+y+'px '+blur+'px 0px #000000'});
		
	});
	return self;
}

module.exports = OuterShadow;
