 
//Allow Distribution users to only edit distirbution data

//if the edit is on DEFAULT we need to check the user groups
var p = Portal("https://utilitynetwork.esri.com/portal");
//get the user full object
var u = getUser(p);
//get the user groups
var groups = u.groups;
//if the user is in the SuperEditor group allow the edit
if (Find("Distribution",groups) > 0 ) return true;

//else fail the edit
return false
