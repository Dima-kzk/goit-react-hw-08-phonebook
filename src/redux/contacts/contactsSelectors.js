// all contacts
export const getContacts = state => state.contacts.contacts.items;

// loading contacts status
export const getLoadingStatus = state =>
  state.contacts.contacts.isLoadingContacts;

// add contact
export const getIsAddingContact = state =>
  state.contacts.contacts.addingContact.isAddingContact;
export const getAddingContactStatus = state =>
  state.contacts.contacts.addingContact.addingContactStatus;

// delete contact
export const getIsDeletingContact = state =>
  state.contacts.contacts.deletingContact.isDeletingContact;

export const getError = state => state.contacts.contacts.error;
export const getFilter = state => state.contacts.filter;
