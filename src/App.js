import React from 'react';
import { useSelector } from 'react-redux';

import createNavigator from './routes';
import NavigationService from '~/services/navigation';

export default function App() {
  const auth = useSelector(state => state.auth);

  function registerService(ref) {
    NavigationService.setNavigator(ref);
  }

  if (!auth.authChecked) return null;

  const Routes = createNavigator(auth.signedIn);

  return <Routes ref={registerService} />;
}
