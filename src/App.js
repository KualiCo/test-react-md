import React, { Component } from 'react';
import WebFontLoader from 'webfontloader';

import './style/app.scss';
import Autocomplete from 'react-md/lib/Autocompletes';
import Avatar from 'react-md/lib/Avatars';
import BottomNavigation from 'react-md/lib/BottomNavigations';
import Button from 'react-md/lib/Buttons';
import { Card, CardTitle, CardText, CardActions } from 'react-md/lib/Cards';
import Chip from 'react-md/lib/Chips';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Divider from 'react-md/lib/Dividers';
import FontIcon from 'react-md/lib/FontIcons';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Subheader from 'react-md/lib/Subheaders';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TextField from 'react-md/lib/TextFields';
import SelectFieldColumn from 'react-md/lib/DataTables/SelectFieldColumn';

import {nutritionFacts, programmingLanguages} from './constants'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const links = [{
  label: 'Recents',
  iconChildren: 'access_time',
}, {
  label: 'Favorites',
  iconChildren: 'favorite',
}, {
  label: 'Nearby',
  iconChildren: 'place',
}];

const types = ['Ice cream', 'Pastry', 'Other'];

// const noop = () => {};
const InfoIcon = () => <FontIcon>info</FontIcon>;
const facts = nutritionFacts.map(({ name, type, calories, fat, carbs, protein, sodium, calcium, iron }) => (
  <TableRow key={name}>
    <TableColumn>{name}</TableColumn>
    <TableColumn>
      <Button raised secondary iconBefore={false} label="Chat">chat_bubble_outline</Button>
    </TableColumn>

    <TableColumn numeric>{calories}</TableColumn>
    <TableColumn numeric>{fat}</TableColumn>
    <TableColumn numeric>{carbs}</TableColumn>
    <TableColumn numeric>{protein}</TableColumn>
    <TableColumn numeric>{sodium}</TableColumn>
    <TableColumn numeric>{calcium}%</TableColumn>
    <TableColumn numeric>{iron}%</TableColumn>
  </TableRow>
));

export default class App extends Component {

  onRowToggle = () => {
    console.log('toggle')
  }

  render() {
    return (
      <div className="md-grid md-bottom-navigation-offset">

        <DataTable baseId="nutrition" className="nutrition-table" onRowToggle={this.onRowToggle}>
          <TableHeader>
            <TableRow>
              <TableColumn>Dessert (100g serving)</TableColumn>
              <TableColumn>
                Actions
              </TableColumn>

              <TableColumn numeric>Calories</TableColumn>
              <TableColumn numeric>Fat (g)</TableColumn>
              <TableColumn numeric>Carbs (g)</TableColumn>
              <TableColumn numeric>Protein (g)</TableColumn>
              <TableColumn numeric>Sodium (mg)</TableColumn>
              <TableColumn numeric>Calcium (%)</TableColumn>
              <TableColumn numeric>Iron (%)</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {facts}
          </TableBody>
        </DataTable>

        <BottomNavigation
          links={links}
          dynamic={false}
          onNavChange={this._setPage}
          renderNode={this._container}
        />
      </div>
    );
  }
}
