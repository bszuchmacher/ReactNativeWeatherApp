import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import moment from "moment";

export default class ListFunction extends Component {
  constructor(props) {
    super(props);

    (this.array = [
      {
        id: 1,  
        title: "Maybe",
      },
    ]),
      (this.state = {
        arrayHolder: [],
        textInput_Holder: "",
      });
  }

  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] });
  }

  joinData = () => {
    this.array.push({ title: this.state.textInput_Holder });
    this.setState({ arrayHolder: [...this.array] });
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Type AGREE or DISAGREE"
          onChangeText={(data) => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Submit Me </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.arrayHolder}
          width="100%"
        //   extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.title)}
            >
              {" "}
              {item.title}, {moment().local().format("MM-DD-YYYY HH:mm")}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginTop: 10,
    borderWidth: 5,
    borderColor: "#4CAF50",
    borderRadius: 7,
    width: 300,
    textAlign: "center",
  },

  textInputStyle: {
    textAlign: "center",
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 7,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "white",
    flexDirection: "row",
  },

  button: {
    width: 120,
    height: 40,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    marginTop: 20,
    textAlign: "center",
    marginLeft: 80,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
