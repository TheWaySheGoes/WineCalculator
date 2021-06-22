
var water = $("#Water");
var sugar = $("#Sugar");
var yeast = $("#Yeast");
var water_value = $("#Water_value");
var sugar_value = $("#Sugar_value");
var yeast_value = $("#Yeast_value");
var water_value_big = $("#Water_value_big");
var sugar_value_big = $("#Sugar_value_big");
var yeast_value_big = $("#Yeast_value_big");




function calcWater() {
	
	sugar.val(water.val()*0.25);
	
	yeast.val(water.val()*0.025);
	
	updateValues();
}

function calcSugar(){
	
	water.val(sugar.val()*4.0);
	
	yeast.val(sugar.val()*0.10);
	
	updateValues();
}

function calcYeast(){
	water.val(yeast.val()*10);
	sugar.val(yeast.val()*40);
	
	
	updateValues();
}

function updateValues(){
	water_value.text((water.val()/1000).toFixed(3));
	sugar_value.text((sugar.val()/1000).toFixed(3));
	yeast_value.text((yeast.val()/1000).toFixed(3));
	
	
	
	
}





