#!/bin/bash

node --stack_size=100000 node_modules/uglify-js/bin/uglifyjs public/js/app.js -cm > public/js/app.min.js
