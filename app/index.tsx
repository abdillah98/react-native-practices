import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View>
      {/* Container  */}
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/profile")} // Nama harus sesuai dengan key di RootStack
        >
          <Text style={styles.buttonText}>Pergi ke Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/discount")} // Nama harus sesuai dengan key di RootStack
        >
          <Text style={styles.buttonText}>Pergi ke Discount</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/todos")} // Nama harus sesuai dengan key di RootStack
        >
          <Text style={styles.buttonText}>Pergi ke Todos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
