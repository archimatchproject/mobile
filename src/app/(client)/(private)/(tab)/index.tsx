import { useRouter } from 'expo-router';
import React from 'react';

import { Button, FocusAwareStatusBar, View } from '@/shared/components';

export default function Explorer() {
  const router = useRouter();

  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <Button
        label={'profile'}
        onPress={() => {
          router.replace(`/(client)/(profile)/profile`);
        }}
        className="h-12 rounded-md"
      />
    </View>
  );
}