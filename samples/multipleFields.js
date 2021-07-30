//Update multiple fields in a single attribute rule
 
return {
    //result is a dictionary or a scalar value
    "result" : {
          "attributes" : {
                   "field1" : Object, //update field1 in the $feature 
                   "field2" : Object  //update field2 in the $feature 
          },
          "geometry": Object    //update geometry in $feature
 }

}