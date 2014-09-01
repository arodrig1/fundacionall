var Series = function() {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var _ObjectId = Schema.Types.ObjectId;

    var Event = require('./event.js');
    
    var SeriesSchema = new Schema({
        name: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        frequency: { type: Number }, // 1 = daily, 7 = weekly, 30 = monthly
        events: [{ type: _ObjectId, ref: 'Event' }],
        photoURL: { type: String }
    });

    SeriesSchema.virtual('frequency.string').get(function() {
        if (this.frequency == 1) return __('Diaria');
        else if (this.frequency == 7) return __('Semanal');
        else if (this.frequency == 30) return __('Mensual');
        else return __('Indefinida');
    });

    var _model = mongoose.model('Series', SeriesSchema);

    var _findAll = function(callback) {
        _model.find().exec(callback);
    }

    var _findById = function(id, callback) {
        _model.findById(id).exec(callback);
    }

    var _findByName = function (name, callback) {
        _model.find({ name: name }).exec(callback);
    }

    var _create = function(name, startDate, endDate, frequency, events, photoURL, done){
        _model.create({
            'name' : name,
            'startDate' : startDate,
            'endDate' : endDate,
            'frequency' : frequency,
            'events' : events,
            'photoURL' : photoURL
        }, function(err, series) {
            if(err) { console.log(err); }
            done(null, series);
        });
    };

    return {
        schema: SeriesSchema,
        model: _model,
        findAll: _findAll,
        findById: _findById,
        findByName: _findByName,
        create: _create
    };
}();

module.exports = Series;