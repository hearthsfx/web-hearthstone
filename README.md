Web-based vanilla Hearthstone currently in development. 


run npm install


To-do List:

- Specify class types on objects with JSDoc. Add "// @ts-check" at the top of the file (or configure it globally through a jsconfig.json file at the root of the project). https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

- Get all card images and sound effects.

- Implement proper turn-based gameplay. Partially working but missing mana mechanics, AI that can attack, attacks that target the hero, among other things.

- Fix the mess of HTML and CSS. Start using something like storybook for the html/css elements, so they can be developed without having to play the entire game. https://storybook.js.org/docs/get-started

- Implement several screens (menu, game, card collection, etc.).

- Organize the content of javascript scripts into objects as much as possible and move non-server files into public, where they belong (also rename src to public).

- Create a functioning server. Current server.js is from a scrabble game I made-- will need major rewriting but there's a lot there that might be useful to start with. Try using C++ for backend instead of simple node-- there's some code in server.js related to this.

- Move most of the game stuff here into the server. This can wait until after the vs-AI tutorial base of the game is done (and it's okay to keep the cards and controllers and stuff required for the tutorial and maybe even for other AI games) but for player-vs-player all of this card and game data will need to be done server-side. Views can maybe stay client-side... need to figure it all out.