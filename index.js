// Function: saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

// Function: mondayWork
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
// Function: wrapAdjective
function wrapAdjective(visualFlair = "*") {
    return function (adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }
  
