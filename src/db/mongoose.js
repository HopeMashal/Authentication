const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Hope:hope1611@hope-first-cluster.395kc.mongodb.net/Authentication?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})