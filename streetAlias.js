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
