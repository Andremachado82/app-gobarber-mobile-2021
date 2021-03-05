import React from 'react';

import { View, ActivityIndicator } from 'react-native'

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

import { useAuth } from '../hooks/auth'

const Routes: React.FC = () => {
  const { loading, user } = useAuth()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }
  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;