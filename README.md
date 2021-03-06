Small project implementing Tic-tac-toe in React. Hosted with Github pages (See: [demo](https://timimsms.github.io/react_tic_tac_toe/)).

# Overview

## Initial Build

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Origins

Small tutorial application creating from React's main tutorial:

- [React: Tic-tac-toe Tutorial](https://reactjs.org/tutorial/tutorial.html#what-are-we-building)

From this basic demo, the following additions were implemented.

## Additions

- [x] Tracks player state per turn.
- [x] States which player went per turn and which square was taken.
- [x] Indicate when game is "Over" or locked (i.e., no moves left).
- [x] Better modularize areas of application (index.jsx) into own files.
- [x] "New Game" button.

## Next Steps

- [ ] Add test coverage with [Jest](https://jestjs.io/).

## More Projects

- [ ] Running total of how many games each player has won/lost.
- [ ] Custom player names.
- [ ] Custom sized boards.
- [ ] Custom number of players.
- [ ] Add a level of polish by integrating a UI kit and/or more spruced up CSS.
- [ ] "Lock" the UI to make it more clear the game is over when no moves remain.
- [ ] Ability to host example site somewhere demo'ing the code.

# Screenshots

![New Game](/docs/screenshots/00_new_game.png)
![First Move](/docs/screenshots/01_first_move.png)
![Winner!](/docs/screenshots/02_winner_a.png)
![Winner (again)!](/docs/screenshots/03_winner_b.png)
![Game Over](/docs/screenshots/04_game_over.png)

# Development

## ESLint

Run the following to check the main application files JS code syntax:

```bash
eslint src/index.jsx
```

## Testing

`TODO` - Add information around testing.

# Running the Application

## Available Scripts

In the project directory, you can run:

|   Command   | Description & More Information |
|-------------|--------------------------------|
| `npm start` | [http://localhost:3000](http://localhost:3000) (local server)
| `npm test`  | [running tests](https://facebook.github.io/create-react-app/docs/running-tests) | |
| `npm run build` | [deployment](https://facebook.github.io/create-react-app/docs/deployment) |
| `npm run eject` | N/A |

See the [Wiki page on **Available Scripts**](https://github.com/timimsms/react_tic_tac_toe/wiki/Available-Scripts).
