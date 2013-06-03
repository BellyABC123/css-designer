function BorderRadius() {
	var self = Ti.UI.createView({
		height:200,
		width:Titanium.UI.FILL,
		backgroundColor:'#b5b5b5'
	});
	var slider = Ti.UI.createSlider({
    	top: 150,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 1
    });
	self.add(slider);
	slider.addEventListener('stop', function(e) {
		Ti.App.fireEvent('change_value',{name:'border-radius', value:String.format("%3.1f", e.value)+'px'});
		
		
		Ti.App.fireEvent('change_value',{name:'-webkit-border-radius', value:String.format("%3.1f", e.value)+'px'});
		Ti.App.fireEvent('change_value',{name:'-moz-border-radius', value:String.format("%3.1f", e.value)+'px'});
		Ti.App.fireEvent('change_value',{name:'-ms-border-radius', value:String.format("%3.1f", e.value)+'px'});
		Ti.App.fireEvent('change_value',{name:'-o-border-radius', value:String.format("%3.1f", e.value)+'px'});
		
	});
	return self;
}

module.exports = BorderRadius;
