#!/bin/bash

# Set the root directory
root_dir="/Users/home/Documents/projects/realms_of_glory/landing/public"

# Set the quality level for WebP, JXR, and PNG compression
quality=80

# Set the compression level for PNG
compression_level=90

# Function to compress PNG files using pngquant
compress_png() {
  local input_file="$1"
  pngquant --force --skip-if-larger --quality=$compression_level-100 "$input_file" -o "$input_file"
}

# Function to convert PNG to WebP
convert_to_webp() {
  local input_file="$1"
  local output_file="${input_file%.*}.webp"
  cwebp -q $quality "$input_file" -o "$output_file"
}

# Function to convert PNG to JXR
convert_to_jxr() {
  local input_file="$1"
  local output_file="${input_file%.*}.jxr"
  pngtopnm "$input_file" | pnmtojxr -q $quality -o "$output_file"
}

# Function to remove JP2 files
remove_jp2() {
  local input_file="$1"
  local jp2_file="${input_file%.*}.jp2"
  rm -f "$jp2_file"
}

# Function to process files in a directory
process_files() {
  local dir="$1"
  local file
  for file in "$dir"/*; do
    if [[ -f "$file" && ${file##*.} == "png" ]]; then
      compress_png "$file"
      convert_to_webp "$file"
      convert_to_jxr "$file"
      remove_jp2 "$file"
    elif [[ -d "$file" ]]; then
      process_files "$file"
    fi
  done
}

# Call the function to process files
process_files "$root_dir"
