// Need to completely rewrite this with actual selectors.

$(document).ready(function(){
  
  let index;
  let randomQuote = "A quote to be.";
  let randomAuthor = "(Though it may not be free.)";
  
  $(".quote-active").on("click", function() {
    let quotesDatabase = [
      "What's on your mind, if you will allow the overstatement?", 
      "It is often merely for an excuse that we say things are impossible.", 
      "Every English poet should master the rules of grammar before he attempts to bend or break them.", 
      "Sometimes I've believed as many as six impossible things before breakfast.", 
      "The English language was carefully, carefully cobbled together by three blind dudes and a German dictionary.", 
      "A magician pulls rabbits out of hats. An experimental psychologist pulls habits out of rats.", 
      "If the human mind was simple enough to understand, we'd be too simple to understand it.", 
      "They say that love is forever, your forever is all that I need.", 
      "When you have today you should say all that you have to say.", 
      "Success is the best revenge for anything.", 
      "The worst things in life come free to us.", 
      "Negativity isn't the way to go. Smile more, eat some chocolate.", 
      "Reality is a lovely place, but I wouldn't want to live there.", 
      "'Cause I was born to tell you I love you, and I am torn to do what I have to.", 
      "In the End, we will remember not the words of our enemies, but the silence of our friends.", 
      "Next to the Word of God, the noble art of music is the greastest treasure in the world.", 
      "God writes the Bible not in the Bible alone, but also on the trees, and in the flowers and clouds and stars.", 
      "There is no more lovely, friendly and charming relationship, communion or company than a good marriage.", 
      "For in the true nature of things, if we rightly consider, every green tree is far more glorious than if it were made of gold and silver.", 
      "You are not only responsible for what you say, but also for what you do not say.", 
      "Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.", 
      "So do not be afraid of them, for there is nothing concealed that will not be disclosed, or hidden that will not be made known.", 
      "In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made; without him nothing was made that has been made. In him was life, and that life was the light of all mankind. The light shines in the darkness, and the darkness has not overcome it.", 
      "If you sit back and spend too much time feeling good about what you did in the past, you're going to come up short next time.", 
      "Mental toughness is doing the right thing for the team when it's not the best thing for you.", 
      "There are no shortcuts to building a team each season. You build the foundation brick by brick.", 
      "You can't put a limit on anything."
    ]

    let authorsDatabase = [
      "- Fred Allen", 
      "- Francois de La Rochefoucauld", 
      "- Robert Graves", 
      "- Lewis Carroll", 
      "- Dave Kellett", 
      "- Anonymous", 
      "- Emerson Pugh", 
      "- Sleeping With Sirens", 
      "- Sleeping with Sirens", 
      "- Ed Sheeran", 
      "- Ed Sheeran", 
      "- Ed Sheeran", 
      "- Owl City", 
      "- Secondhand Serenade", 
      "- Martin Luther King Jr.", 
      "- Martin Luther",       
      "- Martin Luther", 
      "- Martin Luther", 
      "- Martin Luther", 
      "- Martin Luther", 
      "- Jesus, the Christ", 
      "- Jesus, the Christ", 
      "- Gospel of John",      
      "- Bill Belichick", 
      "- Bill Belichick", 
      "- Bill Belichick", 
      "- Michael Phelps"
    ]

    let index = Math.floor(Math.random()*quotesDatabase.length);
    let randomQuote = quotesDatabase[index];
    let randomAuthor = authorsDatabase[index];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  });
  
  $(".tweet-active").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text= " + '"' + randomQuote + '"' + " " + randomAuthor);
  });
});