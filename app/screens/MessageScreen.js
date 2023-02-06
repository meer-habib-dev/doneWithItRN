import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Separator from "../components/Separator";
const MessageScreen = () => {
  const initialState = [
    {
      id: 1,
      title: "meer habib",
      subTitle: "meer habib now software engineer",
      image: require("../assets/meet-team.jpg"),
    },
    {
      id: 2,
      title: "meer habib",
      subTitle: "meer habib now software engineer",
      image: require("../assets/meet-team.jpg"),
    },
  ];
  const [messages, setMessages] = useState(initialState);
  const [refresh, setRefresh] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, separators }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refresh}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "meer habib",
              subTitle: "meer habib now software engineer",
              image: require("../assets/meet-team.jpg"),
            },
          ])
        }
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
