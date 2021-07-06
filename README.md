# How to run ?

```
npm i
npm test
```

# Error

The only test in this project fails with error:

```
  1) issue
       does not work - but, why ?:
     Error: Flag was not set !
      at Context.eval (http://localhost:61464/__cypress/tests?p=cypress/support/index.js:102:36)
```

# Discussion

I did not expect `Error: Flag was not set !` because,

the `beforeEach` hook sets the flag:

```js
// cypress/integration/start.spec.js

    beforeEach(() => {
        setFlag(true);
        ...
```

So, why is it that, the command does not read the correct value ?

```js
// cypress/support/commands.js


Cypress.Commands.add('checkFlagIsSet', () => {
    if (!getFlag()) throw new Error("Flag was not set !");
    ...
```