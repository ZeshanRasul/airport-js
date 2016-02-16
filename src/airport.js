function Airport(weather) {

  this.planes = [];
  this.weather = weather;
  this.DEFAULTCAPACITY = 20;
  this.capacity = this.DEFAULTCAPACITY
}

Airport.prototype.land = function(plane) {
  if (this.weather.isStorm()){
    throw 'cannot land in a storm'
  };
  if (this.planes.length === this.capacity){
    throw 'cannot land, airport at full capacity'
  };
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStorm()){
   throw 'cannot takeoff in a storm';
  };
  if (this.planes.indexOf(plane) === -1){
   throw 'Plane not in airport'
  };
  this.planes.splice(this.planes.indexOf(plane), 1);
};



Airport.prototype.changeCapacity = function(newCapacity) {
  if (this.planes.length > newCapacity){
    throw 'Cannot change capacity to lower than number of planes at airport'
  };
  this.capacity = newCapacity;
}
