import Page1 from './Page1';
import SideMenu from './SideMenu';
import {createDrawerNavigator} from 'react-navigation';

export default createDrawerNavigator({
  Page1: {
    screen: Page1
  },
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

