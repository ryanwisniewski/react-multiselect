import Immutable from 'immutable';

export let MultiSelectFilterGroup = Immutable.Record({
    groupID: '',
    label: '',
    listPosition: '',
    sortOrder: ''
});

export let Person = Immutable.Record({
    id: null,
	first_name: null,
	last_name: null,
	email: null,
	gender: null,
	ip_address: null,
    isSelected: false,
	departmentID: null
});
(function () {
    this.getDisplay = function () {
        return `${this.first_name} ${this.last_name}`;
    };
	this.getInitials = function () {
		if(this.first_name !== null && this.last_name !== null) {
			return `${this.first_name.substring(0, 1).toUpperCase()}${this.last_name.substring(0, 1).toUpperCase()}`;
		}
		return '';
    };
}).call(Person.prototype);

export class SpecialFilterOption {
    constructor(option, groupField, sortOrderOverride) {
        this[groupField] = parseInt(option.groupID);
        this.display = option.label;
        this.displayOnSelectField = "",
            this.listPosition = option.listPosition;
        this.isSpecialOption = true;
        this.sortOrder = sortOrderOverride || option.sortOrder;
    }
}
(function () {
    this.getDisplay = function () {
        return this.display;
    };
}).call(SpecialFilterOption.prototype);

export let SelectAllFilterOption = class extends SpecialFilterOption {
    //***sortOrderOverride*** - this is needed for cases where the sortOrder is dependent on 
    //  the number of selectAllByGroup options preceding it, as the SelectAll option is always displayed at the bottom
    constructor(option, groupField, sortOrderOverride) {
        super(option, groupField, sortOrderOverride);
    }
    filterFunction(options, id) {
        return options.each(function () {
            $(this).prop('checked', true);
        });
    }
};

export let ClearAllFilterOption = class extends SpecialFilterOption {
    filterFunction(options, id) {
        return options.each(function () {
            $(this).prop('checked', false);
        });
    }
};

export let SelectAllByGroupIDFilterOption = class extends SpecialFilterOption {
    filterFunction(options, groupID) {
        return options.each(function () {
            $(this).prop('checked', this.name == groupID);
        });
    }
};