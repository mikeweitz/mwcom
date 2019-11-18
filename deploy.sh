#!/bin/sh
echo "Running deployment script..."
ftp -n $FTP_SERVER_HOST <<END_SCRIPT
quote USER $FTP_USERNAME
quote PASS $FTP_PASSWORD
binary
mput $FTP_BUILD_PATH
quit
END_SCRIPT
echo "Pushed deployment successfully"
exit 0