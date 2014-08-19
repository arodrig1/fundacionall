var Child = function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        _ObjectId = mongoose.Types.ObjectId;
    
    var ChildSchema = new Schema({
        name: {
            first: String,
            last: String
        },
        idNum: { type: Number, unique: true },
        photoURL: { type: String }
    });

    ChildSchema.virtual('name.full').get(function() {
        return this.name.first + ' ' + this.name.last;
    });

    var _model = mongoose.model('Child', Child);

    var _findById = function(id, callback) {
        _model.findById(id).exec(callback);
    }

    var _findByNatlId = function(idNum, callback) {
        _model.findOne({ idNum: idNum }).exec(callback);
    }

    var _create = function(firstName, lastName, idNum, photoURL, done){
        _model.create({
            'name' : { 'first' : firstName, 'last' : lastName },
            'idNum' : idNum,
            'photoURL' : photoURL
        }, function(err, child) {
            if(err) { console.log(err); }
            done(null, child);
        });
    }

    return {
        schema: ChildSchema,
        model: _model,
        findById: _findById,
        findByNatlId: _findByNatlId,
        create: _create
    };

}();

module.exports = Child;