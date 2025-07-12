import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

export function useCapacitor() {
  const [isNative, setIsNative] = useState(false);
  
  useEffect(() => {
    setIsNative(Capacitor.isNativePlatform());
    
    if (Capacitor.isNativePlatform()) {
      // Configure status bar
      StatusBar.setStyle({ style: Style.Light });
      StatusBar.setBackgroundColor({ color: '#3F8EFC' });
    }
  }, []);

  const triggerHaptic = async (style: ImpactStyle = ImpactStyle.Light) => {
    if (isNative) {
      await Haptics.impact({ style });
    }
  };

  const triggerNotification = async () => {
    if (isNative) {
      await Haptics.notification({ type: NotificationType.Success });
    }
  };

  return {
    isNative,
    triggerHaptic,
    triggerNotification,
  };
}