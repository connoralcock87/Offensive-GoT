$(document).ready(function () {

  $(".offensive").click(function() {

  var url = ('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + Math.floor(Math.random() * 2138));
    //2138 characters

  var $joke = $('p.joke');

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
      'crucified'];

    var verb2 = [
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
      'repeatedly'];

    var adverb2 = [
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
      'hungrily'];

    var adverb3 = [
      'innocently',
      'inquisitively',
      'irritably',
      'joyously',
      'judgementally',
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
      'chainsaw',
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
      'septum piercing'];

    var noun2 = [
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
      'Gucci Mane mixtape'];

    var noun3 = [
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
      'wombat'];

    var noun4 = [
      'doohickey',
      'KitchenAid mixer',
      'ball of yarn',
      'pocketwatch',
      'butternut squash'];

  var verb = verb1[Math.floor(Math.random() * 17)];
  var adverb = adverb1[Math.floor(Math.random() * 19)];
  var noun = noun1[Math.floor(Math.random() * 19)];

    $.get(url)
      .then(function(data) {
        var theName = data.name;
        if (theName.length > 1) {
          theName = data.name;
        } else {
          theName = data.aliases;
        }
        $joke.text(theName + " " + verb + " you " + adverb + " with a " + noun);
      });
  });
});
// format = Character + verb + 'you' + adverb + 'with a' + adjective + noun
