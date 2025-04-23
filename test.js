process.nextTick(function(){
  console.log('hello')
})

setImmediate(function(){
  console.log('helloB')
})