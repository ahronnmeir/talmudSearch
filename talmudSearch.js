async function load() {

  const requestURL =
    "./shas_indexed.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const fullIndex = await response.json();
  
  let resultArr = searchLines("\u05ea\u05dc\u05d2\u05d0", fullIndex.words)
  console.log(resultArr)
}
  
function searchLines(searchTerm, arr, firstLine = 0, lastLine = arr.length - 1 ) {
  console.log(firstLine, lastLine)
  var middleLine = Math.floor((lastLine + firstLine) / 2)
  
  if (lastLine - firstLine == 1) {
    return searchTerm
    if (arr[firstLine][0]  == searchTerm) {
      return arrOfNearestAnswers(arr, middleLine)
    } else if (arr[lastLine][0]  == searchTerm) {
      return arrOfNearestAnswers(arr, middleLine)
    } else {
      
      console.log(arr[firstLine][0], arr[lastLine][0], "error")
    }
  }
  
  if (arr[middleLine][0] == searchTerm) {
    console.log(arrOfNearestAnswers(arr, middleLine), middleLine, searchTerm)
    return arrOfNearestAnswers(arr, middleLine)
  }
  if (checkIfGreater(arr[middleLine][0] , searchTerm)) {
    searchLines(searchTerm, arr, firstLine, middleLine)
  } else {
    searchLines(searchTerm, arr, middleLine, lastLine)
  }
}

function checkIfGreater(word1, word2) {
  if (convert_hebrew_to_english(word1) > convert_hebrew_to_english(word2)) {
    return true
  } else {
    return false
  }
  
}
function arrOfNearestAnswers(arr, result) {
  return [result]
}


let hebrew_to_english_alphabet = {"\u05d0": "a", "\u05d1": "b", "\u05d2": "c", "\u05d3": "d", "\u05d4": "e", "\u05d5": "f", "\u05d6": "g", "\u05d7": "h", "\u05d8": "i", "\u05d9": "j", "\u05db": "k", "\u05da": "k", "\u05dc": "l", "\u05de": "m", "\u05dd": "m", "\u05e0": "n", "\u05df": "n", "\u05e1": "o", "\u05e2": "p", "\u05e4": "q", "\u05e3": "q", "\u05e6": "r", "\u05e5": "r", "\u05e7": "s", "\u05e8": "t", "\u05e9": "u", "\u05ea": "v"}


function convert_hebrew_to_english(word) {
  var englishEquivalent = ""
  for (let i=0; i < word.length;i++) {

    var letter = word[i]
    if (letter in hebrew_to_english_alphabet) {
      englishEquivalent += hebrew_to_english_alphabet[letter]
    }
  }

  return englishEquivalent
}




//make ability to see if words are less than or greater than others
//go to halfway point and decide whether or not to look earlier or later
//if equal than check earlier and then later to see when not equal
//take indexes of first and last and make array of results
//
//decode result src
//display talmud piece
//display readable src
//
//add ability to search multiple words
//add ability to check next src location


load()