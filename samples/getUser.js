getUser(portal | featureset, //context to get user portal or featureset
    userid="", // which user to fetch info about when null/empty the current user is returned
    extensions=false); //whether to return userType extensions (e.g. utilityNetwork, parcelFabrics, traceNetwork)
 
//return type
user = {
"id" : String, //user id 
"username": String, // username 
"fullName": String, // First Name + Last name 
"email":  String, // email   
"groups": Array, // e.g. [ "Electric", "Water" ]`
"role" :  String, // (Administrator, Publisher, User, Viewer or Custom Role
"privileges" : Array, // fine privileges (edit, view etc.. )
"userLicenseTypeExtensions"  : Array // `["Utility Network", "Parcel Fabric"]
}

//actual  example
user = {
"id": "d185da9eb2c040d1bcbcabe7ddf69585", //user id
"username": "test", //username
"fullName": "Hussein Nasser", //First Name Last name
"email": "test@gmail.com",
"groups": [
 "All",
 "Postgres",
 "SQLServer",
 "Oracle",
 "Customers"
],
"role": "org_publisher",
"privileges": [
 "features:user:edit",
 "portal:publisher:bulkPublishFromDataStores",
 "portal:publisher:publishFeatures",
 "portal:publisher:publishScenes",
 "portal:publisher:publishServerServices",
 "portal:publisher:publishTiles",
 "portal:publisher:registerDataStores",
 "portal:user:categorizeItems",
 "portal:user:createGroup",
 "portal:user:createItem",
 "portal:user:joinGroup",
 "portal:user:joinNonOrgGroup",
 "portal:user:shareGroupToOrg",
 "portal:user:shareGroupToPublic",
 "portal:user:shareToGroup",
 "portal:user:shareToOrg",
 "portal:user:shareToPublic",
 "portal:user:viewOrgGroups",
 "portal:user:viewOrgItems",
 "portal:user:viewOrgUsers",
 "premium:publisher:geoanalytics",
 "premium:user:demographics",
 "premium:user:elevation",
 "premium:user:featurereport",
 "premium:user:geocode",
 "premium:user:geocode:stored",
 "premium:user:geocode:temporary",
 "premium:user:geoenrichment",
 "premium:user:networkanalysis",
 "premium:user:networkanalysis:closestfacility",
 "premium:user:networkanalysis:locationallocation",
 "premium:user:networkanalysis:optimizedrouting",
 "premium:user:networkanalysis:origindestinationcostmatrix",
 "premium:user:networkanalysis:routing",
 "premium:user:networkanalysis:servicearea",
 "premium:user:networkanalysis:vehiclerouting",
 "premium:user:spatialanalysis"
]
}