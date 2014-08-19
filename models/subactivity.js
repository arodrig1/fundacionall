var Subactivity = function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        _ObjectId = mongoose.Types.ObjectId;
    
    var SubactivitySchema = new Schema({
        name: { type: String, required: true, unique: true },
        photoURL: { type: String }
    });

    var _model = mongoose.model('Subactivity', SubactivitySchema);

    var _findById = function(id, callback) {
        _model.findById(id).exec(callback);
    }

    var _findByName = function (name, callback) {
        _model.find({ name: name }).exec(callback);
    }

    var _findOne = function(name, callback) {
        _model.findOne({ name: name }).exec(callback);
    };

    var _create = function(name, photoURL, done){
        _model.create({
            'name' : name,
            'photoURL' : photoURL
        }, function(err, subactivity) {
            if(err) { console.log(err); }
            done(null, subactivity);
        });
    };

    return {
        schema: SubactivitySchema,
        model: _model,
        findById: _findById,
        findByName: _findByName,
        findOne: _findOne,
        create: _create
    };
}();

module.exports = Subactivity;
