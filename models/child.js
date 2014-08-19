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

    var _model = mongoose.model('Child', ChildSchema);

    var _findAll = function(callback) {
        _model.find().exec(callback);
    }

    var _findById = function(id, callback) {
        _model.findById(id).exec(callback);
    }

    var _findByNatlId = function(idNum, callback) {
        _model.findOne({ idNum: idNum }).exec(callback);
    }

    var _create = function(info, done){
        _model.create({
            'name' : { 'first' : info.firstName, 'last' : info.lastName },
            'idNum' : info.idNum,
            'photoURL' : info.photoURL
        }, function(err, child) {
            if(err) { console.log(err); }
            done(null, child);
        });
    }

    var _removeById = function(id, callback) {
        _model.remove({ _id: id }, callback);
    }

    return {
        schema: ChildSchema,
        model: _model,
        findAll: _findAll,
        findById: _findById,
        findByNatlId: _findByNatlId,
        create: _create,
        removeById: _removeById
    };

}();

module.exports = Child;