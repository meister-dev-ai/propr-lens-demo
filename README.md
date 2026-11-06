# ProPR Lens demo

Demo repository of Meister DEV for ProPR code reviews in the browser's side panel. It holds a small TypeScript
module that computes statistics over review durations.

## Try the demo

1. Install ProPR Lens from the distribution link supplied by Meister DEV.
2. Open the extension settings and add `https://at1.propr.meister-dev.com`.
3. Leave the advanced API address empty and sign in with the ProPR demo account supplied to you.
4. Add `https://github.com` as a GitHub source-control host for that installation.
5. Open the open pull request of this repository and open the ProPR side panel.

The pull request can be viewed without a GitHub account. The ProPR review data requires the demo account.
This repository does not contain the source code of the browser extension.

## Run the tests

Use Node.js 24 or newer. No dependency installation is needed.

```sh
npm test
```

Copyright (c) 2026 Meister DEV UG (haftungsbeschränkt). All rights reserved.
