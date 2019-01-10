var express = require('express');
const stickersRouter = require('./api/stickers');

var app = express();

// view engine setup
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.json({
//     message: err.message,
//     error: req.app.get('env') === 'development' ? err: {}
//   });
//   next();
// })


app.use('/api/v1/stickers', stickersRouter);

app.listen(4000, () => console.log('server started on port 3000'))

module.exports = app;
