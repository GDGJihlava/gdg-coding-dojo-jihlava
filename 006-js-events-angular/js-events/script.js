
var souradnice = [];
var tableElement = document.querySelector('#beers');
var rows = tableElement.querySelectorAll('tr');
var beerData = Array.prototype.reduce.call(rows, parser, []);

var listener = function(event) {
  if(event.target.cellIndex == 0 ){
    firstColClick(event)
  }
  else if(event.target.cellIndex == 2){
    thirdColClick(event)
  }
 };
tableElement.addEventListener('click', listener);


function parser(data, row, index) {
  if (index === 0) {
    return data;
  }

  var rowData = {
    index: row.rowIndex,
    name: row.children[0].innerText + ' ' + row.children[1].innerText,
    alkohol: parseFloat(row.children[2].innerText)
  };

  data.push(rowData);
  return data;
}

function firstColClick(event){
  event.target.style.background = "#f0f0f0"

  console.log("sloupec: ", event.target.cellIndex)
  console.log("radek: ", event.target.parentElement.rowIndex)

  souradnice.push([event.target.cellIndex, event.target.parentElement.rowIndex]);
  console.log(souradnice);
}

function thirdColClick(event){
  var alkohol = parseInt(event.target.innerText);

  var forResult = [];
  for(var i=0; i< beerData.length; i++){
    if(parseInt(beerData[i].alkohol) === alkohol){
      forResult.push(beerData[i].name )
    }
  }

  //------------------
  var filtered = beerData.filter(function (beer) {
    return parseInt(beer.alkohol) === alkohol
  });

  var filterMapResult =  filtered.map(function (beer) {
    return beer.name
  });
  //------------------

  var reduceResult = beerData.reduce(function (acc, beer) {
    if(parseInt(beer.alkohol) === alkohol){
      acc.push(beer.name);
    }
    return acc;
  }, []);

//------------------

  console.log(filterMapResult);
  console.log(reduceResult);
  console.log(forResult);
}

