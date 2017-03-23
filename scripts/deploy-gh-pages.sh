#!/bin/bash
set -u -e -o pipefail # Exit with nonzero exit code if anything fails

# Vars
TARGET_BRANCH="gh-pages"
COMMIT_AUTHOR_NAME="Travis CI"
COMMIT_AUTHOR_EMAIL="travis@travis-ci.org"
GH_PAGES_FOLDER="gh-pages"
REPO="https://$GITHUB_TOKEN@github.com/$GITHUB_REPO.git"

VERSION=`cat node_modules/@stratio/egeo/package.json | jq -r '.version'`


# Didn't check anything because only launch gh-pages and its caller script responsability

# 1º Move get actual gh-pages branch (create if not exists)
git clone $REPO --branch=$TARGET_BRANCH $GH_PAGES_FOLDER --quiet # Clone repo into $GH_PAGES_FOLDER

# 2º Clean $GH_PAGES_FOLDER existing contents
rm -rf $GH_PAGES_FOLDER/$VERSION || exit 0

# 3º Generate source and copy to destination

# npm run build  # Generate
DESTINATION=$GH_PAGES_FOLDER/$VERSION
echo $DESTINATION
mkdir $DESTINATION
rsync -r $GH_PAGES_SOURCE_FOLDER/ $DESTINATION # Copy

# 4º Add user info
cd $GH_PAGES_FOLDER/$VERSION
git config user.name "$COMMIT_AUTHOR_NAME"
git config user.email "$COMMIT_AUTHOR_EMAIL"


# 5º Commit and push if are changes.
git add .

# Commit the "changes"
git commit -m "version $VERSION on `date +'%Y-%m-%d %H:%M:%S'`"

# Now we can push.
git config --global push.default simple
git push --quiet
