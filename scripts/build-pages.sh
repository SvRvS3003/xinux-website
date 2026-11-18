#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

restore_api() {
  [ -d app/_api ] && mv app/_api app/api
}
trap restore_api EXIT

rm -rf out .next
mv app/api app/_api
BASE_PATH="${BASE_PATH:-/xinux-website}" STATIC_EXPORT=1 npx next build
touch out/.nojekyll
find out -name 'index.html' | wc -l
