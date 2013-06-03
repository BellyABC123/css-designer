function BorderStyle() {
	var self = Ti.UI.createView({
		height:200,
		width:Titanium.UI.FILL,
		backgroundColor:'#b5b5b5'
	});
	
	
		
	var picker = Ti.UI.createPicker({
	  top:5,
	  left:5
	});
	
	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Solid'});
	data[1]=Ti.UI.createPickerRow({title:'Dashed'});
	data[2]=Ti.UI.createPickerRow({title:'Dotted'});
	
	picker.add(data);
	picker.selectionIndicator = true;
	self.add(picker);
	
	picker.addEventListener('change', function(e) {
		var style = "";
		switch(e.rowIndex){
			case 0:
				style = "solid";
			break;
			case 1:
				style = "dashed";
			break;
			case 2:
				style = "dotted";
			break;
		}
		Ti.App.fireEvent('change_value',{name:'border-style', value:style});
	});
	

	var slider = Ti.UI.createSlider({
    	top: 70,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 1
    });
	self.add(slider);
	slider.addEventListener('stop', function(e) {
		Ti.App.fireEvent('change_value',{name:'border-width', value:String.format("%3.1f", e.value)+'px'});
	});
	
		
	var colour = Ti.UI.createTextField({
	  top:140,
	  left:5,
	  width:200,
	  value:'#',
	});
	self.add(colour);
	colour.addEventListener('blur', function(e) {
		Ti.App.fireEvent('change_value',{name:'border-color', value: colour.value});
	});
	
	
	
	
	
	return self;
}

module.exports = BorderStyle;
