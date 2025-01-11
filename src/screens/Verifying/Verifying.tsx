import { Button, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import AppLayout from "@/src/components/AppLayout/AppLayout";
import { useAuth } from "@/src/contexts/AuthContext";
import styles from "@/src/screens/Verifying/Verifying.style";

const Verifying = () => {
  const theme = useTheme();
  const { handleRegister, error } = useAuth();

  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Verifying
        </Text>
        <Button title="Verify" onPress={handleRegister} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </AppLayout>
  );
};

export default Verifying;
