#!/bin/sh

# Note: This wast to use .env.production file to override the environment variables, and put it in the .next folder while building the image.
# It was done initally whnen we use ips's to access the application, but now we are using domain names, so we don't need to override the environment variables 
# anymore and put them in the .next folder. 
# Keeping this code for future reference, but not using it anymore. 
# Also in furture we can use the .env.production file to override the environment variables, and put it in the .next folder while building the image.


# exec > /tmp/entrypoint.log 2>&1
# envFilename='./.env.production'
# nextFolder='.next/'

# # Update .env.production with environment variables
# while IFS= read -r line; do
#   case "$line" in
#     \#* | "") continue ;; # Skip comments and empty lines
#   esac

#   configName=$(echo "$line" | cut -d'=' -f1)
#   echo "configName = $configName"
#   configValue=$(echo "$line" | cut -d'=' -f2)

#   envValue=$(env | grep "^$configName=" | sed -n "s/^$configName=//p")
#   echo "envValue = $envValue"

#   if [ -n "$configValue" ] && [ -n "$envValue" ] && echo "$configName" | grep -q "^NEXT_PUBLIC_"; then
#     echo "Replace: ${configName} with ${envValue}"
#     find $nextFolder \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#$configValue#$envValue#g"
#     else
#       echo "Directory $nextFolder does not exist."
#   fi
# done <"$envFilename"

echo "Starting Next.js"
exec "$@"
