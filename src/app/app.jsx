import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/cmpFilter';
import { testData, specialOptions, departments } from '../common/testDataProvider';
import { SelectAllByGroupIDFilterOption, SelectAllFilterOption } from '../common/recordDefinitions';
import { ALL_BY_GROUP, multiSelectSelectAll } from '../common/utils';
import { _ } from 'underscore';
import Immutable from 'immutable';


/* ENTRY POINT FOR APPLICATION */
class App extends Component {
    constructor() {
        super();
        this.state = {
            testData: [],
			specialOptions: []
        };
    }

    componentDidMount() {
		this.setState({
			testData: testData,
			specialOptions: specialOptions
		});
    }
	
	onChange = () => {
		console.log('Changed!')
	}
	
	onOpen = () => {
		console.log('Opened!')
	}
	
    render() {
		let { testData, specialOptions } = this.state;
		
		let grouped = new Immutable.List(testData)
			.groupBy(d => d.departmentID)
			.map((g, k) => {
				const dept = departments.find(d => d.departmentID === k);
				return {
					departmentID: k,
					name: dept ? dept.name : ""
				};
			}).sortBy(g => g.name);
		
		grouped.forEach(g => 
			specialOptions.push(new SelectAllByGroupIDFilterOption(ALL_BY_GROUP(g.departmentID, `All ${g.name}`), 'departmentID'))
		);
		
		let selectAllSortPosition = grouped.size + 1; //SortOrder - this option follows all available selectAllByGroup options
		specialOptions.push(new SelectAllFilterOption(multiSelectSelectAll, 'departmentID', selectAllSortPosition)); 
		
        return <div className="react-multiSelect-root" >
			<Filter 
				onChange={this.onChange}
				availableValues={testData}
				specialOptions={specialOptions}
				onOpen={this.onOpen}
				filterLabel={`Mult-select Filter`}
			/>
		</div>;
    }
}

export default App;
