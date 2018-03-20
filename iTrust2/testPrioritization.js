var fs = require('fs'),
    xml2js = require('xml2js'),
    child  = require('child_process'); 
var parser = new xml2js.Parser();
var Bluebird = require('bluebird')

calculatePriority();

function readResults(result)
{
    var duration = result.build.duration;
    var res = result.build.result;
    var commitID = result.build.actions[0]["hudson.plugins.git.RevisionParameterAction"][0]["commit"];
    
    var tests = {
        commitID: commitID,
        duration: duration, 
        res: res
    };
        
    return tests;
}

async function calculatePriority()
{
    var tests = [];
    for(i = 100; i <= 150; i++){
        var testReport =  '/var/lib/jenkins/jobs/iTrust2/builds/' + i + '/build.xml';
        var contents = fs.readFileSync(testReport)
        let xml2json = await Bluebird.fromCallback(cb => parser.parseString(contents, cb));
        tests[i-1] = readResults(xml2json);
     }
    
    tests.sort(function(a,b){
    	if(a.res == "FAILURE" && b.res == "SUCCESS") return -1;
    	if(b.res == "FAILURE" && a.res == "SUCCESS") return 1;
    	if(a.res[0] === b.res[0]) return a.duration - b.duration;
     })

    tests.forEach( e => console.log(e));
    return tests;
}
