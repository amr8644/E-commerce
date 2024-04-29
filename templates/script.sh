

#!/bin/bash

# Specify the directory where your files are located
directory="."

# Check if the directory exists
if [ ! -d "$directory" ]; then
    echo "Directory '$directory' does not exist."
    exit 1
fi

# Go to the directory
cd "$directory" || exit

# Rename .tmpl files to .html
for file in *.tmpl; do
    mv -- "$file" "${file%.tmpl}.html"
done

echo "Renaming complete."

