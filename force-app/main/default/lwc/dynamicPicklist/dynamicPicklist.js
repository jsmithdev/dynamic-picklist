import { api, wire, LightningElement } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { setPicklistValues } from './util';

export default class DynamicPicklist extends LightningElement {

	@api name;
	@api label;
	@api value;
	@api placeholder;
	@api recordTypeId;
	@api fieldApiName;
	@api objectApiName;
	options = []
	@api 
	get optionsOverride() {
		return this.options || [];
	}
	set optionsOverride(value) {
		if(!value || !value.length) return;
		//this.options = setPicklistValues({ values: value.map(v => ({ value: v, label: v })) });;
		this.options = value;
	}

	get fieldApi() {
		return {
			fieldApiName: this.fieldApiName,
			objectApiName: this.objectApiName,
		}
	}

	@wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: '$fieldApi' })
    _setField({ data, error }) {
		if(data) this.options = setPicklistValues(data);
	}
}