//object literals
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',];
var shops = [];
var tbl;

//constructor
function CookieShop(name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.dailyCookies = 0;
  this.hourlyCookies = [];
  this.id = name;
  this.getHourly();
  shops.push(this);

  renderStore(this, table);
}

//hourly cookies
cookieShop.prototype.getHourly = function(){
  for (var x = 0; x < hours.length; x++){
    var cookie = Math.floor(this.avgCustomer * this.getRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;

  }
};

//hours
for (var y = 0; y < hours.length; y++){
  var tdElone = document.createElement('td');
  tdElone.textContent = shops.hourlyCookies[y];
  trEltwo.appendChild(tdElone);
}
var tdEltwo = document.createElement('td');
tdEltwo.textContent = shops.dailyCookies;
trEltwo.appendChild(tdEltwo);
tbl.appendChild(trEltwo);


function renderNew(name, minimum, maximum, avgerage){
  tbl = document.getElementById('table');
  var shop = new cookieShop(name, minimum, maximum, average);
}

//customer
cookieShop.prototype.getRandom = function(min, max){
  return Math.random(Math.random() * (max - min) + min;
}

function renderUpdate(shop, minimum, maximum, average){
  var trElement = document.getElementById(shop.name);

  shop.minCustomer = min;
  shop.maxCustomer = max;
  shop.avgCustomer = avg;
  shop.hourlyCookies = [];
  shop.dailyCookies = 0;
  shop.getHourly();

  for (var x = 0; x <shop.hourlyCookies.length; x++){
    trElement.childNodes[x + 1].textContent = shop.hourlyCookies[x];
  }
  trElement.childNodes[trElement.childNodes.length -1].textContent = shop.dailyCookies;
}

//from my object loterals
function addStore(event){
  event.preventDefault();
  console.log(event);

  var store = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(evebt.target.avg.value);

  var newCookieShop = new cookieShop (store, min, max, avg);
  newCookieShop.renderCookiesPerHour();
  newCookieShop.alternate();

  event.target.store.value = null;
  event.target.min.value = null;
  event.target.min.value = null;
  event.target.avg.value = null;

  var totalStore = document.getElementById('total store');
  totalStore.getTotal();

//event listener
  var form = document.getElementById('total store');
  form.addEventListener.create('submit', 'addStore');
};

//attempt at table using listner & handler
function renderTable(){
  tbl = document.createElement('table');
  tbl.id = 'table';
  var trElone = document.createElement('th');
  var thEltwo = document.createElement('tr');
  var thElthree = document.createElement('tr');
  thElone.textContent = '';
  trElone.appendChild(thElone);

  for (var x = 0; x < hours.length; x++){
    thEltwo.textContent = hours[x];
    trEltwo.appendChild(thEltwo);


var thEltwo = document.createElement('tr');
thElthree.textContent = 'Totals';
trEltwo.appendChild(thEltwo);
tbl.appendChild(trElone);

document.getElementById('store data').appendChild(tbl);
}
}

function renderStore(tbl, store){
  var trElone = document.createElement('th');
  var thEltwo = document.createElement('tr');
  var thElthree = document.createElement('tr');
  thElthree.textContent = store.name;
  trEltwo.id = store.id;
  trEltwo.appendChild(thElthree);
};

//object literals
var pikePlace = new cookieShop('Pike Place', 17, 88, 5.2 'pike');
pikePlace.renderCookiesPerHour();

var seaTac = new cookieShop('SeaTac Airport', 6, 44, 1.2 'seatac');
seaTac.renderCookiesPerHour();

var southCenter = new cookieShop('Southcenter Mall', 11, 38, 1.9, 'southcenter');
southCenter.renderCookiesPerHour();

var bellevue = new cookieShop('Bellevue Square', 20, 48, 3.3, 'bellevue');
bellevue.renderCookiesPerHour();

var alki = new cookieShop('Alki Beach'), 3, 24, 2.6, 'alki');
alki.renderCookiesPerHour();


EventHandler.create(EventListener.class, 'form', 'addStore');
// //button
// submit.addEventListener('submit', function(event){
//   event.preventDefault();
//


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
