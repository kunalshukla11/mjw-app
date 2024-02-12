#!/bin/sh

exec > /tmp/overrideEnv.log 2>&1
envFilename='./.env.production'

# Update .env.production with environment variables
tempEnvFile=$(mktemp)

while IFS= read -r line; do
  case "$line" in
    \#* | "") echo continue ;; # Skip comments and empty lines
  esac

  configName=$(echo "$line" | cut -d'=' -f1)
  echo "Processing: $configName"

  configValue=$(echo "$line" | cut -d'=' -f2)
  envValue=$(env | grep "^$configName=" | sed -n "s/^$configName=//p")


  if [ -n "$envValue" ]; then
    echo "Updating $configName with $envValue from environment"
    echo "$configName=$envValue" >> "$tempEnvFile"
  else
    echo "Keeping existing value for $configName"
    echo "$line" >> "$tempEnvFile"
  fi
done <"$envFilename"


# Replace the old .env.production with the updated one
mv "$tempEnvFile" "$envFilename"

env

echo "Starting Next.js"
exec "$@"

