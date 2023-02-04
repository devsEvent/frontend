export const getEvents = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("failed to fetch data.");
  }

  const data = await res.json();

  return data.result;
};
