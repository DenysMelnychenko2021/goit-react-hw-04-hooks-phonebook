import PropTypes from 'prop-types';
import s from './ContactsItem.module.scss';
import { IconButton } from 'components/iconButton';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';

export const ContactsItem = ({ name, number, onDelete }) => {
  return (
    <>
      <p className={s.Contact}>
        <span>{name}</span>
        <span>{number}</span>
        <IconButton onClick={onDelete} aria-label="delete contact">
          <DeleteIcon width="30" height="30" fill="#FF0000" />
        </IconButton>
      </p>
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
