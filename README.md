# Quiznos 
This assignment was hard for me to understand on how to make JS create multiple questions. I was stuck in what element or functions to start with to activate the next question. I get overwhelmed from JS after awhile when I look back at activities and don't know where to start. I did some research on https://www.w3schools.com/ to help wiht my bugs in the js code. I only got so far..

Grader Feedback....
Anthony, 

Thanks for submitting this assignment!

You have a good start here, this is a great assignment to introduce you to multiple functions all performing different tasks, while working together. I see that you've declared several functions already. Great work!

I noticed that your first question is hardcoded into your HTML. Create an object that stores each of your questions with their associated correct answer. You can then create a function that will cycle through the questions. You can use a variable that represents the index of this object so that you can keep track which is the current question. You can use a function that triggers the display change of each question using the index I mentioned. For example: question.textContext = questions[INDEX].title or something along those lines. 

On line 48, you're invoking your countdown() function, which invokes on page load, instead of when the user starts the quiz. You can invoke this function in your startQuiz() function so that the timer only begins went he user is ready. On line 9, you have a timeLeft variable. I'd recommend declaring this variable globally so that you can access it in other places besides your countdown() function. 

At this point, we'll have to set up deducting time from the timer if the user answers questions incorrectly. There are several ways to do this. I'd recommend looking into "this". Using "this", you can see which specific button (answers) the user clicked, you can then compare that button with the correct answer defined in your questions object. Then, you can subtract however much time from the timeLeft variable that is ideally globally defined. 

The last functionality is to store the user's score in local storage. I'd recommend creating an input element and button and hiding them by default. Then, a function that modifies the CSS display properties to display them when the function is called. You can invoke this function if all the questions are answered (using the index mentioned above) or if the timeLeft variable is less than 1. You can use the user's name as the keyName, and the timeLeft variable as the keyValue. 

This is a tough assignment, but very valuable in terms of javaScripts principles. If your instructional staff permits resubmissions, I encourage you to revisit this one so that you can further build your skills. Keep up the great work!

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
