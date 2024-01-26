#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

directory=$1

if [ ! -d "$directory" ]; then
    echo "Error: $directory is not a valid directory."
    exit 1
fi

file_count=$(find "$directory" -type f | wc -l)

echo "Number of files in $directory and its subdirectories: $file_count"
