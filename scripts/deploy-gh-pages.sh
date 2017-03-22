#!/bin/bash
set -u -e -o pipefail # Exit with nonzero exit code if anything fails

TARGET_BRANCH="gh-pages"
VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')

COMMIT_AUTHOR_NAME="Travis CI"
COMMIT_AUTHOR_EMAIL="travis@travis-ci.org"
GH_PAGES_FOLDER="gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    echo "[INFO]: Skipping deploy; just doing a build."
    exit 0
else
   if [ "$TRAVIS_TAG" != "" ]; then
      echo "==> Generating gh-pages for $TRAVIS_TAG <=="
   else
      echo "==> Generating gh-pages for $TRAVIS_BRANCH <=="
   fi
fi

# REPO information
REPO="https://$GITHUB_TOKEN@github.com/$GITHUB_REPO.git"

# Clone the existing gh-pages for this repo into $GH_PAGES_FOLDER
git clone $REPO --branch=$TARGET_BRANCH $GH_PAGES_FOLDER

# Clean $GH_PAGES_FOLDER existing contents
rm -rf $GH_PAGES_FOLDER/$VERSION || exit 0

# Create new folder and generate version
mkdir $GH_PAGES_FOLDER/$VERSION
cp dist/index.html $GH_PAGES_FOLDER/$VERSION

# Now add user info
cd $GH_PAGES_FOLDER
git config user.name "$COMMIT_AUTHOR_NAME"
git config user.email "$COMMIT_AUTHOR_EMAIL"

git add .

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if [ -z `git diff --exit-code $TARGET_BRANCH` ]; then
    echo "[INFO]: No changes to the output on this push; exiting."
    exit 0
fi

# Commit the "changes"
git commit -m "version $VERSION on `date +'%Y-%m-%d %H:%M:%S'`"

# Now we can push.
git push
