#!/bin/sh
echo "Running deployment script..."
# sftl diabled in curl!
# for file in $BUILD_PATH/*
# do
#   curl -k "sftp://$HOST/$REMOTE_PATH/$BUILD_PATH/${file}" --user "$FTP_USR:$FTP_PASS" -T ${file} --ftp-create-dirs
# done
# use rsync
rsync -a $BUILD_PATH $FTP_USER@$REMOTE_IP:$REMOTE_PATH/$BUILD_PATH
echo "Pushed deployment successfully"
exit 0
