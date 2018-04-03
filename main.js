console.log('Testing ...');

const dev = document.getElementById('test');

console.log('Testing ...: ', dev);



function countdown(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
}

countdown(10);




setTimeout(function(){
    console.log('animate line 1')

    setTimeout(function(){
        console.log('animate line 2')

        setTimeout(function(){
            console.log('animate line 3')

            setTimeout(function(){
                console.log('animate line 4')
            }, 1000)

        }, 1000)

    }, 1000)

}, 1000)


var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'foo');
});

promise1.then(function(){
    console.log('promise1 animate line 1')
}).then(function(){
    console.log('promise1 animate line 2')
}).then(function(){
    console.log('promise1 animate line 3')
}).then(function(){
    console.log('promise1 animate line 4')
})


fetch('https://greencommunitylaundry.herokuapp.com/api/products').then(function(respose){
    console.log('respose', respose)
    return respose.json()
}).then(function(products){
    console.log('products', products)
}).catch(function(error){
    console.log('error', error)
});


function clickHandel(e){
    console.log('e', e.id)
}
