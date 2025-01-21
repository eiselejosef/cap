#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p images

# Loop through all images in the images-original folder
for img in images-original/*; do
  # Get the filename without the path
  filename=$(basename "$img")

  # Resize the image to 800px width, auto-orient, and move it to the images folder
  convert "$img" -auto-orient -resize 800x "images/$filename"
done

echo "Images have been resized, auto-oriented, and moved to the images folder."