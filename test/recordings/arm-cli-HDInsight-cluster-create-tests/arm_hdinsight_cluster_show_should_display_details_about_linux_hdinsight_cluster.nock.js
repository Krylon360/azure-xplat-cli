// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796\",\"name\":\"xplatTestHDInsightClusterCreate7796\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"630ae818-e13a-48bb-bb41-d716f94748dc\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.7339916.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T20:05:32.183\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796.azurehdinsight.net\",\"port\":443}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1227',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60ca3a6c-f3c8-41e6-acfa-1d0180cb6787',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': 'a597f052-b85f-426f-a7cb-40f5fcc0b7b5',
  'x-ms-routing-request-id': 'WESTUS:20160426T204834Z:a597f052-b85f-426f-a7cb-40f5fcc0b7b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796\",\"name\":\"xplatTestHDInsightClusterCreate7796\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"630ae818-e13a-48bb-bb41-d716f94748dc\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.7339916.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T20:05:32.183\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796.azurehdinsight.net\",\"port\":443}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1227',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60ca3a6c-f3c8-41e6-acfa-1d0180cb6787',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': 'a597f052-b85f-426f-a7cb-40f5fcc0b7b5',
  'x-ms-routing-request-id': 'WESTUS:20160426T204834Z:a597f052-b85f-426f-a7cb-40f5fcc0b7b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:48:34 GMT',
  connection: 'close' });
 return result; }]];