import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  ScrollView,

} from "react-native";
import React, { useEffect, useState } from "react";

const TaskContainer = ({ tasks }: any) => {
  const [task, setTask] = useState(tasks);
  const [filter, setFilter] = useState("ALL");
  
  const handlSetFilter= (value:string)=>{
    setFilter(value)
  }

  useEffect(() => {
    setTask([...filter == "ALL" ?tasks: tasks.filter((d: any) => d.status == filter)])
  }, [filter]);
  const renderTask = ({ item }: any) => {
    const getColor = (colorCase: any) => {
      switch (colorCase) {
        case "Completed":
          return "green";
        case "Pending":
          return "red";
        case "In Progress":
          return "blue";
      }
    };

    return (
     
        <TouchableOpacity
          style={styles.taskCard}
          onPress={() => setTask((d: any) => (d == item.id ? null : item.id))}
        >
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskStatus}>Status: {item.status}</Text>
                <Text
                  style={{
                    ...styles.taskDueDate,
                    color:
                      new Date(item.dueDate).getTime() < Date.now()
                        ? "red"
                        : "#000",
                  }}
                >
                  Due Date: {new Date(item.dueDate).toLocaleDateString()}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...styles.taskTitle,
                    backgroundColor: getColor(item.status),
                    borderRadius: 10,
                    color: "#fff",
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    opacity: 0.6,
                  }}
                >
                  {item.status}
                </Text>
              </View>
            </View>
            <Animated.View
              style={{
                height: task == item.id ? 100 : 0,
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {item.description}
              </Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
   
    );
  };
  return (
    <ScrollView>
 
      <View style={styles.container}>
      <View  style={styles.tabBox}>
        <TouchableOpacity
           style={{
            backgroundColor:filter =="ALL"?"blue":"#fff"
           }}
          onPress={() => handlSetFilter("ALL")}
        >
          <Text style={styles.taskTitle}>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{
            backgroundColor:filter =="In Progress"?"blue":"#fff"
           }}
        
          onPress={() => handlSetFilter("In Progress")}
        >
          <Text   style={styles.taskTitle} >In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{
            backgroundColor:filter =="Pending"?"blue":"#fff"
           }}
        
          onPress={() => handlSetFilter("Pending")}
        >
          <Text   style={styles.taskTitle} >Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:filter =="Completed"?"blue":"#fff"
           }}
          onPress={() => handlSetFilter("Completed")}
        >
          <Text    style={styles.taskTitle} >Completed</Text>
        </TouchableOpacity>
        </View>
      </View>
      
      <FlatList
        data={task}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
    

    </ScrollView>
  );
};

export default TaskContainer;

const styles = StyleSheet.create({
  tabBox: {
    display:"flex",
    justifyContent:"space-between",
    flexDirection: "row",
 
   
   },
  taskTitle: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  container: {
    
    padding: 20,
    backgroundColor: "#fff",
    borderBottomColor:"#000",
    borderBottomWidth:1,
    flex: 1,
  },

  headingContainer: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  taskStatus: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  taskDueDate: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
});
