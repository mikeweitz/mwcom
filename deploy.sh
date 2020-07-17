#!/bin/sh
echo "Running deployment script..."
for file in $BUILD_PATH/*
do
  curl -k "sftp://$HOST/$REMOTE_PATH/$BUILD_PATH/${file}" --user "$FTP_USR:$FTP_PASS" -T ${file} --ftp-create-dirs
done
echo "Pushed deployment successfully"
exit 0
