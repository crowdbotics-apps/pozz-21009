import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings123942Navigator from '../features/Settings123942/navigator';
import UserProfile123935Navigator from '../features/UserProfile123935/navigator';
import Settings123934Navigator from '../features/Settings123934/navigator';
import Settings123932Navigator from '../features/Settings123932/navigator';
import SignIn2123930Navigator from '../features/SignIn2123930/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings123942: { screen: Settings123942Navigator },
UserProfile123935: { screen: UserProfile123935Navigator },
Settings123934: { screen: Settings123934Navigator },
Settings123932: { screen: Settings123932Navigator },
SignIn2123930: { screen: SignIn2123930Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
