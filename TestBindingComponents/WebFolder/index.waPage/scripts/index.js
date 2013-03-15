
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataClass2CollectionEvent = {};	// @dataSource
	var button3 = {};	// @button
	var dataClass1Event = {};	// @dataSource
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	dataClass2CollectionEvent.onCurrentElementChange = function dataClass2CollectionEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var1 = var1 +"dataClass2CollectionEvent.onCurrentElementChange: ID = "+ sources.dataClass2Collection.ID + "<br/>";
		sources.var1.sync();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		sources.dataClass1.allEntities();
		var1 = var1 +"<br/>sources.dataClass1.allEntities(); <br/>";
		sources.var1.sync();
	};// @lock

	dataClass1Event.onCurrentElementChange = function dataClass1Event_onCurrentElementChange (event)// @startlock
	{// @endlock
		var1 = var1 +"dataClass1Event.onCurrentElementChange: ID = "+ sources.dataClass1.ID + "<br/>";
		sources.var1.sync();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/comp2.waComponent');
		var1 = var1 +"<br/>loadComponent 2 <br/>";
		sources.var1.sync();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/comp1.waComponent');
		var1 = var1 +"<br/>loadComponent 1 <br/>";
		sources.var1.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataClass2Collection", "onCurrentElementChange", dataClass2CollectionEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("dataClass1", "onCurrentElementChange", dataClass1Event.onCurrentElementChange, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
