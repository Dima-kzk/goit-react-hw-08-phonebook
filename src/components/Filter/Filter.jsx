import { useDispatch } from 'react-redux';
import { filterByName } from 'redux/contacts/contactsSlice';
import { FilterWrapper } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <label htmlFor="filter">
        <p>Find contact by name</p>
        <input
          type="text"
          name="filter"
          onChange={e => dispatch(filterByName(e.target.value.toLowerCase()))}
        />
      </label>
    </FilterWrapper>
  );
}
