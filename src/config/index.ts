import getEnv from "@/src/config/getEnv";

type TConfig = {
  apiUrl: string;
  projectId: string;
};

const config: TConfig = {
  apiUrl: getEnv("EXPO_PUBLIC_API_URL"),
  projectId: getEnv("EXPO_PUBLIC_PROJECT_ID"),
} as const;

export default config;
