#!/bin/bash
ssh "$FTP_USER"@"$REMOTE_IP" << "EOF"
  echo 'entering remote server'
  pwd
  cd /var/www/weitzly.com
  ls -la
  echo '^^^^^^^ Should look familiar ^^^^^^^'
  pm2 restart nextjs
  echo "$FTP_PASS" | service nginx restart
EOF
exit 0;