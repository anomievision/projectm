# ------------
# FUNCTIONS

# Clean directories
function Invoke-CleanBuild {
    param (
        [string]$Build,
        [string]$Dist = $null
    )

    # Clean up previous build files, if found
    if (Test-Path "$Build") {
        Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Build"
    }

    if ($Dist -and (Test-Path "$Dist")) {
        Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path "$Dist"
    }
}

# Build project for multiple purposes
function Start-Build {
    param (
        [string]$Build,
        [string]$Dist
    )

    Invoke-CleanBuild -Build $Build -Dist $Dist
    & "$($PSScriptRoot)\build.ps1" --auto --skip-clean --both
    Invoke-CleanBuild -Build $Build
    & "$($PSScriptRoot)\build.ps1" --auto --skip-clean --both --static
    Invoke-CleanBuild -Build $Build
    & "$($PSScriptRoot)\build.ps1" --auto --skip-clean --both --emscripten --pthreads
    Invoke-CleanBuild -Build $Build
}

# ------------
# Main

$Root = Get-Location
$Build = "$Root\build"
$Dist = "$Root\dist"

Start-Build -Build $Build -Dist $Dist
