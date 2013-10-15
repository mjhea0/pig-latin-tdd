describe('englishToPigLatin', function() {
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    englishToPigLatin('apple').should.equal('appleay');
  });
});

describe('englishToPigLatin', function() {
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    englishToPigLatin('apple').should.equal('appleay');
  });

  it("takes the first letter and puts it at the end if the word starts with a consonant, and then adds 'ay'", function() {
    englishToPigLatin('kitty').should.equal('ittykay');
  })
});

describe('isVowel', function() {
  it("is true for a, e, i, o, and u", function() {
    isVowel('a').should.equal(true);
  });
});