function cookieShop(storeLocation, min, max, avg){
  this.storeLocation = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  this.totalPurchased = [];

  this.randomCustomerPerHour = function(){
    return Math.random() * (this.max - this.min + 1) + this.min;
  }

  this.cookiesSold = function(){
    for (var i = 0; i < this.storeHours.legth; i++){
      var random = this.avg * this.randomCustomerPerHour();
      this.totalPurchased.push(random);
      this.total += random;
    }
  }

this.renderCookiesPerHour = function(){
  this.cookiesSold();
  var table = document.getElementById('storeTable');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var tdNames = document.createElement('td');
  tdNames.appendChild(document.createTextNode(this.name));
  tr.appendChild('tdNames');
}

for (var i = 0; i < this.storeHours.length; i++){
  var td = document.createElement('td');
  td2.appendChild(document.createTextNode(Math.floor(this.totalPurchased[i] + ' cookies.'));
  tr.appendChild('td');
}

for td2 = document.createElement('td');
td2.appendChild(document.createTextNode(Math.floor(this.total) + ' cookies.'));
tr.appendChild(td2);
}


//locationList
var pikePlace = new cookieShop('Pike Place Market', 17, 88, 5.2);
pikePlace.renderCookiesPerHour();

var alki = new cookieShop('Alki', 3, 24, 26);
alki.renderCookiesPerHour();

var seaTac = new cookieShop('SeaTac Airport', 6, 44, 1.2);
seaTac.renderCookiesPerHour();

var southcenter = new cookieShop('Southcenter Mall', 11, 38, 1.9);
southcenter.renderCookiesPerHour();

var bellevue = new cookieShop('Bellevue Square', 20, 48, 3.3);
bellevue.renderCookiesPerHour();



// function cookieShop(storeLocation, hoursOpen, min, max, avg, storeRow) {
//   this.name = storeLocation;
//   this.minCustomer = min;
//   this.maxCustomer = max;
//   this.avgCookie = avg;
//   this.row = storeRow;
//   this.salesPerHour = [];
//   this.totalSales = 0;
//   this.storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// var cookieShop = [];
// var table = document.getElementById('stores');
//
//
// var pikePlace = {
//   name: 'Pike Place',
//   min: 17,
//   max: 88,
//   avg: 5.2,
//   getRandom: function(min, max){
//     return Math.random() * (max - min) + min;
//   }
// function cookieShop(){
//     for (var i=0; i< storeHours.length; i++){
//       var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
//       this.salesPerHour.push(random);
//       this.totalSales += salesPerHour;
//     }
//   }
// }
//
// pikePlace.getRandom(pikePlace.min, pikePlace.max)
//
// pikePlaceName = document.getElementById('pikePlaceName');
// pikePlaceHours = document.getElementById('pikePlaceHours');
// pikePlaceMin = document.getElementById('pikePlaceMin');
// pikePlaceMax = document.getElementById('pikePlaceMax');
// pikePlaceAvg = document.getElementById('pikePlaceAvg');
//
//
// var alki = {
//   name: 'Alki Beach',
//   min: 3,
//   max: 24,
//   avg: 2.6,
//   getRandom: function(min, max){
//     return Math.random() * (max - min) + min;
//     for (var i=0; i< storeHours.length; i++){
//       var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
//       return this.salesPerHour.push(random);
//       return this.totalSales += random;
//     }
//   }
// }
//
// alki.getRandom(alki.min, alki.max)
//
// alkiName = document.getElementById('alkiName');
// alkiHours = document.getElementById('alkiHours');
// alkiMin = document.getElementById('alkiMin');
// alkiMax = document.getElementById('alkiMax');
// alkiAvg = document.getElementById('alkiAvg');
//
//
//
// var seaTac = {
//   name: 'SeaTac Airport',
//   min: 6,
//   max: 44,
//   avg: 1.2,
//   getRandom: function(min, max){
//     return Math.random() * (max - min) + min;
//     for (var i=0; i< storeHours.length; i++){
//       var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
//       return this.salesPerHour.push(random);
//       return this.totalSales += random;
//     }
//   }
// }
//
// seaTac.getRandom(seaTac.min, seaTac.max)
//
// seaTacName = document.getElementById('seaTacName');
// seaTacHours = document.getElementById('seaTacHours');
// seaTacMin = document.getElementById('seaTacMin');
// seaTacMax = document.getElementById('seaTacMax');
// seaTacAvg = document.getElementById('seaTacAvg');
//
//
// var southcenter = {
//   name: 'Southcenter Mall',
//   min: 11,
//   max: 38,
//   avg: 1.9,
//   getRandom: function(min, max){
//     return Math.random() * (max - min) + min;
//     for (var i=0; i< storeHours.length; i++){
//       var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
//       return this.salesPerHour.push(random);
//       return this.totalSales += random;
//     }
//   }
// }
//
// southcenter.getRandom(southcenter.min, southcenter.max)
//
// southcenterName = document.getElementById('soutcenterName');
// southcenterHours = document.getElementById('southcenterHours');
// southcenterMin = document.getElementById('southcenterMin');
// southcenterMax = document.getElementById('southcenterMax');
// southcenterAvg = document.getElementById('southcenterAvg');
//
//
//
// var bellevue = {
//   name: 'Bellevue Square',
//   min: 20,
//   max: 48,
//   avg: 3.3,
//   getRandom: function(min, max){
//     return Math.random() * (max - min) + min;
//     for (var i=0; i< storeHours.length; i++){
//       var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
//       return this.salesPerHour.push(random);
//       return this.totalSales += random;
//     }
//   }
// }
//
// bellevue.getRandom(bellevue.min, bellevue.max)
//
// bellevueName = document.getElementById('bellevueName');
// bellevueHours = document.getElementById('bellevueHours');
// bellevueMin = document.getElementById('bellevueMin');
// bellevueMax = document.getElementById('bellevueMax');
// bellevueAvg = document.getElementById('bellevueAvg');
