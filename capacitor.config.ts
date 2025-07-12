import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.be4e31bdc64a4821bc6081440dcf1e4b',
  appName: 'lingua-leap-voyager',
  webDir: 'dist',
  server: {
    url: "https://be4e31bd-c64a-4821-bc60-81440dcf1e4b.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#3F8EFC',
    },
    Haptics: {},
    LocalNotifications: {
      smallIcon: "ic_stat_lingua_leap",
      iconColor: "#3F8EFC",
    },
  },
};

export default config;