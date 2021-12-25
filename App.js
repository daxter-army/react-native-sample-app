import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

import Task from "./components/Task";

const TASKS = [
  {
    id: 1,
    completed: false,
    label: "hello",
  },
  {
    id: 2,
    completed: false,
    label: "jello",
  },
  {
    id: 3,
    completed: false,
    label: "shalom",
  },
];

const App = () => {
  const [tasks, setTasks] = useState(null);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    // simulate api fetching
    setTimeout(() => {
      setTasks(TASKS);
    }, 500);
  }, []);

  const newTaskHandler = (event) => {
    if (!event.nativeEvent.text) return;

    const newTask = {
      id: tasks.length + 1,
      completed: false,
      label: event.nativeEvent.text,
    };

    setTaskInput("");
    setTasks([...tasks, newTask]);
  };

  const taskDeleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskInputChangeHandler = (event) => {
    setTaskInput(event.nativeEvent.text);
  };

  const taskStatusHandler = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
          return task;
        } else {
          return task;
        }
      })
    );
  };

  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionHeading}>Today's tasks</Text>
      <ScrollView>
        <View style={styles.tasksListContainer}>
          {tasks ? (
            tasks.length !== 0 ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  status={task.completed}
                  taskDeleteClick={taskDeleteHandler}
                  taskStatusClick={taskStatusHandler}
                >
                  {task.label}
                </Task>
              ))
            ) : (
              <Text>Let's get started</Text>
            )
          ) : (
            <Text style={styles.loader}>Fetching...</Text>
          )}
        </View>
      </ScrollView>
      <KeyboardAvoidingView>
        {/* <View> */}
        <TextInput
          style={styles.inputText}
          value={taskInput}
          onChange={taskInputChangeHandler}
          placeholder="What's on your mind ?"
          onSubmitEditing={newTaskHandler}
        />
        {/* </View> */}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#E8EAED",
    flex: 1,
    justifyContent: "space-between",
  },
  sectionHeading: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputText: {
    marginVertical: 20,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 6,
  },
  tasksListContainer: {},
  loader: {},
});

export default App;
