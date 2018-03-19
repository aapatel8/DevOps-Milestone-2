// Core/NPM Modules
const esprima = require("esprima");
const faker   = require("faker");
const fs      = require('fs');
const Random  = require('random-js');
const _       = require('lodash');
const randexp = require('randexp');
const path    = require('path');



// Set options
faker.locale  = "en";
const options = { tokens: true, tolerant: true, loc: true, range: true };



// Create random generator engine
const engine = Random.engines.mt19937().autoSeed();




/**
 * Generate function parameter constraints for an input file
 * and save them to the global functionConstraints object.
 *
 * @param   {String} filePath Path of the file to generate tests for.
 * @returns {Object}          Function constraints object.
 */
function constraints(filePath) {

    // Initialize function constraints directory
    let routeConstraints = {};

    // Read input file and parse it with esprima.
    let buf = fs.readFileSync(filePath, "utf8");

    let result = esprima.parse(buf, options);

    // Start traversing the root node
    traverse(result, function (node) {


        if (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.callee.property
            && (node.expression.callee.property.name === 'get'
            || (node.expression.callee.property.name === 'post' && node.expression.arguments[0].value != '/api/design/survey'
          ))){
            //console.log(node);

            let route = node.expression.arguments[node.expression.arguments.length-1].object.name + '.' + node.expression.arguments[node.expression.arguments.length-1].property.name;
            routeConstraints[route] = {
                mockpath: null,
                route: route,
                action: null
            };
            //console.log(routeConstraints);
            //console.log(routeConstraints.constraints);
            //console.log(routeConstraints.constraints[route]);
            // Initialize function constraints


            // Traverse function node.
            traverse(node, function(child) {

                if( child.type === "CallExpression" && child.callee.property && (child.callee.property.name === "get" || child.callee.property.name === "post" )) {
                    let action = child.callee.property.name;
                    let mockpath = child.arguments[0].value;
                    let route = child.arguments[child.arguments.length-1].object.name + '.' + child.arguments[child.arguments.length-1].property.name;

                  
                    routeConstraints[route].mockpath = child.arguments[0].value;
                    routeConstraints[route].action = child.callee.property.name;

                }
            });


        }
    });
    //console.log(routeConstraints);
    return routeConstraints;
}
/**
 * Traverse an object tree, calling the visitor at each
 * visited node.
 *
 * @param {Object}   object  Esprima node object.
 * @param {Function} visitor Visitor called at each node.
 */
function traverse(object, visitor) {

    // Call the visitor on the object
    visitor(object);

    // Traverse all children of object
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor);
            }
        }
    }
}


/**
 * Return the name of a function node.
 */
function functionName(node) {
    return node.id ? node.id.name : '';
}


/**
 * Generates an integer value based on some constraint.
 *
 * @param   {Number}  constraintValue Constraint integer.
 * @param   {Boolean} greaterThan     Whether or not the concrete integer is greater than the constraint.
 * @returns {Number}                  Integer satisfying constraints.
 */
function createConcreteIntegerValue(constraintValue, greaterThan) {
    if( greaterThan ) return Random.integer(constraintValue + 1, constraintValue + 10)(engine);
    else return Random.integer(constraintValue - 10, constraintValue - 1)(engine);
}


// Export
module.exports = constraints;
