// scripts.js

function englishToPigLatin(englishWord) {
  if (isVowel(englishWord.charAt(0))) {
    return englishWord + 'ay';
  } else {
    return englishWord.slice(1) + englishWord.charAt(0) + 'ay';
  }
}

function isVowel(letter) {
  return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}

$(function() {
  $("form#translator").submit(function() {
    var englishWord = $("input#word").val();
    var translatedWord = englishToPigLatin(englishWord);

    $("#english").append(englishWord);
    $("#pig-latin").append(translatedWord);

    $("#translation").show();
    return false;
  });
});