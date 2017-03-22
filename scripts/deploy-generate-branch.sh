#!/usr/bin/env bash

VERSIONS=`git tag | tail -2 | cut -d "v" -f2 | cut -d "." -f1,2`
PREVIOUS_VER=`echo $VERSIONS | cut -d " " -f1`
ACTUAL_VER=`echo $VERSIONS | cut -d " " -f2`

if [ $PREVIOUS_VER != $ACTUAL_VER ]; then
   echo "[INFO]: generating new branch for version $ACTUAL_VER"
   # git checkout master
   # git checkout -b branch-${ACTUAL_VER}
   # git push -u origin branch-${ACTUAL_VER}
fi
