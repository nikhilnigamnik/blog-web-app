const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect to DB successfully');
    } catch (error) {
        console.log('Connect to DB failed');
    }
}

module.exports = connect;