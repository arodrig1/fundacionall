var Event = function() {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var _ObjectId = Schema.Types.ObjectId;

    var Activity = require('./activity.js');
    var Subactivity = require('./subactivity.js');
    var Child = require('./child.js');
    
    var EventSchema = new Schema({
        name: { type: String, required: true },
        date: { type: Date },
        startTime: { type: String },
        endTime: { type: String },
        photoURL: { type: String },
        activities: [{ type: _ObjectId, ref: 'Activity' }],
        subactivities: [{ type: _ObjectId, ref: 'Subactivity' }],
        children: [{ 
                        child: { type: _ObjectId, ref: 'Child' },
                        attendance: { type: Boolean }
                    }],
        signupsOpen: { type: Boolean, default: false }
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