import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FilterCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentDidUpdate = (prevProps) => {
        const { checked, option } = this.props;
        if (prevProps.checked !== checked) {
            this.updateChecked(checked, option);
        }
    }

    updateChecked = (checked, option) => {
        //specialOptions do not stay checked
        this.setState({
            checked: option.isSpecialOption ? false : checked
        });
    }

    onChange = (e, option) => {
        this.props.onChange(e, option);
        this.updateChecked(!e.target.value, option)
    }

    render() {
        const { option, groupField, id, displayOnSelectFieldFunctionName } = this.props;
        return (
            <label>
                <input type="checkbox"
                    checked={this.state.checked}
                    onChange={(e) => this.onChange(e, option)}
                    name={option[groupField]}
                    id={id}
                    data-is-special-option={option.isSpecialOption}
                    value={option[displayOnSelectFieldFunctionName] ? option[displayOnSelectFieldFunctionName]() : ""} />
                {option.getDisplay()}
            </label>
        );
    }
}

FilterCheckbox.propTypes = {
    option: PropTypes.object,
    onCheck: PropTypes.func,
    checked: PropTypes.bool,
    id: PropTypes.number,
    groupField: PropTypes.string,
    displayOnSelectFieldFunctionName: PropTypes.string,
};

export default FilterCheckbox;