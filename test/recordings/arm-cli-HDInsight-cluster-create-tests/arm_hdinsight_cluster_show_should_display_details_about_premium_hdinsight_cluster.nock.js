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
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8197Premium?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8197Premium\",\"name\":\"xplatTestHDInsightClusterCreate8197Premium\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"88ae68ab-464f-4302-9243-3fb7e0635230\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.7338911.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Operational\",\"createdDate\":\"2016-04-26T19:47:24.023\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium.azurehdinsight.net\",\"port\":443}],\"tier\":\"premium\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1258',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae7a39b7-7d1e-49be-8d49-6af002dc9e50',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'ab9bf399-3809-4aff-8731-9d8688a6408d',
  'x-ms-routing-request-id': 'WESTUS:20160426T200526Z:ab9bf399-3809-4aff-8731-9d8688a6408d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:05:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8197Premium?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8197Premium\",\"name\":\"xplatTestHDInsightClusterCreate8197Premium\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"88ae68ab-464f-4302-9243-3fb7e0635230\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.7338911.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Operational\",\"createdDate\":\"2016-04-26T19:47:24.023\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium.azurehdinsight.net\",\"port\":443}],\"tier\":\"premium\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1258',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae7a39b7-7d1e-49be-8d49-6af002dc9e50',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'ab9bf399-3809-4aff-8731-9d8688a6408d',
  'x-ms-routing-request-id': 'WESTUS:20160426T200526Z:ab9bf399-3809-4aff-8731-9d8688a6408d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:05:26 GMT',
  connection: 'close' });
 return result; }]];