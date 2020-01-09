#!/usr/bin/env sh

set -x
npm run build
set +x

set -x
serve -s build &
sleep 1
echo $! > .pidfile
set +x