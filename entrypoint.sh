#!/bin/sh
echo "${ENTRYPOINT}.start"

echo "${ENTRYPOINT}.mergeProjectPackageJson"
node bin/merge-package-json.js

if [[ -f "bin/$1" ]]; then
    echo "${ENTRYPOINT}.exec $1 ${@:1}"
    exec bin/$1 ${@:1}
else
    echo "${ENTRYPOINT}.exec ${@}"
    exec "${@}"
fi