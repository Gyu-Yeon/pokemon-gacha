import { Schema, model, models } from 'mongoose';

const CardSchema = new Schema({
  cardOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  imgSource: {
    type: String,
    required: [true, 'imgSource is required.'],
  }
});

const Card = models.Card || model('Card', CardSchema);

export default Card;