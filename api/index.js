var app = require("./server");
require("dotenv").config();

//Listen on port config.port
app.listen(process.env.PORT, function() {
  console.log("listening on port ", process.env.PORT);
});
