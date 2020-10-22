import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
//import {ListView} from 'deprecated-react-native-listview';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  keyExtractor = (item) => item.name;

  componentWillMount() {
    this.props.employeesFetch();
  }

  renderRow({item}) {
    return <ListItem employee={item} {...this.props} />;
  }
  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow.bind(this)}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

function mapStateToProps({employees}) {
  return {
    employees: _.map(employees, (val, uid) => {
      return {...val, uid};
    }),
  };
}
export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
