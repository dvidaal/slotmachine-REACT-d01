# Slot Machine

This project implements a simple Slot Machine game using React. The goal is to match specific combinations of figures to win prizes. Here are some important points to keep in mind:

- If two identical figures appear on the slots, €50 is added to the jackpot.
- If three identical figures appear on the slots, €100 is added to the jackpot.
- There is a jackpot that accumulates €5 every time no winning combination occurs.
- To win the jackpot, you need to get a combination of three 🍇 (grape) figures. When this combination appears, the player wins the current jackpot amount plus the accumulated jackpot.
- To start a new game, click on the "Reset" button.

## Technical Details

The project is implemented using React.

### To run the project locally, follow these steps:

- Clone the repository: `git clone <repository-url>`
- Navigate to the project directory: `cd slot-machine`
- Install the dependencies: `npm install`
- Start the development server:
  Make sure to `run npm install` in the project directory to install the necessary dependencies before starting the project.

The project includes tests implemented with Cypress. To run the Cypress tests, use the following command:

```
npm run cypress:open
```

Please note that you need to have Node.js and npm installed on your machine to run the project and tests.

Thank you!
