export const formatDate = (iso: string) => {
  return new Date(iso).toISOString().split("T")[0];
};

export default formatDate;
