const getEnv = (key: string, defaultValue?: string): string | never => {
  const value = process.env[key] || defaultValue;

  if (!value) throw new Error(`Missing environment variable: ${key}`);

  return value;
};

export default getEnv;
