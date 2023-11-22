/**
 * Author: ME
 *
 * @format TypeScript Standard Style(standardJS, Prettier)
 * @flow strict-local
 */

import { AppRegistry, LogBox } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import "./src/utils/translation";
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
