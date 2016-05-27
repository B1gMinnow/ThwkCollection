'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var arr = [];
  for(var i of collection)
  	if(i % 2 === 0)
  		arr.push(i);

  	return arr;
}

module.exports = collect_all_even;
