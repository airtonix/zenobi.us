#!/bin/bash

# Add local user
# Either use the LOCAL_USER_ID if passed in at runtime or
# fallback
log () {
    echo "[ENTRYPOINT -> USER]: $@"
}

USER_ID=${LOCAL_USER_ID:-9001}
USER_NAME=${LOCAL_USER_NAME:-user}

log "UID : $USER_ID"
log "UNAME : $USER_NAME"
adduser -s /bin/bash -D -u $USER_ID -g "" $USER_NAME

export HOME=/home/$USER_NAME
echo "HOME : $HOME"

chown -R $USER_NAME:$USER_NAME ${PWD}/

exec su-exec $USER_NAME "$@"
