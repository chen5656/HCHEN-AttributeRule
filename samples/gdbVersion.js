//sde.DEFAULT or tester.version empty when not enterprise
var version = gdbVersion (feature|featureset) 

//Example 
var version = gdbVersion($feature) //get the version
 
if (version  == "sde.DEFAULT")
{
   //DEFAULT version logic e.g. prevent editing in default
 
}
else if (version  != "sde.DEFAULT" && version  != "")
{
  //when in a version
   
}