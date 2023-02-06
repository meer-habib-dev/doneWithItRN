import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Separator from "../components/Separator";
import { useAuth } from "../auth/useAuth";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
const AccountScreen = ({ navigation }) => {
  const {
    user: { name, email },
    logOut,
  } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={name}
          subTitle={email}
          image={require("../assets/meet-team.jpg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={<Icon name="logout" backgroundColor="#ffc66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
  },
  container: {
    marginVertical: 20,
  },
});
