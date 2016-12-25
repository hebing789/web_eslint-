#!/bin/bash
INFO='\033[36m';
NOR='\033[0m';
ERR='\033[31m';
br='dev';
echo -e "${INFO}run lint now ... just wait a moment ...${NOR}";
if [ $1 ]; then
  br=$1;
fi;

git diff origin/${br} > diff.log;
log=`cat diff.log | grep 'diff --git a/src'`;
if [[ -z ${log} ]]; then
  echo -e "${INFO}没有文件发生变化${NOR}";
else
  echo '';
  node ./lint-by-diff.js;
  echo -e "${INFO}done ...${NOR}";
fi;
rm diff.log change.log 2> /dev/null
read;