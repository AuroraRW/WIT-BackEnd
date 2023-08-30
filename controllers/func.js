const sayHello = {
    say:'hello'
}

const showText = ()=> {
    return 'Welcome cards app'
}

const sortArr = (arr)=>{
    let temp = arr.sort((a,b)=>{return b-a})
    return temp
}

module.exports = {sayHello, showText, sortArr}