#!/usr/bin/env node

/**
 * Simple script to deploy Firestore rules
 * Run with: node deploy-rules.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔥 Firebase Firestore Rules Deployment Script');
console.log('============================================\n');

// Check if firebase.json exists
if (!fs.existsSync('firebase.json')) {
  console.error('❌ firebase.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Check if firestore.rules exists
if (!fs.existsSync('firestore.rules')) {
  console.error('❌ firestore.rules not found. Please ensure the rules file exists.');
  process.exit(1);
}

try {
  console.log('📋 Checking Firebase CLI installation...');
  execSync('firebase --version', { stdio: 'pipe' });
  console.log('✅ Firebase CLI is installed\n');

  console.log('🔐 Checking authentication status...');
  try {
    execSync('firebase projects:list', { stdio: 'pipe' });
    console.log('✅ Already authenticated\n');
  } catch (error) {
    console.log('🔑 Please authenticate with Firebase:');
    console.log('   Run: firebase login\n');
    process.exit(1);
  }

  console.log('🚀 Deploying Firestore rules...');
  execSync('firebase deploy --only firestore:rules', { stdio: 'inherit' });
  
  console.log('\n✅ Firestore rules deployed successfully!');
  console.log('🔄 Please restart your development server to apply changes.');

} catch (error) {
  console.error('\n❌ Error during deployment:');
  console.error(error.message);
  console.log('\n📖 Manual steps:');
  console.log('1. Run: firebase login');
  console.log('2. Run: firebase use innomarkrv');
  console.log('3. Run: firebase deploy --only firestore:rules');
}
