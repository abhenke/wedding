# Wedding website

## Description

My wedding website created using Bazel, React, and Rollup. Hosted on Cloudflare

[wedding.meb.life](https://wedding.meb.life/)

## Development

```shell script
# build package
$ bazel build //:website

# spin up devserver with hot reload on port 9999
$ ibazel run //:devserver

# build release bundle
$ bazel build //:build_bundle

# build image
$ bazel run //:image

# Run docker image locally
$ docker run wedding/website:latest
```
