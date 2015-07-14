#!/bin/bash

localRoot="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../.."

# config
serverUser=root
server=<server-name>
remoteRoot=<remote-root>
remoteUser=root
rsyncOptions="-avz --delete --exclude=.DS_Store --exclude=.git --exclude=data/ --exclude=_private/"
sshOptions="-i ${localRoot}/dev/scripts/production-remote.id_rsa -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no"

pushd ${localRoot}

# set key file permissions
chmod 0600 ${localRoot}/dev/scripts/*.id_rsa

# create dirs, set access rights, setup environment
ssh ${sshOptions} -t ${serverUser}@${server} "\
  sudo mkdir -pv ${remoteRoot}; \
  sudo chown $remoteUser:$remoteUser $remoteRoot;"

# sync files
rsync ${rsyncOptions} -e "ssh ${sshOptions}" ${localRoot}/* ${serverUser}@${server}:${remoteRoot}/

# restart server
ssh ${sshOptions} -t ${serverUser}@${server} "\
  forever stop ${remoteRoot}/src/server/app.js; \
  forever start ${remoteRoot}/src/server/app.js;"

popd
