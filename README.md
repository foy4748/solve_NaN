# Solve NaN issue

If you pass a string in parseFloat() or parseInt() method that can't be converted to number,
then parseFloat / parseInt will return NaN

``` javascript
let example = parseFloat('<h1> Bank Balance $<span>00</span> </h1>')
console.log(example) // NaN
```

You should ensure that, only number as string or number is passed to 
parseFloat / parseInt

``` javascript
example = parseFloat("00");
console.log(example) // 0
```
