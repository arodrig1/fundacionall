var Event = function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        _ObjectId = mongoose.Types.ObjectId;

    var Child = require('./child.js');
    
    var EventSchema = new Schema({
        name: { type: String, required: true },
        date: { type: Date },
        startTime: { type: String },
        endTime: { type: String },
        photoURL: { type: String },
        children: [{ type: _ObjectId, ref: 'Child.schema' }]
    });

    var _model = mongoose.model('Event', EventSchema);

    var _findById = function(id, callback) {
        _model.findById(id).exec(callback);
    }

    var _create = function(name, date, startTime, endTime, photoURL, done){
        _model.create({
            'name' : name,
            'date' : date,
            'startTime' : startTime,
            'endTime' : endTime,
            'photoURL' : photoURL
        }, function(err, event) {
            if(err) { console.log(err); }
            done(null, event);
        });
    };

    return {
        schema: EventSchema,
        model: _model,
        findById: _findById,
        create: _create
    };
}();

module.exports = Event;