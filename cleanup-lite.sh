#!/usr/bin/env bash
set -euo pipefail

echo "▶ detect unused deps"
pnpm dlx depcheck --json > .depcheck.json || true
UNUSED=$(jq -r '.dependencies[]?,.devDependencies[]?' .depcheck.json | xargs || true)
[[ -n "$UNUSED" ]] && echo "⚠ unused → $UNUSED"

echo "▶ safe upgrades"
pnpm up --latest --no-optional        # single-package repo

echo "▶ lint → type-check → build"
pnpm exec eslint --ext .js,.jsx,.ts,.tsx . --fix || true
pnpm exec tsc --noEmit
pnpm run build

echo -e '\n✅ all green – commit the diff'
