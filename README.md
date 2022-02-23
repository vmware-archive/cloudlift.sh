<p align="center">
  LOGO
</p>

# This repository is no longer actively maintained by VMware, Inc.

## Introduction

This project contains the Markdown files that get automatically generated as documentation and guides for the [Cloud Lift Website](https://cloudlift.sh/) site.

## Building

You'll need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) installed globally. Note that, for Node, you need `version 10`, not the latest version.

```bash
# Init
yarn install        # Install dependencies

# Linter / Prettier
yarn run lint       # Linter
yarn run fix        # Fix linting errors

# Dev
yarn start          # Run dev

# Prod
yarn build          # Run dev
yarn serve          # Serve the prod build
```

## Contributing

We welcome contributions!
All documentation for this project is written using `Markdown`.

```

## Q&A and issue tracking

If you have any feedback, additions, or changes to the documentation or guides, don't hesitate to [add an issue](https://github.com/pivotal-spring-to-cloud-website/issues).

## Code of Conduct

This project is governed by the [Spring Code of Conduct](CODE_OF_CONDUCT.adoc). By participating, you are expected to uphold this code of conduct. Please report unacceptable behavior to spring-code-of-conduct@pivotal.io.

## License

Lift is released under version 2.0 of the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).
```
