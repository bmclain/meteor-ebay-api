Package.describe({
  name: 'bmclain:ebay-api',
  summary: 'This module aims to support all of eBay\'s APIs (Trading, Shopping, Finding, etc.)',
  version: '1.12.0',
  git: 'https://github.com/bmclain/meteor-ebay-api.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('meteorhacks:npm@1.5.0');
  api.addFiles([
    'meteor/wrapper.js'
  ], 'server');
  api.export('ebay', 'server');
});

Package.onTest(function(api) {
});
