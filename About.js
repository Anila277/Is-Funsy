let quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    },
{
    quote: "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
    author: "Bob Marley",

},
{
    quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
    author: "Kenneth Branagh",

},
{
    quote: "Don’t cry because it’s over, smile because it happened",
    author: "Ludwig Jacobowski",

},
{
    quote: "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
    author: "Susan Sontag",

}
  ];
  
  const $btn = $('.btn');
  
  $btn.click(function(){
    let number = Math.floor(Math.random()*quotes.length);
    $('.quote').html('<span>"</span>' + quotes[number].quote + '<span></span>');
    $('.author').html('<span></span>' + quotes[number].author);
  });