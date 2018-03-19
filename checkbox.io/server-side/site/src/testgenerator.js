// Core/NPM Modules
const product = require('iter-tools/lib/product');
const fs      = require("fs");
const mock    = require('mock-fs');
const _       = require('lodash');
const mongoose = require('mongoose');
const nock = require('nock')

const collectionsMock = {
  studies1: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {',
    param: ' ',
    doc: 'studyDoc'
  },
  studies2: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: 'studyDoc._id',
    doc: 'studyDoc'
  },
  studies3: {
    collection: 'StudyModel.create({"token":"abc"}, function (err, studyDoc) {',
    param: ' ',
    doc: 'studyDoc'
  },
  studies4: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: 'studyDoc.token',
    doc: 'studyDoc'
  },

  votes1: {
    collection: 'VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {',
    param: ' ',
    doc: 'studyDoc'
  },
  votes2: {
    collection: 'VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {',
    param: 'studyDoc.studyId',
    doc: 'studyDoc'
  },
  votes3: {
    collection: 'VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {',
    param: 'voteDoc.studyId',
    doc: 'voteDoc'
  },
  votes4: {
    collection: 'VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {',
    param: 'voteDoc.token',
    doc: 'voteDoc'
  },
  both1: {
    collection: 'VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {\n' +
      'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: 'voteDoc'
  },
  both2: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {\n' +
    '			if (err) return handleError(err);\n' +
    '			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {\n',
    param: 'studyDoc.token',
    doc: 'studyDoc'
  },
  both3: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {\n' +
    '			if (err) return handleError(err);\n' +
    '			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {\n',
    param: 'studyDoc.token',
    doc: 'studyDoc'
  },
  object1: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: '{"email": "DevOps.projectSpring18@gmail.com", "kind":"AMZN"}'
  },
  object2: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: '{"email": "DevOps.projectSpring18@gmail.com", "kind":"SURFACE"}'
  },
  object3: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: '{"email": "DevOps.projectSpring18@gmail.com", "kind":"IPADMINI"}'
  },
  object4: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: '{"email": "DevOps.projectSpring18@gmail.com", "kind":"GITHUB"}'
  },
  object5: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: '{"email": "DevOps.projectSpring18@gmail.com", "kind":"BROWSERSTACK"}'
  },
  object6: {
    collection: 'StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {',
    param: ' ',
    doc: '{"studyId": new mongoose.Types.ObjectId(), "timestamp": new Date(), "ip": "ip", "fingerprint": "fingerprint",\n' +
      '"answers": "{\\"name\\":\\"Devops\\"}", "email": "DevOps.projectSpring18@gmail.com", "contact": "Devops"}'
  }
};

/**
 * Generate test cases based on the global object functionConstraints.
 *
 * @param {String} filepath            Path to write test file.
 * @param {Object} functionConstraints Constraints object as returned by `constraints`.
 */
function generateTestCases(filepath, routConstraints) {
    //console.log(routConstraints);
    // Content string. This will be built up to generate the full text of the test string.
    let content = `let server = require('${filepath}')\nlet expect = require('chai').expect;
    let request = require('supertest');
    var mongoose = require('mongoose');

    var mongo = require('mongodb');

    var mongoDB = "mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@"+process.env.MONGO_IP+":27017/site?authSource=admin";
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    var Schema = mongoose.Schema;
    var StudySchema = new Schema({
        "token": String,
        "invitecode": String,
        "status": String,
        "studyKind": String,
        "adminLink": String,
    });

    var VoteSchema = new Schema({
    	"studyId": Schema.Types.ObjectId,
    	"ip": String,
    	"fingerprint": String
    });
    var VoteModel = mongoose.model('votes', VoteSchema , 'votes');

    var StudyModel = mongoose.model('studies', StudySchema, 'studies');

    beforeEach(function() {
        StudyModel.remove({}, function(err, response) {
        });
        VoteModel.remove({}, function(err, response) {
        });
    });\n`;

    // Iterate over each function in functionConstraints
    for ( let route in routConstraints) {

        let mockpath = routConstraints[route].mockpath;
        let action = routConstraints[route].action;

        for(let mock in collectionsMock)
        {
          content += "describe(" + "'" + action + ' ' + mockpath + "'" + ", function(req, response) {\n";
          content += "it(" + "'" + "Should test " + route + " ', function(done) {\n";
          content += collectionsMock[mock].collection + "\n" ;
          content += "             if (err) return handleError(err);\n";
          content += "             request(server)\n";
          content += "             ." + action + "('" + mockpath.split(':')[0] + "'";
          if(collectionsMock[mock].param != ' '){
            content += " + " + collectionsMock[mock].param +")\n";
          }
          else {
            content += ")\n";
          }
          if(action == 'post'){
            content += "             .send(" + collectionsMock[mock].doc + ")\n";
          }
          content += "             .expect(200)\n";
          content +=  `             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          \n`;
          if(mock == 'both1' || mock == 'both2' || mock == 'both3')
          content += "});\n"
        }
    }

    // Write final content string to file test.js.
    fs.writeFileSync('test.js', content, "utf8");

}



// Export
module.exports = generateTestCases;
