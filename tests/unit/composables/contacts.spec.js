import useContacts from "@/composables/contacts.js";

test("useContacts", async () => {
  const { getContacts } = useContacts();

  const contacts = [
    {
      name: {
        first: "Daria",
        last: "Hubert",
      },
      phone: "05-136-279",
      address: {
        city: "Darbhanga",
        postcode: 39166,
        state: "Uttar Pradesh",
        country: "India",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    },
  ];
  const response = {
    info: {},
    results: contacts,
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(response),
    })
  );

  const result = await getContacts();
  expect(result).toBe(response);
});
