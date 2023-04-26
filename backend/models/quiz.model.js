module.exports = mongoose => {
    var schema = 
      mongoose.Schema(
        {
          title: String,
          question: String,
          option_1: String,
          option_2: String,
          option_3: String,
          option_4: String,
          answer: String

        },
        { timestamps: true }
      );
  

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Quiz = mongoose.model("quiz", schema);
      return Quiz;
    };
