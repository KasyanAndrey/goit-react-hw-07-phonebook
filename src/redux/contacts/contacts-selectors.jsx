export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalezedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalezedFilter),
  );
};

export const getIsAdded = state => {
  const contacts = getContacts(state);

  const isAdded = name => contacts.map(({ name }) => name).includes(name);
  return isAdded;
};
