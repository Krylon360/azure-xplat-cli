// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla1351' under resource group 'xplattestadlarg05' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7c722ed9-f6f8-4418-bd5c-e4e0e45b4835',
  'x-ms-correlation-request-id': '7c722ed9-f6f8-4418-bd5c-e4e0e45b4835',
  'x-ms-routing-request-id': 'WESTUS:20160428T185111Z:7c722ed9-f6f8-4418-bd5c-e4e0e45b4835',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:11 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla1351' under resource group 'xplattestadlarg05' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7c722ed9-f6f8-4418-bd5c-e4e0e45b4835',
  'x-ms-correlation-request-id': '7c722ed9-f6f8-4418-bd5c-e4e0e45b4835',
  'x-ms-routing-request-id': 'WESTUS:20160428T185111Z:7c722ed9-f6f8-4418-bd5c-e4e0e45b4835',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:11 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview', '*')
  .reply(201, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2624\",\"dataLakeStoreAccounts\":[{\"properties\":{},\"name\":\"xplattestadls2624\"}],\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"ddc0c68c-215c-4ebb-832a-d1db3f03b43d\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351\",\"name\":\"xplattestadla1351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '600',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351/operationresults/0?api-version=2015-10-01-preview',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/ddc0c68c-215c-4ebb-832a-d1db3f03b43d0?api-version=2015-10-01-preview&expanded=true',
  'x-ms-request-id': 'ed1b2121-3b17-459c-8255-29954e67aa2e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '07a6b42c-18ed-44c9-9eb1-0c6cd3f74b69',
  'x-ms-routing-request-id': 'WESTUS:20160428T185114Z:07a6b42c-18ed-44c9-9eb1-0c6cd3f74b69',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview', '*')
  .reply(201, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2624\",\"dataLakeStoreAccounts\":[{\"properties\":{},\"name\":\"xplattestadls2624\"}],\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"ddc0c68c-215c-4ebb-832a-d1db3f03b43d\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351\",\"name\":\"xplattestadla1351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '600',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351/operationresults/0?api-version=2015-10-01-preview',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/ddc0c68c-215c-4ebb-832a-d1db3f03b43d0?api-version=2015-10-01-preview&expanded=true',
  'x-ms-request-id': 'ed1b2121-3b17-459c-8255-29954e67aa2e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '07a6b42c-18ed-44c9-9eb1-0c6cd3f74b69',
  'x-ms-routing-request-id': 'WESTUS:20160428T185114Z:07a6b42c-18ed-44c9-9eb1-0c6cd3f74b69',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/ddc0c68c-215c-4ebb-832a-d1db3f03b43d0?api-version=2015-10-01-preview&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '89d3bc56-1622-4e59-a855-a5ee8550caec',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'e386330d-6feb-40ca-ab8e-e80293c5c4e9',
  'x-ms-routing-request-id': 'WESTUS:20160428T185145Z:e386330d-6feb-40ca-ab8e-e80293c5c4e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/ddc0c68c-215c-4ebb-832a-d1db3f03b43d0?api-version=2015-10-01-preview&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '89d3bc56-1622-4e59-a855-a5ee8550caec',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'e386330d-6feb-40ca-ab8e-e80293c5c4e9',
  'x-ms-routing-request-id': 'WESTUS:20160428T185145Z:e386330d-6feb-40ca-ab8e-e80293c5c4e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2624\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2624\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1351.azuredatalakeanalytics.net\",\"accountId\":\"ddc0c68c-215c-4ebb-832a-d1db3f03b43d\",\"creationTime\":\"2016-04-28T18:51:15.9874744Z\",\"lastModifiedTime\":\"2016-04-28T18:51:15.9874744Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351\",\"name\":\"xplattestadla1351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '797',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '539e368c-832c-43b7-acad-703ca24c16f8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '2bb5a64b-fa36-4edd-b7ae-17ed95a542d6',
  'x-ms-routing-request-id': 'WESTUS:20160428T185145Z:2bb5a64b-fa36-4edd-b7ae-17ed95a542d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2624\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2624\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1351.azuredatalakeanalytics.net\",\"accountId\":\"ddc0c68c-215c-4ebb-832a-d1db3f03b43d\",\"creationTime\":\"2016-04-28T18:51:15.9874744Z\",\"lastModifiedTime\":\"2016-04-28T18:51:15.9874744Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351\",\"name\":\"xplattestadla1351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '797',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '539e368c-832c-43b7-acad-703ca24c16f8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '2bb5a64b-fa36-4edd-b7ae-17ed95a542d6',
  'x-ms-routing-request-id': 'WESTUS:20160428T185145Z:2bb5a64b-fa36-4edd-b7ae-17ed95a542d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2624\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2624\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1351.azuredatalakeanalytics.net\",\"accountId\":\"ddc0c68c-215c-4ebb-832a-d1db3f03b43d\",\"creationTime\":\"2016-04-28T18:51:15.9874744Z\",\"lastModifiedTime\":\"2016-04-28T18:51:15.9874744Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351\",\"name\":\"xplattestadla1351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '797',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1dad45f4-1314-4c3c-9965-5e25431714a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '5502771a-ef0d-4247-acf4-97d313dfe89a',
  'x-ms-routing-request-id': 'WESTUS:20160428T185146Z:5502771a-ef0d-4247-acf4-97d313dfe89a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2624\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2624\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1351.azuredatalakeanalytics.net\",\"accountId\":\"ddc0c68c-215c-4ebb-832a-d1db3f03b43d\",\"creationTime\":\"2016-04-28T18:51:15.9874744Z\",\"lastModifiedTime\":\"2016-04-28T18:51:15.9874744Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1351\",\"name\":\"xplattestadla1351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '797',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1dad45f4-1314-4c3c-9965-5e25431714a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '5502771a-ef0d-4247-acf4-97d313dfe89a',
  'x-ms-routing-request-id': 'WESTUS:20160428T185146Z:5502771a-ef0d-4247-acf4-97d313dfe89a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:51:45 GMT',
  connection: 'close' });
 return result; }]];