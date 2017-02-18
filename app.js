shopArr = ['10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am'];

function renderTableShopArr() {
  var shop = document.getElementById('storeTable');
  for (var i = 0; i < shopArr.length; i++){
    var newTh = document.createElement('th');
    var shopArrName = document.createTextNode(shopArr[i]);
    newTh.appendChild(shopArrName);
    shopArr.appendChild(newTh);
  }
}

renderTableShopArr();

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
}
