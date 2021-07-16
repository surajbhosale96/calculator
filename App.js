import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");

  // function for result text
  const onButtonClick = (text) => {
    if (text == "=") {
      return calculation();
    }
    setResultText(resultText + text);
  };
  // function for calculation
  const calculation = () => {
    setCalcText(eval(resultText));
  };

  // function for calculation text
  const onOperatorClick = (text) => {
    let operations = ["DEL", "AC", "+", "-", "*", "/"];
    if (text == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }
    if (text == "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }
    if (operations.includes(resultText.toString().split("").pop())) return;
    setResultText(resultText + text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}> {resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(1);
              }}
            >
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(2);
              }}
            >
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(3);
              }}
            >
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(4);
              }}
            >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(5);
              }}
            >
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(6);
              }}
            >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(7);
              }}
            >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(8);
              }}
            >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(9);
              }}
            >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(".");
              }}
            >
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(0);
              }}
            >
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick("=");
              }}
            >
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operators}>
          <TouchableOpacity
            onPress={() => {
              onOperatorClick("DEL");
            }}
          >
            <Text style={styles.operatorButtons}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperatorClick("AC");
            }}
          >
            <Text style={styles.operatorButtons}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperatorClick("+");
            }}
          >
            <Text style={styles.operatorButtons}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperatorClick("-");
            }}
          >
            <Text style={styles.operatorButtons}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperatorClick("/");
            }}
          >
            <Text style={styles.operatorButtons}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperatorClick("*");
            }}
          >
            <Text style={styles.operatorButtons}>*</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    backgroundColor: "grey",
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  calculation: {
    flex: 1,
    backgroundColor: "#d6d6c2",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    backgroundColor: "#434442",
    flex: 3,
  },
  operators: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#636363",
    flex: 1,
  },
  resultText: {
    fontSize: 50,
    color: "white",
  },
  calculationText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  number: {
    fontSize: 40,
    color: "white",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  operatorButtons: {
    color: "white",
    fontSize: 40,
  },
});
