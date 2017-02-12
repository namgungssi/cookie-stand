function CookieStore(storeLocation, hoursOpen, min, max, avg) {
  this.name = storeLocation;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookie = avg;
  this.salesPerHour = [];
  this.totalSales = 0;
}

var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',];
var CookieStore = [];
var table = document.getElementById('stores');


var pikePlace = {
  name: 'Pike Place',
  min: 17,
  max: 88,
  avg: 5.2,
  getRandom: function(min, max){
    return Math.random() * (max - min) + min;
  }
function CookieStore(){
    for (var i=0; i< storeHours.length; i++){
      var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
      this.salesPerHour.push(random);
      this.totalSales += salesPerHour;
    }
  }
}

pikePlace.getRandom(pikePlace.min, pikePlace.max)

pikePlaceName = document.getElementById('pikePlaceName');
pikePlaceHours = document.getElementById('pikePlaceHours');
pikePlaceMin = document.getElementById('pikePlaceMin');
pikePlaceMax = document.getElementById('pikePlaceMax');
pikePlaceAvg = document.getElementById('pikePlaceAvg');


var alki = {
  name: 'Alki Beach',
  min: 3,
  max: 24,
  avg: 2.6,
  getRandom: function(min, max){
    return Math.random() * (max - min) + min;
    for (var i=0; i< storeHours.length; i++){
      var random = Math.floor(this.getRandomCustomer() * this.avgCookie);
      return this.salesPerHour.push(random);
      return this.totalSales += random;
    }
  }
}

alki.getRandom(alki.min, alki.max)

alkiName = document.getElementById('alkiName');
alkiHours = document.getElementById('alkiHours');
alkiMin = document.getElementById('alkiMin');
alkiMax = document.getElementById('alkiMax');
alkiAvg = document.getElementById('alkiAvg');




// //locationList
// var pikePlace = new CookieShop('Pike Place Market', 17, 88, 5.2);
// var alki = new CookieShop('Alki', 3, 24, 26);
// var seaTac = new CookieShop('SeaTac Airport', 6, 44, 1.2);
// var southcenter = new CookieShop('Southcenter Mall', 11, 38, 1.9);
// var bellevue = new CookieShop('Bellevue Square', 20, 48, 3.3);
//
// console.log(locationList);











var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return Math.random() * ((max - min) + min);
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    // 1. Get an element by Id from your html
    // 2. Create a UL element
    // 3. Create and populate an LI element for each of the data points that you want to render
    // 4. Append the LI to the UL
    // 5. Append the UL to the element that you stored in step 1
  }
};
