var Activity = function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        _ObjectId = mongoose.Types.ObjectId;

    var Subactivity = require('./subactivity.js');
    
    var ActivitySchema = new Schema({
        name: { type: String, required: true, unique: true },
        photoURL: { type: String },
        subactivities: [{ type: _ObjectId, ref: 'Subactivity.schema' }]
    });

    var _model = mongoose.model('Activity', ActivitySchema);

    var _findAll = function(callback) {
        console.log("Activity model findAll invoked!");
        _model.find().exec(callback);
    }

    var _findById = function(id, callback) {
        _model.findById(id).exec(callback);
    }

    var _findByName = function (name, callback) {
        _model.find({ name: name }).exec(callback);
    }

    var _findOne = function(name, callback) {
        _model.findOne({ name: name }).exec(callback);
    };

    var _create = function(info, done){
        console.log("Activity model create invoked!");
        console.log(info);
        _model.create(info, function(err, activity) {
            if(err) { console.log(err); }
            done(null, activity);
        });
    };

    var _removeById = function(id, callback) {
        console.log("Activity model delete invoked!");
        console.log(id);
        _model.remove({ _id: id }, callback);
    }

    return {
        schema: ActivitySchema,
        model: _model,
        findAll: _findAll,
        findById: _findById,
        findByName: _findByName,
        findOne: _findOne,
        create: _create,
        removeById: _removeById
    };
}();

module.exports = Activity;
