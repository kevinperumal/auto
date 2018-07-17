var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(require("mongoose"));
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  vin: String,
  views: Number
});

VehicleSchema.statics = {
  findManybyVins: function(vinArr) {
    let query = {
      vin: {
        $in: vinArr.length ? vinArr.split(",") : []
      }
    };
    return this.find(query);
  },

  findAndIncrementViewsOrCreate: function(vin) {
    return this.findOneAndUpdate(
      {
        vin: vin
      },
      { $inc: { views: 1 } },
      { new: true }
    ).then(updatedVehicle => {
      if (updatedVehicle) {
        return updatedVehicle;
      }
      else {
        const newVehicle = {
          vin: vin,
          views: 1
        };
        return this.create(newVehicle);
      }
    });
  }
};

module.exports = mongoose.model("Vehicle", VehicleSchema);
