SELECT
    i.NAME AS item_name
    ,xVal.value('Name[1]', 'nvarchar(max)') field_name
    ,xVal.value('DomainName[1]', 'nvarchar(max)') domain_name 
    ,it.NAME AS item_type
FROM        
     SDE.GDB_ITEMS  i 
JOIN SDE.GDB_ITEMTYPES it 
ON 
         i.Type = it.UUID
    CROSS APPLY i.Definition.nodes('/DETableInfo/GPFieldInfoExs/GPFieldInfoEx') dx(xVal)
WHERE        
    i.NAME IS NOT NULL AND
    xVal.value('DomainName[1]', 'nvarchar(max)') IS NOT NULL 
ORDER BY
    i.NAME