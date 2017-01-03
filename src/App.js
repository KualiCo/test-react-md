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
    <SelectFieldColumn menuItems={types} defaultValue={type} id={name} />
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
        <Card className="md-cell">
          <CardTitle title="Hello, World!"  />
          <CardText>
            <Chip label="Hello, World" />
            <Chip label="I can be removed" removable />
            <Chip
              label="I have an Avatar"
              avatar={<Avatar random>A</Avatar>}
            />
            <Chip
              label="Removable and Avatar"
              avatar={<Avatar random>R</Avatar>}
              removable
            />
          </CardText>
          <CardActions>
            <Button flat label="Action 1" />
            <Button flat label="Action 2" />
          </CardActions>
        </Card>

        <Card>
          <CardTitle title="AutoCompletes"  />
          <CardText>
            <Autocomplete
              id="programmingLanguages"
              label="Type a programming language"
              data={programmingLanguages}
              filter={Autocomplete.fuzzyFilter}
            />
            <Autocomplete
              id="programmingLanguages"
              label="Type a programming language"
              data={programmingLanguages}
              filter={Autocomplete.fuzzyFilter}
            />
            <Autocomplete
              id="programmingLanguages"
              label="Type a programming language"
              data={programmingLanguages}
              filter={Autocomplete.fuzzyFilter}
            />
            <Autocomplete
              id="programmingLanguages"
              label="Type a programming language"
              data={programmingLanguages}
              filter={Autocomplete.fuzzyFilter}
            />
            <Autocomplete
              id="programmingLanguages"
              label="Type a programming language"
              data={programmingLanguages}
              filter={Autocomplete.fuzzyFilter}
            />
          </CardText>
          <CardActions>
            <Button flat label="One" />
            <Button flat label="Two" />
            <Button flat label="Three" />
          </CardActions>
        </Card>

        <Card>
          <CardTitle title="AutoCompletes"  />
          <CardText>
            <List>
              <Subheader primaryText="Avatars"/>
              <ListItem
                primaryText="An Avatar with a FontAwesome icon."
                rightIcon={<InfoIcon />}
                leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
              />
              <ListItem
                primaryText="An Avatar with a FontAwesome icon."
                rightIcon={<InfoIcon />}
                leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
              />
              <ListItem
                primaryText="An Avatar with a FontAwesome icon."
                rightIcon={<InfoIcon />}
                leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
              />
              <Divider />
              <ListItem
                primaryText="An avatar with a FontAwesome icon and a random color."
                leftAvatar={<Avatar icon={<FontIcon>home</FontIcon>} random />}
              />
              <ListItem
                primaryText="An Avatar using a Letter and the default color."
                leftAvatar={<Avatar>M</Avatar>}
              />
              <ListItem
                primaryText="An Avatar using a Letter and a random color."
                leftAvatar={<Avatar random>O</Avatar>}
              />
              <ListItem
                primaryText="An Avatar with a FontAwesome icon."
                leftAvatar={<Avatar icon={<FontIcon>fingerprint</FontIcon>} />}
              />
              <ListItem
                primaryText="An avatar with a FontAwesome icon and a random color."
                leftAvatar={<Avatar icon={<FontIcon>error_outline</FontIcon>} random />}
              />
              <ListItem
                primaryText="An Avatar using a Letter and the default color."
                leftAvatar={<Avatar>M</Avatar>}
              />
              <ListItem
                primaryText="An Avatar using a Letter and a random color."
                leftAvatar={<Avatar random>O</Avatar>}
              />
            </List>
          </CardText>
          <CardActions>
            <Button raised primary label="One" iconClassName="fa fa-hand-spock-o" />
            <Button raised label="Two" />
            <Button flat label="Three" />
          </CardActions>
        </Card>

        <DataTable baseId="nutrition" className="nutrition-table" onRowToggle={this.onRowToggle}>
          <TableHeader>
            <TableRow>
              <TableColumn>Dessert (100g serving)</TableColumn>
              <TableColumn selectColumnHeader>Type</TableColumn>
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

        <Card>
          <CardTitle title="Date Pickers"  />
          <CardText>
            <DatePicker
              id="appointment"
              label="Select an appointment date"
            />
            <DatePicker
              id="appointmentPortrait"
              label="Portrait Mode"
              displayMode="portrait"
            />
            <DatePicker
              id="appointmentLandscape"
              label="Landscape Mode"
              displayMode="landscape"
            />
          </CardText>
        </Card>

        <Card>
          <CardTitle title="Lots of Text Fields"  />
          <CardText>
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
            <TextField
              id="iconLeftPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="iconRightPhone"
              placeholder="Phone"
              type="tel"
              rightIcon={<FontIcon>phone</FontIcon>}
              size={10}
            />
            <TextField
              id="requiredField"
              label="I am required"
              required
            />
            <TextField
              id="requiredPhone"
              label="Phone *"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              required
            />
            <TextField
              id="disabledText"
              label="Help, I am disabled"
              disabled
            />
            <TextField
              id="disabledPhone"
              label="Phone"
              type="tel"
              leftIcon={<FontIcon>phone</FontIcon>}
              size={10}
              disabled
            />
            <TextField
              id="disabledMultiline"
              label="Try to type many letters"
              placeholder="But you can't.."
              rows={2}
              maxRows={4}
              disabled
            />
          </CardText>
        </Card>


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

