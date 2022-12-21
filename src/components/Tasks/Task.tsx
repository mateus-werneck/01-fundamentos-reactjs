import { Checkbox, FormControlLabel } from "@mui/material";
import { TbTrash } from "react-icons/tb";
import styles from "./task.module.css";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import React from "react";
import { removeElement } from "../../utils/Array";

interface TaskProps {
  task: string;
  setDone: (value: any) => void;
  setTask: (value: any) => void;
}

export function Task({ task, setDone, setTask }: TaskProps) {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDone((value: string[]) => {
      if (event.target.checked) {
        return [...value, task];
      }
      return removeElement(value, task);
    });
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTask((value: string[]) => {
      return removeElement(value, task);
    });
    setDone((value: string[]) => {
      return removeElement(value, task);
    });
  };

  return (
    <div className={styles.task}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleCheck}
            icon={<RiCheckboxBlankCircleLine size={24} />}
            checkedIcon={
              <RiCheckboxCircleFill
                size={24}
                style={{ color: "var(--purple)" }}
              />
            }
            size="medium"
            sx={{ color: "var(--blue)" }}
          />
        }
        label={task}
        sx={{ color: "#f2f2f2" }}
      />
      <button className={styles.button} type="button" onClick={handleDelete}>
        <TbTrash className={styles.trash} size={20} />
      </button>
    </div>
  );
}