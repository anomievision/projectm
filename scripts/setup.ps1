# ------------
# FUNCTIONS

# Check if dependencies are installed, and if not, inform the user where to download them from.
function Start-CheckDependencies {
    $Dependencies = @{
        "Git" = "https://git-scm.com/download/win"
        "Microsoft Visual C++ 2022" = "https://visualstudio.microsoft.com/downloads"
        "Vcpkg" = "https://github.com/microsoft/vcpkg"
        "CMake" = "https://cmake.org/download"
    }

    $InstalledApplications = Get-WmiObject -Class Win32_Product | Select-Object -Property Name

    $Dependencies.GetEnumerator() | ForEach-Object {
        $DependencyName = $_.Key
        $DependencyLink = $_.Value
        $ApplicationInstalled = $InstalledApplications | Where-Object { $_.Name -like "*$DependencyName*" }

        if ($ApplicationInstalled) {
            Write-Host "Found dependency: $DependencyName" -ForegroundColor Green
        }
        elseif (Get-Command $DependencyName -ErrorAction SilentlyContinue) {
            Write-Host "Found dependency: $DependencyName" -ForegroundColor Green
        }
        else {
            Write-Host "Missing dependency: $DependencyName. Download from: $DependencyLink" -ForegroundColor Red
            Write-Host "If installed, try checking your PATH environment variable." -ForegroundColor Red
        }
    }
}

# Initialize submodules
function Start-InitializeSubmodules {
    git submodule update --init --recursive
}

# ------------
# Main

$Auto = $false

# Skip prompt if --auto is passed
if ($args[0] -eq "--auto") {
    $Auto = $true
}

Start-CheckDependencies
Start-InitializeSubmodules
