```javascript 
Describe: roll()
Test: "It should return a random number between 1 and 6, inclusively."
Code: roll();
Expected Output: 1, 2, 3, 4, 5, or 6


Describe: play(number);
Test: "If a player rolls 1, then turn stops (return false)."
Code: play(1);
Expected Output: false;

Describe: play(number);
Test:"If a player rolls anything else but 1"
Code: play()
Expected Output: 2, 3, 4, 5, or 6
```