import { Schema, model, models } from 'mongoose';

const CardSchema = new Schema({
  name: {
    type: String,
  },
  imgSource: {
    type: String,
  },
  id: {
    type: String,
  },
  types: {
    type: [String],
  },
  rarity: {
    type: String,
  },
  hp: {
    type: String,
  },
});

const Card = models.Card || model('Card', CardSchema);

export default Card;