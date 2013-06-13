var assert = require("chai").assert;
var Backbone = require("backbone")
var BackboneSyncDeferred = require('../backbone-sync-deferred.js');
var $ = require('jquery');

Backbone.$ = $;

describe('Backbone Model sync overrided', function(){
  describe('fetch', function(){



    it('should return a promise', function(done){
      var model = new Backbone.Model();
      model.url = "https://api.github.com/users/spacenick";
      var p = model.fetch();
      assert.typeOf(p.then, 'function');
      p.then(function(data){
        assert.typeOf(data, 'object');
        done();
      });      
    });


    it('should trigger the error handler', function(done){
      var model = new Backbone.Model();
      // Let's have a 404 url
      model.url = "https://api.github.com/users/spacenic";
      var p = model.fetch();
      assert.typeOf(p.then, 'function');
      p.then(function(data){
        assert.typeOf(data, 'object');
        done();
      },
      function(error){
        done();
      });      
    });

    it('should seamlessly execute the default fetch callback', function(done){
      var model = new Backbone.Model();
      // Let's have a 404 url
      model.url = "https://api.github.com/users/spacenick";
      var p = model.fetch();
      assert.typeOf(p.then, 'function');
      p.then(function(data){
        assert.equal(model.get('login'), 'spacenick');
        done();
      });      
    });


  })
})