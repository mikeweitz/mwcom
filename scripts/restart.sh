#!/bin/bash
ssh "$FTP_USER"@"$REMOTE_IP" << "EOF"
  echo 'entering remote server'
  pwd
  pm2 restart nextjs && echo "nice nice"
  echo "$FTP_PASS" | service nginx restart
EOF
exit 0;