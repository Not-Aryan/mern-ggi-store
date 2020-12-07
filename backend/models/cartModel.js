import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  user: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

// module.exports = Product;

export default Product;