export default function useContacts() {
  const getContacts = async (count) => {
    try {
      const response = await fetch(
        `https://api.randomuser.me/?results=${count}`
      );
      return response.json();
    } catch (e) {
      console.log("Unable to fetch data:", e);
      return [];
    }
  };

  return {
    getContacts,
  };
}
