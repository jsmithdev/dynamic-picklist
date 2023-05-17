# Dynamic Picklist

This component is a dynamic picklist that allows you to set the options dynamically

## Attributes

| Name | Type | Description |
| --- | --- | --- |
| `label` | `String` | The label of the picklist |
| `value` | `String` | The value of the selected option |
| `placeholder` | `String` | The placeholder of the picklist |
| `recordTypeId` | `String` | The RecordType.Id to use in options import |
| `fieldApiName` | `String` | The Field to use in options import |
| `objectApiName` | `String` | The sObject to use in options import |
| `options-override` | `List` | The list of options to display (instead of dynamically) |

## Usage

```html
<c-dynamic-picklist
    name="StageName"
    
    label="StageName"
    placeholder="StageName"

    object-api-name="Opportunity"
    field-api-name="StageName"
    record-type-id={recordTypeId}

    onchange={handleChange}
></c-dynamic-picklist>
```

See the [demo](/force-app/main/default/lwc/dynamicPicklistDemo/) for more details which works well in SFDX Local Development Server 👍

## Deploy

```bash
sfdx force:source:deploy -p force-app/main/default/lwc/dynamicPicklist
```

📌  Above deploys to the default org set; Add `-u user@domain.com` or `-u alias` to deploy else where
