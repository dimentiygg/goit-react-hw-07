import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <FaUser size={20} className={css.user} />
        <p className={css.text}>{name}</p>
        <FaPhoneAlt size={20} className={css.phone} />
        <p className={css.text}>{number}</p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
