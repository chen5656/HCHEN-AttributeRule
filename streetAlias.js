AddStreetAliasId = {
    Description: 'Get Next  Id',
    Field: ALIASID,
    Editable:false,
    Expression: AddStreetIdExpression,
    Triggers: 'Insert'
}
AddStreetAliasIdExpression = () => {
    return NextSequenceValue('STREET_ALIAS_ID')
}


var fsAlias=  FeatureSetByName($datastore, "GISDEV.STREETALIAS", ["globalid"], false);
var DeleteList = [];
var streetid=$originalfeature.STREETID;
var result = Filter(fsAlias, 'STREETID = ' + streetid);

return Count(result)
