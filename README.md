# Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Proyecto web con integracion de NODEJS + EXPRESS + git trending

 
### Tech

Dillinger uses a number of open source projects to work properly:


* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]


And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### setup

este proyecto requiere de node [Node.js](https://nodejs.org/) v4+ para correr


```sh
cd myapp
$ npm install
$ set DEBUG=myapp:* & npm start
```
INSTALAR TRENDING GIT
```sh
$npm install trending-github
$npm start
```

Usage
const trending = require('trending-github');
 
trending()
  .then(repos => console.log(repos));
 
//=> [{
//=>   author: 'asciimoo',
//=>   name: 'wuzz',
//=>   href: 'https://github.com/asciimoo/wuzz',
//=>   description: 'Interactive cli tool for HTTP inspection',
//=>   language: 'Go',
//=>   stars: 966,
//=>   forks: 20,
//=>   starsInPeriod: 153
//=> }, ... ]


const trending = require('trending-github');
 
trending('weekly', 'javascript')
  .then(repos => console.log(repos));
 
//=> [{
//=>   author: 'freeCodeCamp',
//=>   name: 'freeCodeCamp',
//=>   href: 'https://github.com/freeCodeCamp/freeCodeCamp',
//=>   description: 'The https://freeCodeCamp.com open source codebase and curriculum. Learn to code and help nonprofits.',
//=>   language: 'JavaScript',
//=>   stars: 229260,
//=>   forks: 9289
//=>   starsInPeriod: 42
//=> }, ... ]
```sh
127.0.0.1:3000
```

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
