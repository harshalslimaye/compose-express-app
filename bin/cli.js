#!/usr/bin/env node

const { execSync } = require("child_process")

const runCmd = cmd => {
  try {
    execSync(`${cmd}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to execute ${cmd}`, err);
    return false;
  }

  return true;
}

const dirName = process.argv[2];
const repoUrl = 'https://github.com/harshalslimaye/express-typescript-boilerplate.git';
const gitCheckoutCmd = `git clone ${repoUrl} ${dirName}`;
const installDepsCmd = `cd ${dirName} && npm install`;

console.log(`Cloning repository with name ${dirName}`);
const isCheckedOut = runCmd(gitCheckoutCmd);
if (!isCheckedOut) process.exit(-1);

console.log(`Installing dependencies...`);
const isInstalled = runCmd(installDepsCmd);
if(!installDepsCmd) process.exit(-1);

console.log('Congratulations! You are ready to build awesome Typescript powered express.js apps');