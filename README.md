# Cyber Proto

This repository contains three different native clients ([JS](./js/), [Rust](./rust/), [Python](./python/)) to interact with cyber protocol. These clients are automatically generated using protoc compiler and they are individually published to the different code repositories.

## Development

Each of the libraries have its own `Makefile` that contain 4 main entry commands:

- `init` : initialize the github submoudles,
- `proto-gen` : generate the proto files,
- `build` : build the project abstracting each language peculiarities,
- `publish` : push the build to the code repository to be used by anyone (abstracting the publish peculiarities).
