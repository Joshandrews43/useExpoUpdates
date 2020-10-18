# useExpoUpdates

## Description

Expo has a standalone `expo-updates` module, however it only updates if a user force restarts their app.

This hook sets a listener on `AppState` to check for updates every time a user opens their app to ensure that the app is always up to date, and that updates are mandatory every time.

## Installation

In your expo project, run:

```
yarn add useExpoUpdates
```

Then, in your root file, add the hook at the top of your component:

```
import useExpoUpdates from 'use-expo-updates';

const App = () => {
  useExpoUpdates();
  ...
}
```

PRs for TypeScript and options are welcome!
