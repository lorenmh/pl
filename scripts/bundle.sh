#!/bin/bash

./node_modules/.bin/browserify -t reactify client/js/app/app.js -o public/js/app.js
