#!/usr/bin/env sh

USER=${USER_NAME:-node}

chown -R $USER:$USER /app/dist/