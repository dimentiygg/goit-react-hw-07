import { selectVisibleContacts } from "../../redux/contactSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
