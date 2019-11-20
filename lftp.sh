#!/bin/bash 
path = ./out
echo "Running deployment script..."
echo "${FTP_BUILD_PATH}"
echo "${FTP_SERVER_HOST}"
lftp -e "mirror -R $FTP_BUILD_PATH ./" -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER_HOST
echo "Pushed deployment successfully"
exit 0