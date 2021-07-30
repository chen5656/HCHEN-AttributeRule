var fsAlias=  FeatureSetByName($datastore, "GISDEV.STREETALIAS", ["globalid"], false);
var DeleteList = [];
var result = Filter(fsAlias, 'STREETID = 3327');

return Count(result)
