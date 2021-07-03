const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/proArtisans',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() =>{
    console.log('connected')
}).catch(() => {
    console.log('not connected');
})

