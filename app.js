var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',];
var shops = [];
var tbl;

function cookieShop(name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCutomer;
  this.avgCustomer = avgCustomer;
  this.dailyCookies = 0;
  this.hourlyCookies = [];
  shops.push(this);

this.getHourly();
renderStore(tbl, this);
}

cookieShop.prototype.generateRandom = function(min, max){
  return Math.random() * (max - min) + min;
};

cookieShop.prototype.generateHourly = function(){
  for (var i = 0; i < hours.length; i++){
    var cookie = Math.floor(this.avgCustomer * this.generateRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;
  }
};

function renderTable(){
  table = document.createElement('table');
  tbl.id = 'table';
  var trElementOne = document.createElement('tr');
  var thElementTwo = document.createElement('th');
  thEl1.textContent = '';
  trEl1.appendChild(thElementOne);

  for (var i = 0; i < hours.length; i++){
    thEltwo.textContent = hours[i];
    trElone.appendChild(thElementTwo);
  }

  var thElementThree = document.createElement('th');
  thElthree.textContent = 'Totals';
  trElone.appendChild(thElementThree);

  tbl.appendChild(trElementOne);

  document.getElementById('store data').appendChild(tbl);
}


function renderStore(tbl, store){
  var trElementTwo = document.createElement('tr');
  var thElementFour = document.createElement('th');
  thElementFour.textContent = store.name;
  trElementTwo.id = store.id;
  trElementTwo.appendChild(thElementFour);

  for (var y = 0; y < hours.length; y++){
    var tdElementOne = document.createElement('td');
    tdElementOne.textContent = store.hourlyCookies[y];
    trElementTwo.appendChild(tdElementOne);
  }

  var tdElementTwo = document.createElement('td');
  tdElementTwo.textContent = store.dailyCookies;
  trElementTwo.appendChild(tdElementTwo);

  tbl.appendChild(trElementTwo);
}

function renderNew(name, min, max, avg){
  var trElement = document.getElementById(shop.name);

  shop.minCustomer = min;
  shop.maxCustomer = max;
  shop.avgCustomer = avg;
  shop.hourlyCookies = 0;
  shop.getHourly();

  for (var i = 0; i < shop.hourlyCookies.length; i++){
    trElement.childNodes[i + 1].textContent = shop.hourlyCookies[i];
    trElement.childNodes[trElement.childNodes.length -1].textContent = shop.dailyCookies;
  }
}

document.getElementById('new store').addEventListener('submit', function(event));{
  event.preventDefault();
  var exists = false;
  var store = event.target.store.value;
  var min = parseInt(event.target.store.value);
  var max = parseInt(event.target.store.value);
  var avg = parseInt(evebt.target.store.value);
}

if (exists === true){
  renderUpdate(shops[i], min, max, avg);
}else{
  renderNew(store, min, max, avg);
}

event.target.store.value = null;
event.target.min.value = null;
event.target.min.value = null;
event.target.avg.value = null;

var pikePlace = new cookieShop('Pike Place', 17, 88, 5.2 'pike');
var seaTac = new cookieShop('SeaTac Airport', 6, 44, 1.2 'seatac');
var southCenter = new cookieShop('Southcenter Mall', 11, 38, 1.9, 'southcenter');
var bellevue = new cookieShop('Bellevue Square', 20, 48, 3.3, 'bellevue');
var alki = new cookieShop('Alki Beach'), 3, 24, 2.6, 'alki');



// //locationList
// var pikePlace = new cookieShop('Pike Place Market', 17, 88, 5.2);
//   pikePlace.renderCookiesPerHour();
//
// var alki = new cookieShop('Alki', 3, 24, 26);
//   alki.renderCookiesPerHour();
//
// var seaTac = new cookieShop('SeaTac Airport', 6, 44, 1.2);
//   seaTac.renderCookiesPerHour();
//
// var southcenter = new cookieShop('Southcenter Mall', 11, 38, 1.9);
//   southcenter.renderCookiesPerHour();
//
// var bellevue = new cookieShop('Bellevue Square', 20, 48, 3.3);
//   bellevue.renderCookiesPerHour();


/*Lab 06
var pikePlace = {
  min : 17,
  max : 88,
  avg : 5.2,
  getRandom: function(min, max){
    returnMath.random() * (max - min) + min;
  }
}
pikePlace.getRandom(pikePlace.min, pikePlace.max);

var seaTac = {
  min: 6,
  max: 24,
  avg: 1.2,
  getRandom: function(min, max){
    returnMath.random() * (max - min) + min;
  }
}
seaTac.getRandom(seaTac.min, seaTac.max);

var southCenter = {
  min: 11,
  max: 38,
  avg: 1.9
  getRandom: function(min, max){
    returnMath.random() * (max - min) + min;
  }
}
southCenter.getRandom(southCenter.min, southCenter.max);

var bellevue = {
  min: 20,
  max: 48,
  avg: 3.3,
  getRandom: function(min, max){
    returnMath.random() * (max - min) + min;
  }
}
bellevue.getRandom(bellevue.min, bellevue.max);

var alki = {
  min: 3,
  max: 48,
  avg: 2.6,
  getRandom: function(min, max){
    returnMath.random() * (max - min) + min;
  }
}
alki.getRandom(alki.min, alki.max);
/*
