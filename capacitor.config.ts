import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iie.vcshuttle',
  appName: 'android',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
