function Phone(brand, price, color, year) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.year = year;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}
Phone.prototype.printYear = function() {
  console.log('The year of production is ' + this.year + '.');
}
var SamsungGalaxyS6 = new Phone("Samsung", 2300, "gold", 2017);
var iPhone6s = new Phone("Apple", 3000, "silver", 2018);
var LgG6 = new Phone("LG", 2000, "black", 2017);

SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.printYear();
iPhone6s.printInfo();
iPhone6s.printYear();
LgG6.printInfo();
LgG6.printYear();

