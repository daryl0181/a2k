import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { key: Math.random().toString(), value: enteredGoalText }]);
  }

  function deleteGoalHandler(goalKey) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.textInput}>
        <TextInput
          style={styles.textBorder}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.value}</Text>
              <Button title="Delete" color="#ff5c5c" onPress={() => deleteGoalHandler(itemData.item.key)} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textBorder: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    margin: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'lightblue',
  },
  goalText: {
    color: 'white',
    width: '20%',
  },
});