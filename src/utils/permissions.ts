import { PermissionsAndroid, Platform } from "react-native";

export const cameraPermission = async () => {
  try {
    if (Platform.OS !== "android") return;
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.log("cameraPermission[ERROR]", error);
    return false;
  }
};

export const mediaPermission = async () => {
  try {
    if (Platform.OS !== "android") return;
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const granted = await PermissionsAndroid.request(permission);
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.log("mediaPermission[ERROR]", error);
    return false;
  }
};

export const mediaVideoPermission = async () => {
  try {
    if (Platform.OS !== "android") return;
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const granted = await PermissionsAndroid.request(permission);
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.log("mediaVideoPermission[ERROR]", error);
    return false;
  }
};

export const notificationPermission = async () => {
  try {
    if (Platform.OS !== "android") return;
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.log("notificationPermission[ERROR]", error);
    return false;
  }
};

export const contactPermission = async () => {
  try {
    if (Platform.OS !== "android") return;
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.log("contactPermission[ERROR]", error);
    return false;
  }
};
