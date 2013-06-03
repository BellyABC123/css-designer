function LeftNav() {
	var self = Ti.UI.createView({
		backgroundColor:'white',
	});
	
	
	var tableData = [ {title: 'Open'}, {title: 'Save'}, {title: 'New Item'} ];
	var table = Ti.UI.createTableView({
		data: tableData,
		rowHeight:60,
		separatorColor:'#F1F1F1'
	});
	self.add(table);

	table.addEventListener('click',function(e){
		if (e.source && e.source.objName !== 'table') {
			switch(e.source.title){
				case "New Item":
					var items = Ti.App.Properties.getList('items',[]);
					items.push({'border-width':'1px', 'border-style':'solid'});
					Ti.App.Properties.setList('items',items);
					
					Ti.App.fireEvent('left_out');
					Ti.App.fireEvent('app:createItems', { items:items });
				break;
			}
		}
	});
			
	return self;
}

module.exports = LeftNav;
