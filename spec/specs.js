describe('englishToPigLatin', function() {
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    englishToPigLatin('apple').should.equal('appleay');
    englishToPigLatin('ice').should.equal('iceay');
  });

  it("takes the first letter and puts it at the end if the word starts with a consonant, and then adds 'ay'", function() {
    englishToPigLatin('kitty').should.equal('ittykay');
    englishToPigLatin('Kyle').should.equal('yleKay');
  })
});

describe('isVowel', function() {
  it("is true for a, e, i, o, and u", function() {
    isVowel('a').should.equal(true);
    isVowel('x').should.equal(false);
  });
});
