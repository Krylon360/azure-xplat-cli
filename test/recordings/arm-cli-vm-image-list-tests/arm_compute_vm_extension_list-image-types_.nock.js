// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1089',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b4a67b3-7d6c-4183-8111-582987394033',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '8e066985-3a41-4f20-8175-5c003dab4cdf',
  'x-ms-routing-request-id': 'WESTUS:20160503T064523Z:8e066985-3a41-4f20-8175-5c003dab4cdf',
  date: 'Tue, 03 May 2016 06:45:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1089',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b4a67b3-7d6c-4183-8111-582987394033',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '8e066985-3a41-4f20-8175-5c003dab4cdf',
  'x-ms-routing-request-id': 'WESTUS:20160503T064523Z:8e066985-3a41-4f20-8175-5c003dab4cdf',
  date: 'Tue, 03 May 2016 06:45:22 GMT',
  connection: 'close' });
 return result; }]];