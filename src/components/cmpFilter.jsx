import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MultiSelectFilter from './cmpMultiSelectFilter.jsx';

export class Filter extends Component {
    render () {
		let { availableValues, specialOptions, filterLabel, onChange, onOpen } = this.props;
        let selected = availableValues.filter(f => f.isSelected == true);
        return (
            <div >
				<h2>
					<label>{filterLabel}</label> 
				</h2>
                <MultiSelectFilter name="filterDropdown" 
                                   options={availableValues}
                                   specialOptions={specialOptions}
                                   selectName="filterSelect" 
                                   className="" 
                                   defaultValue={-1}
                                   defaulLabelName="filterDefaultLabel"
                                   defaultLabel="-- Select --"
                                   selectValues={selected}
                                   valueField="id"
                                   groupField="departmentID"
                                   displayOnSelectFieldFunctionName="getInitials"  
                                   onBlur={onChange}
                                   onOpen={onOpen}/>
            </div>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func,
    availableValues: PropTypes.array,
    specialOptions: PropTypes.array,
    onOpen: PropTypes.func,
	filterLabel: PropTypes.string
};

export default Filter;
