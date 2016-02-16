function Plane(){
  this.isFlying = true
}

Plane.prototype.takeOff = function (airport) {
  if(this.isFlying){
    throw 'Plane is in the air already'
  }
  if(airport instanceof Airport) {
    this.isFlying = true
  }
};

Plane.prototype.land = function (airport) {
  if(this.isFlying === false) {
    throw 'Plane has already landed'
  }
  if(airport instanceof Airport) {
    this.isFlying = false
  }
}
