
var one = 0
var two = 1
var three = 2
var four = 3
var five = 4
var TotalScore = 1000 // initial score
var mainWebpage = "file:///Users/muditjain/Desktop/HackTX/Final%20Trial/main.html"
var crashWebpage = "file:///Users/muditjain/Desktop/HackTX/Final%20Trial/crash.html"
var RandomNumber = 0
var SpeedSetter = 500
var FinalScore = 0
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 
 function crash()
 {
    console.log(RandomNumber)
   window.location.href = crashWebpage;
   console.log(RandomNumber)

   const finalscoreDiv = document.getElementById('finalScore');
   finalscoreDiv.textContent = "Your Final Score is :"+(FinalScore);
   sleep(10000)
   restart()
 }

function stopButton()
{
    FinalScore = RandomNumber * 10
    var videoPlayer = document.getElementById('myVideo');
    videoPlayer.pause()
    restart()
}
function restart()
{
    one = 1
    two = 2
    three = 3
    four = 4
    five = 5

    window.location.href = mainWebpage;
    const finalscoreDiv = document.getElementById('finalScore');
    finalscoreDiv.textContent = "You have recieved a total of 8"



}
function getRandomNumber()
{
    var precision = 1; // 2 decimals
    var randomnum =
      Math.floor(
        Math.random() * (50 * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision);
      console.log(randomnum)
      return randomnum;
}

function controller()
{
    RandomNumber = getRandomNumber();
    console.log(FinalScore)
    var videoPlayer = document.getElementById('myVideo');
    videoPlayer.play()
    hello();
}
async function hello()
{

    if(two == RandomNumber || five == 50)
    {
        crash()
    }
    const divOf1x = document.getElementById('1%');
    const divOf2x = document.getElementById('2%');
    const divOf3x = document.getElementById('3%');
    const divOf4x = document.getElementById('4%');
    const divOf5x = document.getElementById('5%');
    const divOf6x = document.getElementById('6%');

    const divOf7x = document.getElementById('7%');


    divOf1x.textContent = (five++)+"%"
    divOf2x.textContent = (four++)+"%"
    divOf3x.textContent = (three++)+"%"
    divOf4x.textContent = (two++)+"%"
    divOf5x.textContent = (one++)+"%"



    SpeedSetter = SpeedSetter - SpeedSetter*(0.015)
    await new Promise(r => setTimeout(r, SpeedSetter));
    hello()

}






