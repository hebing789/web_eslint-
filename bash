#!/bin/bash
INFO='\033[36m';
NOR='\033[0m';
ERR='\033[31m';
br='dev';
echo -e "${INFO}run lint now ... just wait a moment ...${NOR}";
if [ $1 ]; then
  br=$1;
fi;

log=`git diff origin/${br} --name-only | grep js | grep src/`;
if [ -z "${log}" ]; then
  echo -e "${INFO}No file changed, exit now ${NOR}";
  exit 0;
fi;
node ./node_modules/eslint/bin/eslint.js $log | grep error -C 1000 --color=auto;