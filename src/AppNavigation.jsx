import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { AuthCard } from './AuthCard';
import { RegisterCard } from './RegisterCard';
import { Video } from './Video';

const AuthNavigator = createStackNavigator({
  Auth: AuthCard,
  Register: {
    screen: RegisterCard
  },
  Video: {
    screen: Video
  }
}, {
  initialRouteName: 'Auth'
})

export const AppNavigation = createAppContainer(AuthNavigator)