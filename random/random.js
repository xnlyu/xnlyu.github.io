function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

$('#button').on('click',function(){
  const value =  $('#input').val() // 我要拿<input> <textarea> value
  const array = value.split('\n') // textarea 斷行的符號
  const lastIndex = array.length - 1 // [1,2,3] -> size = 3 -> getRandom(0,2)
  const index = getRandom(0, lastIndex) //array[0], array[1], array[2]
  const winner = array[index]
  $('#result').text(winner)
});
