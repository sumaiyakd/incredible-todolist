import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) { // Avoid adding empty tasks
      addTask(newTask);
      setNewTask(''); // Clear input after adding
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter new task"
        value={newTask}
        onChangeText={setNewTask}
        style={{
          borderBottomWidth: 1,
          padding: 8,
          marginBottom: 10,
        }}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

export default ToDoForm;
