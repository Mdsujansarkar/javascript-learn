var  num1 = 12;


var sum = function()
{
	var num2 = 13; 
	return function()
	{
		return num1+num2;
	}

};
var myFun = sum();
console.dir(myFun);