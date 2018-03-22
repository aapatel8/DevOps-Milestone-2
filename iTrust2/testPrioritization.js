var fs = require('fs'),
    xml2js = require('xml2js'),
    child  = require('child_process'); 
var parser = new xml2js.Parser();
var Bluebird = require('bluebird')
var HashMap = require('hashmap')
var allTestsMap = new HashMap();

calculatePriority();

function readResults(result)
{
    var tests = [];
    for (var i = 0; i < result.testsuite.testcase.length; i++) {
        var name = result.testsuite.testcase[i].$.classname + ":" + result.testsuite.testcase[i].$.name;
        var totalTime = parseFloat(result.testsuite.testcase[i].$.time);
        var failureCount = ((result.testsuite.testcase[i].failure == null) ? 0 : 1);
        if (allTestsMap.has(name)) {
            var test = allTestsMap.get(name);
            var newTotalTime = test["totalTime"] + totalTime;
            var newFailureCount = test["failureCount"] + failureCount;
            allTestsMap.set(name, {"totalTime": newTotalTime, "failureCount": newFailureCount, "name": name});
        }
        else {
            allTestsMap.set(name, {"totalTime": totalTime, "failureCount": failureCount, "name": name});
        }
    }    
    return null;
}

async function calculatePriority()
{
    for(i = 1; i <= 101; i++){
       var files = fs.readdirSync('/var/lib/jenkins/jobs/iTrust2/builds/' + i + '/surefire-reports/');
       for (var j in files) {
         if (files[j].includes(".xml")) {
           var testReport = '/var/lib/jenkins/jobs/iTrust2/builds/' + i + '/surefire-reports/' + files[j];
           var contents = fs.readFileSync(testReport)
           let xml2json = await Bluebird.fromCallback(cb => parser.parseString(contents, cb));
           readResults(xml2json);
         }
       }        
     }

     var array_values = new Array();
     allTestsMap.forEach(function(value,key){
       array_values.push(allTestsMap.get(key));
     })
        
     array_values.sort(function(a,b){
        if(a.failureCount > b.failureCount) return -1;
        if(a.failureCount < b.failureCount) return 1;
        if(a.failureCount === b.failureCount) return a.totalTime - b.totalTime;
     })

    array_values.forEach( e => console.log(e));
    //return tests;
}
