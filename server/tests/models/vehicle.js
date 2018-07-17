var should = require("should"),
  DB = require("../../db"),
  fixtures = require("../fixtures/model-vehicles");

var Vehicle = require("../../models/vehicle");

describe("Vehicle Comment Tests", function() {
  before(function(done) {
    DB.connect(
      DB.MODE_TEST,
      done
    );
  });

  beforeEach(function(done) {
    DB.drop(function(err) {
      if (err) return done(err);
      DB.fixtures(fixtures, done);
    });
  });

  it("findManybyVins", done => {
    return Vehicle.find({}).then(vehicles => {
      return Vehicle.findManybyVins([
        vehicles[0].vin,
        vehicles[1].vin,
        vehicles[2]
      ]).then(vehicles => {
        vehicles.length.shoudld.eq(3);
        vehicles[2].vin.should.eql("3GTEK13338G399411");
        vehicles[2].views.should.eql(789);
        done();
      });
    });
  });

  it("findAndIncrementViewsOrCreate", done => {
    return Vehicle.findAndIncrementViewsOrCreate("TEST").then(newView => {
      return Vehicle.find({}).then(vehicles => {
        vehicles.length.should.eql(4);
        vehicles[3].views.should.eql(1);
        done();
      });
    });
  });

  it("findAndIncrementViewsOrCreate", done => {
    return Vehicle.findAndIncrementViewsOrCreate("TEST").then(newView => {
      Vehicle.find({}).then(vehicles => {
        vehicles.length.should.eql(4);
        vehicles[3].views.should.eql(2);
        done();
      });
    });
  });
});
