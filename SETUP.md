# Developer Setup

This project uses [Lerna][1] to publish multiple packages to [GitHub Packages][2].

## Install Lerna

1. `cd path/to/biostamp-js`
1. `npm install -g lerna`
1. `lerna bootstrap` 

## Compile brc3.proto to brc3.json

1. `cd packages/core`
1. `node compile.js`

## Compile web/sensor.min.js

1. `cd packages/web`
1. `npm run web`

## Publish packages

1. `cd path/to/biostamp-js`
1. `lerna publish`

[1]: https://github.com/lerna/lerna/
[2]: https://help.github.com/en/packages/publishing-and-managing-packages/about-github-packages