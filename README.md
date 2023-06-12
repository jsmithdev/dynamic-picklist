# Dynamic Picklist

An LWC dynamic picklist that:

- Adds ability to set the options dynamically based on the object, field, and record type.

<img src="https://i.imgur.com/255cS5Z.png" width="350px;">

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

### RecordType Id

As seen above, this takes a record-type-id. 

However, we can easily get a record type id in a parent component to give to this without Apex: 

```js
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Opportunity from '@salesforce/schema/Opportunity'; 

export default class ParentExample extends LightningElement {
	
    recordTypeId;

    @wire (getObjectInfo, { objectApiName: Opportunity })
    _setField({ data, error }) {
        this.recordTypeId = data?.defaultRecordTypeId;
    }
}
```

This way it's more effecient on projects that use multiple picklists by making that call only once

## Deploy

```bash
sfdx force:source:deploy -p force-app/main/default/lwc/dynamicPicklist
```

📌  Above deploys to the default org set; Add `-u user@domain.com` or `-u alias` to deploy else where

---

Coded with ❤️ by [Jamie Smith](https://jsmith.dev)
