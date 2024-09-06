import { router } from 'expo-router';
import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';

import AgoraUIKit from 'agora-rn-uikit';

import { PropsInterface } from 'agora-rn-uikit/src/Contexts/PropsContext';
import { AgoraUIKitProps } from 'agora-rn-uikit';
import { ConnectionData } from 'agora-rn-uikit/src/Contexts/PropsContext';
type ExtendedConnectionData = ConnectionData & { token?: string };

export default function HomeScreen() {
  const [videoCall, setVideoCall] = useState(true);
  const props: AgoraUIKitProps = {
    connectionData: {
      appId: process.env.EXPO_PUBLIC_APP_ID,
      channel: 'test',
      token: process.env.EXPO_PUBLIC_TOKEN
    } as ExtendedConnectionData,
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit connectionData={props.connectionData} rtcCallbacks={props.rtcCallbacks} />
  ) : null;
}



// export default function HomeScreen() {
  
//   const connectionData = {
//     appId: 'ad99714a73a1420d82236c4909eff63c',
//     channel: 'test',
//     token: '007eJxTYHh8nYundp797a2r0q5PWp6nFdDGv89jmoP+7kWvN2fxlLxQYEhMsbQ0NzRJNDdONDQxMkixMDIyNks2sTSwTE1LMzNOPtd8K60hkJFBkD+clZEBAkF8FoaS1OISBgYAZKUfTg==',
//    };

//    return(
//     <AgoraUIKit connectionData={connectionData} />
//    )

// }