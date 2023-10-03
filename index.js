function scuberGreetingForFeet(someValue) {
  let isFree = false;
  if (someValue <= 400) {
    isFree = true;
  } else if (someValue > 2500) {
    return 'No can do.';
  } else if (someValue >= 400 && someValue <= 2000) {
    return 'That will be twenty bucks.';
  }
  return isFree === true ? 'This one is on me!' : 'I will gladly take your thirty bucks.';
}
function ternaryCheckCity(someCity) {
  let city = 'NYC';

  if (someCity === city) {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'thanks for everything':
      return 'Bye.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Thank you.';
  }
}