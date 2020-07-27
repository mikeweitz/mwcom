#!/bin/sh
echo "Running deployment script..."
scp -r ~/weitzly/output/html/* "$FTP_USER"@"$REMOTE_IP":"$REMOTE_PATH"/"$BUILD_PATH" && scp_status=$?
echo SCP returned with code $scp_status
echo "Pushed deployment successfully"
exit 0