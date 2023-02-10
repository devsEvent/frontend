export const getEvents = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("failed to fetch data.");
    }

    const data = await res.json();

    return data.result;
  } catch {
    return null;
  }
};
