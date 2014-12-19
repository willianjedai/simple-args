# simple-args

This module serialize the args of your command line, return a object js (json), with data.

### install
```sh
npm install --save simple-args
```
and in your .js file

```js
var simpleArgs = require('simple-args');
console.log(simpleArgs);
```

now, var simpleArgs, return a object, with your data, example:

```sh
node app.js -b --test
=> {b: true, test: true}
```

If you want apply false, use
```sh
node app.js -b=false --test="false"
=> {b: true, test: true}
```

Too accept other values, like below:
```sh
node app.js -o '/Desktop/teste' --output="/Desktop/teste"
=> {o: '/Desktop/teste', output: '/Desktop/teste'}
```

Convert primitive values
```sh
node app.js -port 8080 --numbers="2", --allow="false" --private="true"
=> {port: 8080, numbers: 2, allow: false, private: true}
```

Multiple flags with -, example:
```shell
node app.js -rpqs
=> {r: true, p: true, q: true, s: true}
```

Apply value with =, or space:
```shell
node app.js --output '/Desktop/test', --config="test"
=> {output: '/Desktop/test', config: 'test
