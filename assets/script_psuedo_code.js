// State: what data do we need to keep track of?
var wins = 0;
var losses = 0;
var draws = 0;
var userChoice = "";
var computerChoice = "";

// What are the steps?

// 1. Show prompt asking for R,P,S (UI)
// 2. User submits selection (Event)
// HANDLE EVENT
// 3. Store value in userChoice (Update state)
// 4. Generate a random computer selection (Update state)
// 5. Alert with computer choice (UI)
// 6. Compare (Update State)
//    6.1 if user rock:
//      6.1.1 if cpu rock then add 1 to draws
//      6.1.2 if cpu scissors then add 1 to wins
//      6.1.3 if cpu paper then add one to losses
//    6.2 if user paper:
//      6.2.1 if cpu rock then add 1 to wins
//      6.2.2 if cpu scissors then add 1 to losses
//      6.2.3 if cpu paper then add one to draws
//    6.3 if user scissors:
//      6.3.1 if cpu rock then add 1 to losses
//      6.3.2 if cpu scissors then add 1 to draws
//      6.3.3 if cpu paper then add one to wins
// 7. Alert user of outcome (UI)
// 5. Alert user of scoreboard (UI)
// 6. Confirm play again (Event)
// HANDLE EVENT
//    6.1 if true, start over

/************************************************
 * Questions:
 * 1. How can we trigger the game so that we can restart it later?
 * 2. How do we randomly choose an answer?
 */
