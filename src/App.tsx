import React, { useCallback, useState } from 'react';
import {
  StyleSheet, View
} from 'react-native';

import { SCREENS } from "./const/screens";
import Players from "./screens/Players";
import Details from "./screens/Details";

const App = () => {
  const [screen, setScreen] = useState(SCREENS.players);
  const [detailId, setDetailId] = useState<string>("");

  const onScreenChange = useCallback((screen: string, detailID?: string) => {
    setScreen(screen);
    detailID && setDetailId(detailID);
  }, []);

  return (
    <View style={styles.container}>
      {screen === SCREENS.players && <Players changeScreen={onScreenChange} />}
      {screen === SCREENS.details && <Details changeScreen={onScreenChange} id={detailId}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
