$(document).ready(function() {

  $(".offensive").click(function() {

    var verb1 = [
      'impaled',
      'shanked',
      'stabbed',
      'cut',
      'sliced',
      'attacked',
      'assaulted',
      'ambushed',
      'bashed',
      'whacked',
      'bludgeoned',
      'walloped',
      'clubbed',
      'beat',
      'struck',
      'tortured',
      'crucified',
      'flogged',
      'lambasted',
      'pelted',
      'pummeled',
      'smothered',
      'besieged',
      'abused',
      'harassed',
      'molested',
      'fondled'];

    var thinks1 = [
      'thinks',
      'says',
      'believes',
      'tells you',
      'declares',
      'suggests',
      'maintains'];

    var relative1 = [
      'mother',
      'cousin',
      'sister',
      'brother',
      'father'];

    var adverb1 = [
      'accidentally',
      'angrily',
      'anxiously',
      'awkwardly',
      'blindly',
      'boastfully',
      'boldly',
      'thoughtfully',
      'briefly',
      'calmly',
      'carelessly',
      'cautiously',
      'cheerfully',
      'continually',
      'courageously',
      'daintily',
      'softly',
      'vivaciously',
      'repeatedly',
      'defiantly',
      'deliberately',
      'elegantly',
      'enthusiastically',
      'eventually',
      'fatally',
      'fiercely',
      'fondly',
      'unexpectedly',
      'frantically',
      'frightfully',
      'gently',
      'gladly',
      'gracefully',
      'greedily',
      'happily',
      'hastily',
      'silently',
      'hungrily',
      'innocently',
      'inquisitively',
      'irritably',
      'joyously',
      'judgmentally',
      'kindly',
      'lazily',
      'loudly',
      'lovingly',
      'madly',
      'maniacally',
      'merrily',
      'tenderly',
      'mysteriously',
      'stealthily',
      'nervously',
      'noisily',
      'obediently',
      'obnoxiously'];

    var noun1 = [
      'hardboiled egg',
      'hypodermic needle',
      'popsicle',
      'weinerschnitzel',
      'Hot Pocket',
      'deer antler',
      'mukluk',
      'waffle cone',
      'totem pole',
      'pocket flask',
      'sloth claw',
      'coffee pot',
      'bong',
      'tailpipe from a 1954 Chevrolet Bel Air',
      'can of Four Loko',
      'coffee table book about coffee tables',
      'Nickelback poster autographed by Chad Kroeger',
      'stick of butter',
      'septum piercing',
      'bunny slipper',
      'king size air mattress',
      'breast implant',
      'turkey wattle',
      'Thin Mint cookie',
      'Buffalo chicken wing',
      'head of lettuce',
      'jar of applesauce',
      'dreadlock',
      'bag of ketamine',
      'unicorn horn',
      'rabbit foot',
      'piece of dog poo',
      'newt',
      'potato',
      'funnel cake',
      'piece of cornbread',
      'thingamabob',
      'Gucci Mane mixtape',
      'bottle of Courvoisier VSOP',
      'Lionel Richie album on vinyl',
      'packet of grape Kool-Aid mix',
      'kitten mitton',
      'didgeridoo',
      'bowl of artichoke dip',
      'rubber chicken',
      'pizza cutter',
      'bouncy ball',
      'travel guide to Panama',
      'mini-fridge',
      'wicker basket',
      'guest pass to a nudist colony',
      'dingleberry',
      'giant squid tentacle',
      'Bop-It',
      'Ryan Leaf jersey',
      'wombat',
      'doohickey',
      'KitchenAid mixer',
      'ball of yarn',
      'pocketwatch',
      'butternut squash'];

    var verb = verb1[Math.floor(Math.random() * 27)];
    var adverb = adverb1[Math.floor(Math.random() * 57)];
    var noun = noun1[Math.floor(Math.random() * 61)];
    var thinks = thinks1[Math.floor(Math.random() * 7)];
    var relative = relative1[Math.floor(Math.random() * 5)];

    var charUrl = ('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + Math.floor(Math.random() * 2138));
    var houseUrl = ('https://cors-anywhere.herokuapp.com/http://www.anapioficeandfire.com/api/houses/' + Math.floor(Math.random() * 444));
    var $joke = $('p.joke');

    var requests = [
      $.get(charUrl),
      $.get(houseUrl)
    ];
    Promise.all(requests)
      .then(function(responses) {
        var theName = responses[0].name;
        if (theName.length > 1) {
          theName = responses[0].name;
        } else {
          theName = responses[0].aliases;
        }
        var thePlace = responses[1].region;
        if (thePlace.length > 1) {
          thePlace = responses[1].region;
        } else {
          thePlace = responses[1].name;
        }

        var violent = theName + " " + verb + " you " + adverb + " with a " + noun;
        var momJoke = theName + " " + thinks + " that your " + relative + " resembles a " + noun + " from " + thePlace;
        var goAway = theName + " tells you that you're being deported to " + thePlace;
        var sentence1 = [violent, violent, violent, momJoke, momJoke, goAway];
        var sentence = sentence1[Math.floor(Math.random() * 6)];

        $joke.text(sentence);
      });
  });
});
