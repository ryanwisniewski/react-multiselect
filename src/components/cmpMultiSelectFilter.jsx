import PropTypes from 'prop-types';
import React, { Component } from 'react';
let _ = require('underscore');
import FilterCheckbox from './cmpFilterCheckbox.jsx';

class MultiSelectFilter extends Component {
    constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.onSelectClick = this.onSelectClick.bind(this);
        this.onClickOut = this.onClickOut.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.getValueDisplay = this.getValueDisplay.bind(this);
        this.state = {
            options: [],
            selectedIDs: []
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.onClickOut);
        this.setState({
            options: this.props.options
        });
    }

    componentWillReceiveProps(nextProps) { //TODO: update to 'did'
        this.setState({
            options: nextProps.options,
            selectedIDs: nextProps.options.filter(o => o.isSelected).map(o => o[nextProps.valueField])
        });
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.onClickOut);
    }
    
    onCheck(e, option) {
        let thisDD = $(this.wrapperRef).children();
        let cbs = thisDD.find('input[type="checkbox"]:not([data-is-special-option="true"])'); //Only update regular non special option checkboxes
        if(option.filterFunction) { //If this is a specialOption
            cbs = option.filterFunction(cbs, option[this.props.groupField]); //Filter options based on specialOptions filter function 
            $(e.target).attr('checked',false); //specialOptions do not stay checked
        }

        let selectedDiv = thisDD.find(`#${this.props.selectName}`),
            options = this.state.options.slice(0);

        for (var i = 0; i < cbs.length; i++) {
            let cb = cbs[i];
            let cbIndex = options.findIndex(o => o[this.props.valueField] === parseInt(cb.id));
            if(options[cbIndex]){
                options[cbIndex] = options[cbIndex].set('isSelected', cb.checked);
            }
        }

        this.setState({ 
            selectedIDs: thisDD.find('input[type="checkbox"]:checked').map(function() { return parseInt(this.id) }).toArray(),
            options: options
        });
    }
    
    onBlur() {
        if (!_.isEqual(this.state.selectedIDs, this.props.options.filter(o => o.isSelected).map(o => o[this.props.valueField]))) {
            //Only trigger when the selected values have changed - this will limit unnecessary hits to the server
            this.props.onBlur(this.state.selectedIDs);
        }
        else {
            //Needed to let the store know the filter is no longer open
            this.props.onBlur(); 
        }
    }

    onSelectClick() {
        let dd = $(`#${this.props.name}`);
        if ($(dd).css('display') !== 'none') {
            this.onBlur();
        }
        else {
            if (this.props.onOpen) {
                this.props.onOpen();
            }
        }
        dd.slideToggle('fast');
    }

    onClickOut(e) {
        //Only trigger when the dropdown is open and user is not clicking within the component
        let dd = $(`#${this.props.name}`);
        if ($(dd).css('display') !== 'none' && this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            dd.slideToggle('fast');
            this.onBlur(e);
        }
    }

    getValueDisplay() {
        let selected = this.state.options.filter(o => o.isSelected);
        return (selected.length > 1 && selected.length === this.state.options.length) ? "All" : 
			selected.map(v => v[this.props.displayOnSelectFieldFunctionName] ? v[this.props.displayOnSelectFieldFunctionName]() : "").join(", ");
    }

    render() {
        let { name, defaulLabelName, defaultLabel, displayOnSelectFieldFunctionName, valueField, groupField, specialOptions, selectName } = this.props;
        let items = [],
            valueDisplay = this.getValueDisplay();
        
        _.chain(specialOptions).filter(o => o.listPosition === "start").sortBy("sortOrder").each(o => items.push(o)).value();
        this.state.options.forEach(o => items.push(o));
        _.chain(specialOptions).filter(o => o.listPosition === "end").sortBy("sortOrder").each(o => items.push(o)).value();
        
		
        return (
            <div ref={(n) => this.wrapperRef = n} className="pure-menu"> 
                <div> 
					<a href="#" id="menuLink1" className="pure-menu-link" onClick={this.onSelectClick}>
						{!valueDisplay && 
						<div id={defaulLabelName} className="defaultLabel">{defaultLabel}</div>    
						}
						{valueDisplay && 
							<div id={selectName} title={valueDisplay} className="selectedOptions">{valueDisplay}</div>  
						}
					</a>
                </div>
                <div>
                    <div>
                        <ul id={name} className="pure-menu-has-children">
                            {items.map((option, i) => {
                                const id = option[valueField];
                                return (
                                    <li key={`${id}#${i}`} title={option.getDisplay()} className="pure-menu-item pure-menu-allow-hover" >
                                        <FilterCheckbox
                                            id={id}
                                            option={option}
                                            checked={option.isSelected}
                                            onChange={(e) => this.onCheck(e, option)}
                                            groupField={groupField}
                                            displayOnSelectFieldFunctionName={displayOnSelectFieldFunctionName}
                                        />
                                    </li>
                                )}
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


MultiSelectFilter.propTypes = {
    name: PropTypes.string,
    selectName: PropTypes.string,
    defaultLabel: PropTypes.string,
    onBlur: PropTypes.func, 
    specialOptions: PropTypes.array,
    options: PropTypes.array,
    valueField: PropTypes.string,
    groupField: PropTypes.string,
    displayOnSelectFieldFunctionName: PropTypes.string,
    onOpen: PropTypes.func, 
};

export default MultiSelectFilter;