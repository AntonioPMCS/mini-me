# Stop execution if any command fails
$ErrorActionPreference = "Stop"

# Add all changes
git add .

# Open the default Git editor for commit message
git commit

# Push to the current branch
git push