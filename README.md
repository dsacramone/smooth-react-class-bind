# redux-smooth-storage

## Synopsis

Quick way to autobind your React ES6 classes w/o having to manually do it in the constructor.

## Usage
Please go to npm, and pick up the package.
<ul>
    <li> Import package at top of your page
    <li> Follow instructions below
</ul>
<pre><code>

// your react imports etc..

import autoBindMethods     from 'smooth-react-class-bind'

class yourClass extends Component {
    constructor() {
        super()

        autoBindMethods(this)
    }
}

</code></pre>

## Tests
TODO: this is immensely important, but I just didn't have the time to implement atm.
I will revisit shortly.

## License
MIT

--------------------------------------------------------------------------------------------
## Optional Arguments

## append
    @array
    allows for binding of mixin methods, just pass in method name.
   
## exclude
    @array
    pass in method names you do not want bound to the this context


## include
    @array
    pass only the methods you want to bind to this. Using this array will take precedence. If you pass
       this in, you will only bind what is in this array - not all the methods on 'this' context.
       You might want to target just one method, or two w/o binding a huge array of methods.
--------------------------------------------------------------------------------------------
## How to use?

 note: assuming you installed the package and imported it with the name of: autoBindMethods
<pre><code>
*I want to bind all methods in my React Class:

constructor() {
    super()
    autoBindMethods(this)
}


*I want to bind only the method 'getProducts'

constructor() {
    super()
    autoBindMethods(this, {include: ['getProducts']})
}


*I want to exclude only the method 'getProducts', from binding all other methods

constructor() {
    super()
    autoBindMethods(this, {exclude: ['getProducts']})
}


</code></pre>

If you notice any issues, please let me know. Thanks!


    

