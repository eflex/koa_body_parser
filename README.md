
**usage:**
```
var multipart = require("koa_body_parser")
app.use(multipart());
```

*this will create*
```
 this.request.body // fields in object
 this.request.files // files in object
```