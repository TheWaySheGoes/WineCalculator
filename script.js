
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
	
	sugar.val(water.val()*0.3125);
	
	yeast.val(water.val()*0.0125);
	
	updateValues();
}

function calcSugar(){
	
	water.val(sugar.val()*3.2);
	
	yeast.val(sugar.val()*0.04);
	
	updateValues();
}

function calcYeast(){
	water.val(yeast.val()*80);
	sugar.val(yeast.val()*25);
	
	
	updateValues();
}

function updateValues(){
	water_value.text(water.val());
	sugar_value.text(sugar.val());
	yeast_value.text(yeast.val());
	
	water_value_big.text(water.val()/1000);
	sugar_value_big.text(sugar.val()/1000);
	yeast_value_big.text(yeast.val()/1000);
	
	
	
}





