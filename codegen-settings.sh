#!/bin/bash

# Kubernetes branch to get the OpenAPI spec from.
export KUBERNETES_BRANCH="release-1.19"

# client version for packaging and releasing. It can
# be different than SPEC_VERSION.
export CLIENT_VERSION="0.2.0"

# Name of the release package
export PACKAGE_NAME="cross-kube"
