//Calculation
AddStreetId = {
    Description: 'Get Next Street Id',
    Field: STREETID,
    Editable: false,
    Triggers: 'Insert',
    Expression: function () {
        return NextSequenceValue('STREET_ID')
    }
}
NewStreet_StreetLabel = {
    Description: 'Fill in street label for new street',
    Field: STREETLABEL,
    Editable: false,
    Triggers: 'Insert',
    Expression: function () {
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
}
UpdateStreet = {
    Description: 'If values changed, then update Street Label Field and insert a new row to streetAlias',
    Field: STREETLABEL,
    Editable: false,
    Triggers: 'Update',
    Expression: function () {
        var parts = ['STREETPREFIX', 'STREETNAME', 'STREETTYPE', 'STREETSUFFIX'];
        var streetLabel = '';
        var isChanged = false;
        var streetAliasAttr = {};

        for (var i in parts) {
            var key = parts[i];
            var current = Trim($feature[key]);
            var previous = Trim($originalfeature[key]);

            streetAliasAttr[key] = previous;

            if (current != previous && isChanged == false) {
                isChanged = true;
            }
            if (!IsEmpty(current)) {
                streetLabel = streetLabel + current + ' ';
            }

        }

        if (isChanged) {
            streetAliasAttr['STREETLABEL'] = $originalfeature.STREETLABEL;
            streetAliasAttr['STREETID'] = $originalfeature.STREETID;
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
}

DeleteStreet_CleanStreetAlias = {
    Description: 'Delete, push to streetalias, and user will need to pick a new street id for it in the street alias table',
    Field: 'STREETID',
    Editable: false,
    Expression: function () {
        var parts = ['STREETID', 'STREETPREFIX', 'STREETNAME', 'STREETTYPE', 'STREETSUFFIX', 'STREETLABEL'];
        var streetAliasAttr = {};

        for (var i in parts) {
            var key = parts[i];
            var previous = Trim($originalfeature[key]);
            streetAliasAttr[key] = previous;
        }

        return {
            'edit': [{
                'className': 'GISDEV.STREETALIAS',
                'adds': [{
                    'attributes': streetAliasAttr
                }]
            }]
        }
    },
    Triggers: 'Delete'
}

//Constraint
preventDup = {
    Description: 'prevent duplicate key value',
    Triggers: ['Insert', 'Update'],
    Expression: function () {
        var streetlabel = $feature.STREETLABEL;
        var fsStreets = Filter($featureSet, 'STREETLABEL=@streetlabel');
        var count = Count(fsStreets);
        if (count > 1) {
            return false
        }

        return true;
    }
}