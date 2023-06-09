import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState, useEffect } from "react";

export function ButtonWithCount({ colour }) {
  const [count, setCount] = useState(0);

  updateText = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.buttonContainer}>
      <View>
        <Text style={{ color: colour }} onPress={this.updateText}>
          {count}
        </Text>
      </View>
    </View>
  );
}

export function ButtonWithHookCount({ colour }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setText] = useState("");

  useEffect(() => {
    setText(`You clicked ${count} times`);
  });

  updateCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.buttonContainer}>
      <View>
        <Text style={{ color: colour }} onPress={this.updateCount}>
          hook count {count}
        </Text>
        <Text style={{ color: colour }}>{name}</Text>
      </View>
    </View>
  );
}

export function CustomButton({ label, theme }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert("You pressed a button.")}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
