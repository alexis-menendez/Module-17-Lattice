import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/SociallyReacting');

export default mongoose.connection;