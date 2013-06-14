### Backbone-sync-deferred
[![Build Status](https://travis-ci.org/spacenick/backbone-sync-deferred.png?branch=master)](https://travis-ci.org/spacenick/backbone-sync-deferred) (tests are really messy right now)

Ultra lightweight & seamless Backbone.sync override to work with promises.

Just include the script after backbone. And you'll be able to do :

```javascript
var myModel = new Backbone.Model();
myModel.url = "https://my.balling-api.com/whatever";

myModel.fetch().then(function(data){
  console.log(data);
  // data is RAW json
  // however, classic "callback" is still called seamlessly so:
  // data.attribute == myModel.get('attribute')
},
function(response){
  console.log(response.statusText);
});
```