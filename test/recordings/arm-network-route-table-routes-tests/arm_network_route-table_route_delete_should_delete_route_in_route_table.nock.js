// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ff916d28-9130-462e-9f6f-fc7a6c91ea35\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0a10390-52c0-46e6-8e48-79fd1ca56a9c"',
  'x-ms-request-id': '9dd809b1-911d-436d-8395-1fddb878b17f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'd763b964-f891-4246-b739-f33936a16bb9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100241Z:d763b964-f891-4246-b739-f33936a16bb9',
  date: 'Fri, 29 Apr 2016 10:02:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ff916d28-9130-462e-9f6f-fc7a6c91ea35\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0a10390-52c0-46e6-8e48-79fd1ca56a9c"',
  'x-ms-request-id': '9dd809b1-911d-436d-8395-1fddb878b17f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'd763b964-f891-4246-b739-f33936a16bb9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100241Z:d763b964-f891-4246-b739-f33936a16bb9',
  date: 'Fri, 29 Apr 2016 10:02:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"12.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualAppliance\",\r\n    \"nextHopIpAddress\": \"10.0.0.7\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0a10390-52c0-46e6-8e48-79fd1ca56a9c"',
  'x-ms-request-id': '16f7d30d-6eab-4c7a-ba49-5ab2fcdcf3b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '19e69691-b68f-40dd-bb59-29a0adbfae3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100242Z:19e69691-b68f-40dd-bb59-29a0adbfae3e',
  date: 'Fri, 29 Apr 2016 10:02:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"e0a10390-52c0-46e6-8e48-79fd1ca56a9c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"12.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualAppliance\",\r\n    \"nextHopIpAddress\": \"10.0.0.7\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0a10390-52c0-46e6-8e48-79fd1ca56a9c"',
  'x-ms-request-id': '16f7d30d-6eab-4c7a-ba49-5ab2fcdcf3b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '19e69691-b68f-40dd-bb59-29a0adbfae3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100242Z:19e69691-b68f-40dd-bb59-29a0adbfae3e',
  date: 'Fri, 29 Apr 2016 10:02:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/9abb9803-ecf4-41e7-82fb-de787ca61861?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '9abb9803-ecf4-41e7-82fb-de787ca61861',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9abb9803-ecf4-41e7-82fb-de787ca61861?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '6bd9794c-4eed-40b8-82fc-f5e660104d49',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100243Z:6bd9794c-4eed-40b8-82fc-f5e660104d49',
  date: 'Fri, 29 Apr 2016 10:02:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/9abb9803-ecf4-41e7-82fb-de787ca61861?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '9abb9803-ecf4-41e7-82fb-de787ca61861',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9abb9803-ecf4-41e7-82fb-de787ca61861?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '6bd9794c-4eed-40b8-82fc-f5e660104d49',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100243Z:6bd9794c-4eed-40b8-82fc-f5e660104d49',
  date: 'Fri, 29 Apr 2016 10:02:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9abb9803-ecf4-41e7-82fb-de787ca61861?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ff746cb9-a489-48fa-af2f-f91784f7e0df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '734fc98c-9765-4d71-8b86-77ccb4da501e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100314Z:734fc98c-9765-4d71-8b86-77ccb4da501e',
  date: 'Fri, 29 Apr 2016 10:03:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9abb9803-ecf4-41e7-82fb-de787ca61861?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ff746cb9-a489-48fa-af2f-f91784f7e0df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '734fc98c-9765-4d71-8b86-77ccb4da501e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100314Z:734fc98c-9765-4d71-8b86-77ccb4da501e',
  date: 'Fri, 29 Apr 2016 10:03:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"2d3db648-93ee-4b31-bba0-fd60613454f3\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ff916d28-9130-462e-9f6f-fc7a6c91ea35\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d3db648-93ee-4b31-bba0-fd60613454f3"',
  'x-ms-request-id': 'a1d4917c-2023-4856-b9b4-55cf78d7f7d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '15da9704-cfdd-4196-837d-667db3eb63f5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100315Z:15da9704-cfdd-4196-837d-667db3eb63f5',
  date: 'Fri, 29 Apr 2016 10:03:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"2d3db648-93ee-4b31-bba0-fd60613454f3\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ff916d28-9130-462e-9f6f-fc7a6c91ea35\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d3db648-93ee-4b31-bba0-fd60613454f3"',
  'x-ms-request-id': 'a1d4917c-2023-4856-b9b4-55cf78d7f7d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '15da9704-cfdd-4196-837d-667db3eb63f5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100315Z:15da9704-cfdd-4196-837d-667db3eb63f5',
  date: 'Fri, 29 Apr 2016 10:03:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f14ff59-7e24-40db-b2bf-4e5eec34bdf6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '99f2f922-dad8-48e8-8432-46bd61e00b8a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100316Z:99f2f922-dad8-48e8-8432-46bd61e00b8a',
  date: 'Fri, 29 Apr 2016 10:03:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f14ff59-7e24-40db-b2bf-4e5eec34bdf6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '99f2f922-dad8-48e8-8432-46bd61e00b8a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T100316Z:99f2f922-dad8-48e8-8432-46bd61e00b8a',
  date: 'Fri, 29 Apr 2016 10:03:16 GMT',
  connection: 'close' });
 return result; }]];