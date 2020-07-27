#!/bin/bash
ssh "$FTP_USER"@"$REMOTE_IP" << "EOF"
  pwd
  echo 'Are we remoted?'
  cd /var/www/weitzly.com/html
  ls -la
  echo '^^^That should look familiar^^^'
  rm -rf *
  echo 'closing connection'
  exit;
EOF