#!/bin/sh
echo "Running deployment script..."
# sftl diabled in curl!
# for file in $BUILD_PATH/*
# do
#   curl -k "sftp://$HOST/$REMOTE_PATH/$BUILD_PATH/${file}" --user "$FTP_USR:$FTP_PASS" -T ${file} --ftp-create-dirs
# done
# use rsync
# rsync -a $BUILD_PATH $FTP_USER@$REMOTE_IP:$REMOTE_PATH/$BUILD_PATH
{ 
  scp -r ~/weitzly/output/html/* "$FTP_USER"@"$REMOTE_IP":"$REMOTE_PATH"/"$BUILD_PATH" && scp_status=$?
  echo SCP returned with code $scp_status
} || { 
  echo SCP returned with code $scp_status
}
echo "Pushed deployment successfully"
exit 0
