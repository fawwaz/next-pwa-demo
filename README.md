# Background

The objective of this repo is just to create a minimum set of reproducible behavior of specific bug.

## How to repro

1. run `yarn` in the root
2. `yarn build` && `yarn start`
3. open `localhost:3000`
4. Click the button to trigger api request.
5. Set the network to offline
6. Click the button again

## Actual Behavior

1. The network failed to respond.

## Expected Behavior

1. Service worker should respond the request using cached response from previous request.
