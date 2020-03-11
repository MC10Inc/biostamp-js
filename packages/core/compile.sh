#!/bin/bash

rm -rf protoc-3.11.2-osx-x86_64

curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.11.2/protoc-3.11.2-osx-x86_64.zip -o protoc-3.11.2-osx-x86_64.zip

unzip protoc-3.11.2-osx-x86_64.zip -d protoc-3.11.2-osx-x86_64

./protoc-3.11.2-osx-x86_64/bin/protoc --js_out=import_style=commonjs,binary:. brc3.proto
