<img width="481" height="120" alt="SQUEEZE!" src="https://github.com/user-attachments/assets/9781771d-15a2-4448-93a6-7f95024fce13" />

Lemonade stand economy simulator game built for the web using JavaScript, HTML, and CSS.

## Overview and Credits
*SQUEEZE!* was designed and developed over the course of 8 weeks with a team of 4 people utilizing the Scrum Agile framework and Jira:

  - **dd-development (Myself):** UI/menu design, animations, main game loop, inventory system, level system, ratings/statistics system, asset creation, project design, documentation

  - **Andrea Munoz:** Created skeleton for recipe menu, project design, documentation

  - **Simran Batra:** Asset creation, project design, documentation

  - **Alia Zayyad:** Project design, documentation

Each sprint was 2 weeks long. We had daily Scrum meetings to discuss progress regarding current tasks and to plan for future issues/stories to add to the project backlog.

Due to time constraints and an unfamiliarity with JavaScript/web-development among the rest of the team, I took on a majority of the actual development workload while the other team members helped in any way they
could (asset creation, documentation, diagramming, etc.). Overall, we were able to work together to create a functional MVP for the game that contains 3 levels and serves as a demo for what features and mechanics
could be expanded upon in the future.

## Design and Usage
1. ***MAKE SURE AUTOPLAY IS ENABLED (REFRESH AFTER ENABLING) IN YOUR BROWSER IN ORDER TO HEAR THE MUSIC.***
2. As a front-end application with no server or database, *SQUEEZE!* can be played locally by simply opening the 0main.html file in any web broswer after cloning or saving this repository.
3. All of the JavaScript written for the game is contained in the 0main.js file, and styling/animations for the game environment is contained in 0main.css while styling for the menus is in 0menus.css.
4. After beginning the game, the user must click on the group of ingredients on the lemonade stand in order to bring up the ingredient purchasing menu. The user must thoughtfully use their starting cash to
purchase the correct amount of ingredients in order to make lemonade with the current recipe (check the numbers on the left side of the screen to make sure you have enough of each ingredient). *Try to get
the minimum amount of each ingredient required; don't over-purchase!*
6. If the user runs out of money and cannot make lemonade with the current amount of ingredients the have in their inventory, they will lose the game.
7. Once you have enough ingredients, you must open the recipe/price menu by either clicking on the lemonade pitcher on the top-left of the screen or the dollar amount on the actual lemonade stand.
8. Here you can alter the amount of each ingredient you use in the recipe for your lemonade to make it sweeter or more sour. You can also change the selling price for your lemonade. *Note that changing the recipe
will get rid of all of the lemonade you currently have in your inventory, and you will need to make a new batch!*
9. Customers will be willing to pay more based on the current demand for a certain type of lemonade (your financial advisor will tell you what type of lemonade is in demand at the beginning of each level). If your
price is too high or your lemonade recipe does not match the tastes of the customers, your public approval rating (top-right of the screen) will go down. If your lemonade is reasonably priced and meets the
demands of the customers, your public approval rating will go up.
11. If a customer approaches the stand and you do not have any lemonade in your inventory to sell them, they will get upset and walk away from the stand, lowering your public approval rating in the process.
12. The goal of the game is to match the tastes of the customers while maximizing profits and increasing your public approval rating.
13. All of the interactable elements of the game were implemented using event listeners and handlers, while the level progression and customer spawning systems were implemented using asynchronous timing functions.
14. All of the animations were implemented using CSS keyframes and animated GIF assets.

## Examples
<img width="1920" height="906" alt="gameplay 1" src="https://github.com/user-attachments/assets/77bc5112-040e-427f-b2dc-2195ab8023b7" />

<img width="1920" height="909" alt="gameplay 2" src="https://github.com/user-attachments/assets/c8f70bdf-31d5-4d17-a361-036d8626340f" />

<img width="1920" height="904" alt="gameplay 3" src="https://github.com/user-attachments/assets/e6946e18-8508-440f-b98f-da0786f87137" />

<img width="1920" height="899" alt="gameplay 4" src="https://github.com/user-attachments/assets/c71cd848-12b7-4c9d-9bd9-037e5c8ea43b" />

<img width="1920" height="911" alt="gameplay 5" src="https://github.com/user-attachments/assets/10fc7b53-1a26-4f1d-a6c9-d8d43fb151f3" />
