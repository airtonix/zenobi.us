#!/bin/bash

# Add local user
# Either use the LOCAL_USER_ID if passed in at runtime or
# fallback
log () {
    echo "[ENTRYPOINT -> USER]: $@"
}

USER_ID=${FRONTEND__USER_ID:-9001}
USER_NAME=${FRONTEND__USER_NAME:-user}

log "UID : $USER_ID"
log "UNAME : $USER_NAME"
adduser -s /bin/bash -D -u $USER_ID -g "" $USER_NAME

export HOME=/home/$USER_NAME
log "HOME : $HOME"
log "CHOWN : ${PWD} > ${USER_NAME}:${USER_NAME}"
chown -R $USER_NAME:$USER_NAME $(ls -A | grep -v 'node_modules/*')
log "CHOWN : Done"

exec su-exec $USER_NAME "$@"
