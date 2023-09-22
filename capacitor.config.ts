import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'vc_shuttle',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
