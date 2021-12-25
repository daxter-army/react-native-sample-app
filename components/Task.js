import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ id, taskDeleteClick, taskStatusClick, status, children }) => {
  return (
    <View style={styles.taskWrapper}>
      <View style={styles.taskLeft}>
        <TouchableOpacity onPress={() => taskStatusClick(id)}>
          <Text
            style={[
              styles.taskStatus,
              !status ? styles.taskStatusDone : styles.taskStatusNotDone,
            ]}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.taskText,
            !status ? styles.taskTextDone : styles.taskTextNotDone,
          ]}
        >
          {children}
        </Text>
      </View>
      <TouchableOpacity onPress={() => taskDeleteClick(id)}>
        <Text style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 6,
    height: 60,
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskStatus: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 5,
  },
  taskStatusDone: {
    borderColor: "#73c2fb",
  },
  taskStatusNotDone: {
    borderColor: "#98fb60",
  },
  taskText: {
    marginLeft: 15,
    fontSize: 20,
  },
  taskTextDone: {
    textDecorationLine: "none",
  },
  taskTextNotDone: {
    textDecorationLine: "line-through",
    color: "#C0C0C0",
  },
  taskLogo: {
    width: 20,
    resizeMode: "contain",
  },
  deleteIcon: {
    width: 18,
    height: 18,
    backgroundColor: "tomato",
    borderRadius: 9,
  },
});

export default Task;
