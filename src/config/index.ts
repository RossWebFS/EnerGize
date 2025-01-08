import getEnv from "@/src/config/getEnv";

type TConfig = {
  apiUrl: string;
};

const config: TConfig = {
  apiUrl: getEnv("EXPO_PUBLIC_API_URL"),
} as const;

export default config;
