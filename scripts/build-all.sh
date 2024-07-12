#!/bin/bash
set -e

# ------------
# FUNCTIONS

# Clean directories
clean_build() {
    BUILD="$1"
    DIST="$2"
    
    # Clean up previous build files, if found
    if [ -d "$BUILD" ]; then
        rm -rf "$BUILD"
    fi
    
    if [ -d "$DIST" ]; then
        rm -rf "$DIST"
    fi
}

# Build project for multiple purposes
build() {
    BUILD="$1"
    DIST="$2"
    
    clean_build "$BUILD" "$DIST"
    ./scripts/build.sh --auto --skip-clean --both
    clean_build "$BUILD"
    ./scripts/build.sh --auto --skip-clean --both --static
    clean_build "$BUILD"
    ./scripts/build.sh --auto --skip-clean --both --emscripten --pthreads
    clean_build "$BUILD"
}

# ------------
# Main

ROOT="$(pwd)"
BUILD="$ROOT/build"
DIST="$ROOT/dist"

build "$BUILD" "$DIST"
