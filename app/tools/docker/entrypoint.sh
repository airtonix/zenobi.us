#!/bin/bash

#
# Pre Launch Runtime Tasks
#
ENTRYPOINT_TASKS_DIR=${ENTRYPOINT_TASKS_DIR:-/tasks.d}
echo "[ENTRYPOINT]: -_- ${ENTRYPOINT_TASKS_DIR}"

if [ -d "$ENTRYPOINT_TASKS_DIR" ]
then
  for part in $ENTRYPOINT_TASKS_DIR/*; do
    echo "[ENTRYPOINT]: ? $part"

    filename=$(basename $part)
    task="${filename%.*}"
    declare task_ref="ENTRYPOINT_TASK_${task^^}"

    # if it's not executable
    if [[ ! -x $part ]] &&
    # if it's not enabled
    [[ -z "${!task_ref}" ]] {
      echo "[ENTRYPOINT]: x $part"
      continue
    }

    echo "[ENTRYPOINT]: --> $task_ref"
    . $part
  done
fi

#
# Launch CMD
#
echo "[ENTRYPOINT]: -> $@"
exec "$@"