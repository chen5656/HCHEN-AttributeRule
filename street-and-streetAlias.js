AddStreetId = {
    Description: 'Get Next Street Id',
    Field: STREETID,
    Editable:false,
    Expression: AddStreetIdExpression,
    Triggers: 'Insert'
}
AddStreetIdExpression = () => {
    return NextSequenceValue('STREET_ID')
}

NewStreet_StreetLabel = {
    Description: 'Fill in street label for new street',
    Field: STREETLABEL,
    Editable:false,
    Expression: NewStreetGetLabelExpression,
    Triggers: 'Insert'
}
NewStreet_StreetLabel_Expression = () => {
    var parts = ['STREETPREFIX', 'STREETNAME', 'STREETTYPE', 'STREETSUFFIX'];
    var streetLabel = '';
    for (var i in parts) {
        var key = parts[i];
        var current = Trim($feature[key]);

        if (!IsEmpty(current)) {
            streetLabel = streetLabel + current + ' ';
        }
    }
    return streetLabel;
}

UpdateStreet = {
    Description: 'If values changed, then update Street Label Field and insert a new row to streetAlias',
    Field: STREETLABEL,
    Editable:false,
    Expression: UpdateStreetExpression,
    Triggers: 'Update'
}
UpdateStreetExpression = () => {
    var parts = ['STREETPREFIX', 'STREETNAME', 'STREETTYPE', 'STREETSUFFIX'];
    var streetLabel = '';
    var isChanged = false;
    var streetAliasAttr = {};

    for (var i in parts) {
        var key = parts[i];
        var current = Trim($feature[key]);
        var previous = Trim($originalfeature[key]);

        if (current != previous && isChanged == false) {
            isChanged = true;
        }
        if (!IsEmpty(current)) {
            streetLabel = +current + ' ';
            streetAliasAttr[key] = current;
        }

    }

    if (isChanged) {
        streetAliasAttr['STREETLABEL'] = streetLabel;
        return {
            'result': streetLabel,
            'edit': [{
                'className': 'GISDEV.STREETALIAS',
                'adds': [{
                    'attributes': streetAliasAttr
                }]
            }]
        }
    }
}