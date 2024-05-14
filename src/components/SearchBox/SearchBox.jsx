import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

export default function SearchBox() {
  const inputId = useId();
  const dispatch = useDispatch();

  return (
    <>
      <label className={css.label} htmlFor={inputId}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id={inputId}
      />
    </>
  );
}
