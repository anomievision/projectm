# Script parameters
param ([string]$BuildType = "Debug")

# Constants
$Root = Get-Location
$Build = "$Root\build"
$BuildType="Release"
$Release="${ROOT}/release"
$Toolchain = "$Env:EMSDK\upstream\emscripten\cmake\Modules\Platform\Emscripten.cmake"

# Clean up previous build files
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Build"
New-Item -Path "$Build" -ItemType Directory | Out-Null

# Configure based on build type
if ( $BuildType -eq "--release" -Or $BuildType -eq "--Release") {
    # Clean up previous build files
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Build"
    New-Item -Path "$Build" -ItemType Directory | Out-Null

    # Configure build
    emcmake cmake `
        -G "MinGW Makefiles" `
        -S "$Root" `
        -B "$Build" `
        -DCMAKE_BUILD_TYPE="Debug" `
        -DCMAKE_TOOLCHAIN_FILE="$Toolchain" `
        -DCMAKE_INSTALL_PREFIX="$Root\dist\emscripten" `
        -DENABLE_PLAYLIST=OFF

    # Build & install
    Set-Location $Build
    emmake make install -j 4
    Set-Location $Root

    # ---------------------------------

    # Clean up previous build files
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Build"
    New-Item -Path "$Build" -ItemType Directory | Out-Null

    # Configure build
    emcmake cmake `
        -G "MinGW Makefiles" `
        -S "$Root" `
        -B "$Build" `
        -DCMAKE_BUILD_TYPE="Release" `
        -DCMAKE_TOOLCHAIN_FILE="$Toolchain" `
        -DCMAKE_INSTALL_PREFIX="$Root\dist\emscripten" `
        -DENABLE_PLAYLIST=OFF

    # Build & install
    Set-Location $Build
    emmake make install -j 4
    Set-Location $Root
}
else {
    # Clean up previous build files
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Build"
    New-Item -Path "$Build" -ItemType Directory | Out-Null

    # Configure build
    emcmake cmake `
        -G "MinGW Makefiles" `
        -S "$Root" `
        -B "$Build" `
        -DCMAKE_BUILD_TYPE="Debug" `
        -DCMAKE_TOOLCHAIN_FILE="$Toolchain" `
        -DCMAKE_INSTALL_PREFIX="$Root\dist\emscripten" `
        -DCMAKE_VERBOSE_MAKEFILE=YES

    # Build & install
    Set-Location $Build
    emmake make install -j 4
    Set-Location $Root

    # ---------------------------------

    # Clean up previous build files
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Build"
    New-Item -Path "$Build" -ItemType Directory | Out-Null

    # Configure build
    emcmake cmake `
        -G "MinGW Makefiles" `
        -S "$Root" `
        -B "$Build" `
        -DCMAKE_BUILD_TYPE="Release" `
        -DCMAKE_TOOLCHAIN_FILE="$Toolchain" `
        -DCMAKE_INSTALL_PREFIX="$Root\dist\emscripten" `
        -DCMAKE_VERBOSE_MAKEFILE=YES

    # Build & install
    Set-Location $Build
    emmake make install -j 4
    Set-Location $Root
}