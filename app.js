var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',];
var shops = [];
var table;

var login = document.getElementById('login');
var submit = document.getElementById('login-submit');
var cancel = document.getElementById('login-cancel');

var navElements = document.getElementsByClassName('navs');
var navLogins = document.getElementsByClassName('nav-login');
var navLinks = document.getElementsByClassName('links');


function cookieShop(name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.dailyCookies = 0;
  this.hourlyCookies = [];
  this.id = name;
  shops.push(this);

this.getHourly();
renderStore(this, table);
}

//customer
cookieShop.prototype.getRandom = function(min, max){
  return Math.random() * (max - min) + min;
}

//hourly cookies
cookieShop.prototype.getHourly = function(){
  for (var i = 0; i < hours.length; i++){
    var cookie = Math.floor(this.avgCustomer * this.getRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;
  }
};

//attempt at table
function renderTable(){
  table = document.createElement('table');
  tbl.id = 'table';
  var trElementOne = document.createElement('tr');
  var thElementTwo = document.createElement('th');
  thElone.textContent = '';
  trElone.appendChild(thElementOne);

  for (var i = 0; i < hours.length; i++){
    thEltwo.textContent = hours[i];
    trElone.appendChild(thElementTwo);
  }


  var thElementThree = document.createElement('th');
  thElthree.textContent = 'Totals';
  trElone.appendChild(thElementThree);
  tbl.appendChild(trElementOne);
  document.getElementById('store data').appendChild(table);
}


function renderStore(table, store){
  var trElementTwo = document.createElement('tr');
  var thElementFour = document.createElement('th');
  thElementFour.textContent = store.name;
  trElementTwo.id = store.id;
  trElementTwo.appendChild(thElementFour);

//hours
  for (var y = 0; y < hours.length; y++){
    var tdElementOne = document.createElement('td');
    tdElementOne.textContent = store.hourlyCookies[y];
    trElementTwo.appendChild(tdElementOne);
  }


  var tdElementTwo = document.createElement('td');
  tdElementTwo.textContent = store.dailyCookies;
  trElementTwo.appendChild(tdElementTwo);

  table.appendChild(trElementTwo);
}


function renderNew(name, minimum, maximum, avgerage){
  table = document.getElementById('table');
  var shop = new cookieShop(name, minimum, maximum, average);
}


function renderUpdate(shop, minimum, maximum, average){
  var trElement = document.getElementById(shop.name);

  shop.minCustomer = min;
  shop.maxCustomer = max;
  shop.avgCustomer = avg;
  shop.hourlyCookies = [];
  shop.dailyCookies = 0;
  shop.getHourly();

  for (var i = 0; i < shop.hourlyCookies.length; i++){
    trElement.childNodes[i + 1].textContent = shop.hourlyCookies[i];
  }
    trElement.childNodes[trElement.childNodes.length -1].textContent = shop.dailyCookies;
}


document.getElementById('new store').addEventListener('submit', function(event));{
  event.preventDefault();
  var exists = false;
  var store = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(evebt.target.avg.value);

  for (var i = 0; i < shops.length; i++){
    if(shops[i].id === store){
      exists = true;
      break;
  }
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


//button
submit.addEventListener('submit', function(event){
  event.preventDefault();

  for (var i = 0; i < navLogins.length; i++){
    navLogins[i].style.display = 'none';
  }

  for (var y = 0; y < navLinks.length; y++){
    navLinks[y].style.display = 'inline-block';
  }
}

cancel.addEventListener('submit', function(event){
  for (var i = 0; i < navElements.length; i++){
    navElements[i].style.display = 'inline-block';
  }
}
  for (var y = 0; y < navLogins.length; y++){
    navLogins[y].style.display = 'none';
  }

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
