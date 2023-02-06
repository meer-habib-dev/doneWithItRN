import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
  PickerItemComponent = PickerItem,
  numberOfColumn = 1,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color="gray"
              style={styles.icon}
            />
          )}
          {/* <AppText style={styles.text}> */}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          {/* </AppText> */}
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color="gray"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <Screen>
          <Button title="Click" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumn}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                // label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                  console.log("click");
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    justifyContent: "center",
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: "gray",
    flex: 1,
  },
});
