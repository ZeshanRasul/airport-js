describe("Plane", function(){

  var plane, airport;

  beforeEach(function(){
    airport = new Airport;
    plane = new Plane();
  });

  describe("initialising a new plane",function(){
    it("a plane is initialised flying",function(){
      expect(plane.isFlying).toEqual(true)
    });
  });

  describe("changing fly status",function(){
    it("cannot takeoff if flying",function(){
      expect(function(){plane.takeOff(airport);}).toThrow('Plane is in the air already');
    });

    it("taking off changes flight status ",function(){
      plane.isFlying = false;
      plane.takeOff(airport);
      expect(plane.isFlying).toEqual(true);
    });

    it("can only change flight status if instructed from an airport ",function(){
      plane.isFlying = false;
      plane.takeOff(airport);
      expect(plane.isFlying).toEqual(true);
    });

    it("landing changes flight status", function() {
      plane.land(airport);
      expect(plane.isFlying).toEqual(false)
    });

    it("cannont land if already at airport", function() {
      plane.land(airport)
      expect(function(){plane.land(airport);}).toThrow("Plane has already landed")
    });
  });

});
