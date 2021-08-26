#!/bin/bash
set -e
yum update -y
npm install pm2
pm2 update