let server = require('D:\NCSU\DevOps519\Project\ProjectonGIT\csc519-cm-test\checkbox.io\server-side\site\server.js')
let expect = require('chai').expect;
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
    });
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/load/:id', function(req, response) {
it('Should test study.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/load/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/vote/status', function(req, response) {
it('Should test study.voteStatus ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/vote/status')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/status/:id', function(req, response) {
it('Should test study.status ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/status/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/listing', function(req, response) {
it('Should test study.listing ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/listing')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + studyDoc._id)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + studyDoc.studyId)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + voteDoc.studyId)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + voteDoc.token)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/create' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"AMZN"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"SURFACE"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"IPADMINI"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"GITHUB"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"BROWSERSTACK"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/create', function(req, response) {
it('Should test create.createStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/create')
             .send({"studyId": new mongoose.Types.ObjectId(), "timestamp": new Date(), "ip": "ip", "fingerprint": "fingerprint",
"answers": "{\"name\":\"Devops\"}", "email": "DevOps.projectSpring18@gmail.com", "contact": "Devops"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + studyDoc._id)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + studyDoc.studyId)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + voteDoc.studyId)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + voteDoc.token)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"AMZN"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"SURFACE"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"IPADMINI"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"GITHUB"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"BROWSERSTACK"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/vote/submit/', function(req, response) {
it('Should test study.submitVote ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/vote/submit/')
             .send({"studyId": new mongoose.Types.ObjectId(), "timestamp": new Date(), "ip": "ip", "fingerprint": "fingerprint",
"answers": "{\"name\":\"Devops\"}", "email": "DevOps.projectSpring18@gmail.com", "contact": "Devops"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/:token', function(req, response) {
it('Should test admin.loadStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/download/:token', function(req, response) {
it('Should test admin.download ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/download/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + studyDoc._id)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + studyDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + voteDoc.studyId)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + voteDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/' + studyDoc.token)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('get /api/study/admin/assign/:token', function(req, response) {
it('Should test admin.assignWinner ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .get('/api/study/admin/assign/')
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + studyDoc._id)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + studyDoc.studyId)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + voteDoc.studyId)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + voteDoc.token)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"AMZN"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"SURFACE"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"IPADMINI"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"GITHUB"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"BROWSERSTACK"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/open/', function(req, response) {
it('Should test admin.openStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/open/')
             .send({"studyId": new mongoose.Types.ObjectId(), "timestamp": new Date(), "ip": "ip", "fingerprint": "fingerprint",
"answers": "{\"name\":\"Devops\"}", "email": "DevOps.projectSpring18@gmail.com", "contact": "Devops"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + studyDoc._id)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + studyDoc.studyId)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + voteDoc.studyId)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + voteDoc.token)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"AMZN"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"SURFACE"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"IPADMINI"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"GITHUB"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"BROWSERSTACK"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/close/', function(req, response) {
it('Should test admin.closeStudy ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/close/')
             .send({"studyId": new mongoose.Types.ObjectId(), "timestamp": new Date(), "ip": "ip", "fingerprint": "fingerprint",
"answers": "{\"name\":\"Devops\"}", "email": "DevOps.projectSpring18@gmail.com", "contact": "Devops"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"RESEARCH", "studyKind":"survey", "adminLink": "DevOps.projectSpring18@gmail.com"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + studyDoc._id)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
VoteModel.create({"studyId": new mongo.ObjectID("5aaca3a4aaea66439ce5e91b"), "ip":"cba", "fingerprint": "fingerprint"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + studyDoc.studyId)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + voteDoc.studyId)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + voteDoc.token)
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
VoteModel.create({"studyId": new mongoose.Types.ObjectId()}, function (err, voteDoc) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send(voteDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"survey"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba", "studyKind":"dataStudy"}, function (err, studyDoc) {
			if (err) return handleError(err);
			VoteModel.create({"studyId": new mongoose.Types.ObjectId(studyDoc._id)}, function(error, voteDoc) {

             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/' + studyDoc.token)
             .send(studyDoc)
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
});
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"AMZN"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"SURFACE"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"IPADMINI"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"GITHUB"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send({"email": "DevOps.projectSpring18@gmail.com", "kind":"BROWSERSTACK"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
describe('post /api/study/admin/notify/', function(req, response) {
it('Should test admin.notifyParticipant ', function(done) {
StudyModel.create({"token":"abc", "invitecode":"cba"}, function (err, studyDoc) {
             if (err) return handleError(err);
             request(server)
             .post('/api/study/admin/notify/')
             .send({"studyId": new mongoose.Types.ObjectId(), "timestamp": new Date(), "ip": "ip", "fingerprint": "fingerprint",
"answers": "{\"name\":\"Devops\"}", "email": "DevOps.projectSpring18@gmail.com", "contact": "Devops"})
             .expect(200)
             .then(response => {
                              done();
                      })
                      .catch(function () {
                          console.log("Error");
                          done();
                      });
                  });
              });
          });
          
