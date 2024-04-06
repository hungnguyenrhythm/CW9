import React, { Component } from 'react';
import List from './List';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class FilteredList extends Component {
  constructor(props) {
  super(props);
 // The state is just a list of key/value pair (like a hashmap)
  this.state = {
    search: "",
    // ADDED state for type
    type:""
  };
  this.onSearch = this.onSearch.bind(this);
  this.onFilter = this.onFilter.bind(this);
  }

 // Sets the state whenever the user types on the search bar 
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }

  filterItem = (item) => {
 // Checks if the current search term is contained in this item
    // ADD CONDITION TO CHECK ON ITEM"S TYPE
    return (item.name.toLowerCase().search(this.state.search) !== -1) || (item.type === this.state.type);
  }

  // filterItemByType = (item) => {
  //   //checks if item type is the same as selected type from dropdown
  //   //item.type.value === event.target.value
  //   return (item.type === this.state.type)
  // }

  // ADD event handling method for those dropdown items to get its eventKey and event
  onFilter = (event) => {
    this.setState({type: event.target.value});
  }

  render() {
    return (
      <div className="filter-list">
        <h1 id={"produce"}>Produce Search</h1>
        <DropdownButton id={"dropdown-basic-button"} title={"Type"}>
          <Dropdown.Item eventKey="" value="" onSelect={this.onFilter}>All</Dropdown.Item><br></br>
          <Dropdown.Item eventKey="Fruit" value="Fruit" onSelect={this.onFilter}>Fruit</Dropdown.Item><br></br>
          <Dropdown.Item eventKey="Vegetable" value="Vegetable" onSelect={this.onFilter}>Vegetable</Dropdown.Item>
          {/*{itemTypes.map((type) => (
            //<Dropdown.Item value={type} onClick={this.filterByType(type)}>{type}</Dropdown.Item>
          // ))}*/}
        </DropdownButton>
        <br></br>
        <input type="text" size="30" placeholder="Search" onChange={this.onSearch} />
 {/* we are taking the items property (which is the list of
 produce), filtering the content to match the search word, then
 passing the filtered produce into the List component. */}
        <List items={this.props.items.filter(this.filterItem)}/>
      </div>
    );
  }
}

export default FilteredList;