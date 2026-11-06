# ProPR Lens demo

A public, synthetic code fixture for demonstrating ProPR code reviews in the browser's side panel.
The open demo pull request contains deliberate defects for a real ProPR review to identify.

## Try the demo

1. Install ProPR Lens from the distribution link supplied by Meister DEV.
2. Open the extension settings and add `https://at1.propr.meister-dev.com`.
3. Leave the advanced API address empty and sign in with the dedicated ProPR demo account supplied privately.
4. Add `https://github.com` as a GitHub source-control host for that installation.
5. Open this repository's demo pull request and open the ProPR side panel.

The public GitHub pull request can be viewed without a GitHub account. ProPR review data requires the separate
demo account. This repository is a demo fixture; it is not the browser extension's source code.

The repository alone does not provide a configured ProPR demo. A completed review and the dedicated reviewer
account must be prepared on ProPR before the store test is ready.

## Demo boundaries

The store demo is designed to display a saved review. Automatic reviewing must be disabled for its ProPR client,
and that client must have no usable AI configuration or AI credentials when reviewers receive access. The demo
account belongs only to the demo organization/workspace. `ClientUser` does not permit configuration changes, but
can request or restart reviews; it is not a strictly read-only role.

## Run the fixture

Use Node.js 24 or newer. No dependency installation is needed.

```sh
npm test
```

Tests on `main` pass. The demo PR intentionally introduces bugs and regression tests that fail to reproduce them.
These expected fixture failures are separate from the extension's own tests.

Copyright (c) 2026 Meister DEV UG (haftungsbeschränkt). All rights reserved.
