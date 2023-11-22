import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import { fonts } from "../../../theme";

const styles = (color: any) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: color.main_bg,
      padding: ms(15),
    },
    container: {
      flex: 1,
    },
    title: {
      fontSize: ms(30),
      color: color.primary_text,
      fontFamily: fonts.bold,
      marginVertical: ms(50),
    },
    footer: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      marginTop: ms(10),
    },
    createLabel: {
      fontSize: ms(13),
      color: color.sub_text,
      fontFamily: fonts.regular,
    },
    errorMsg: {
      fontSize: ms(13),
      color: color.red,
      fontFamily: fonts.regular,
      marginTop: ms(5),
    },
    createNow: {
      fontSize: ms(13),
      color: color.accent_text,
      fontFamily: fonts.regular,
    },
  });

export default styles;
