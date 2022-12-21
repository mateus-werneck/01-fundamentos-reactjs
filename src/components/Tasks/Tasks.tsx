import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "../Badge/Badge";
import styles from "./tasks.module.css";

import clipboard from "../../assets/Clipboard.svg";
import { Task } from "./Task";
import { TaskBar } from "../TaskBar/TaskBar";

export function Tasks() {
  const [tasks, setTask] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);

  const createdTasks = useCallback(() => {
    return tasks.length;
  }, [tasks]);

  const doneTasks = useCallback(() => {
    return done.length;
  }, [done]);

  const taskSummary = (): JSX.Element => {
    return (
      <>
        <div className={styles["task-title"]}>
          <span className={styles["task-counters"]}>
            Tarefas criadas
            <Badge count={createdTasks()} />
          </span>
          <span
            className={styles["task-counters"]}
            style={{ color: "var(--purple)" }}
          >
            Concluídas
            <Badge count={doneTasks()} />
          </span>
        </div>
        {taskContent()}
      </>
    );
  };

  const getTasks = useMemo(() => {
    return tasks.map((task, index) => (
      <Task
        key={`${task}-${index}`}
        task={task}
        setDone={setDone}
        setTask={setTask}
      />
    ))
  }, [tasks])

  const taskContent = (): JSX.Element => {
    return (
      <>
        {emptyContent()}
        {getTasks}
      </>
    );
  };

  const emptyContent = (): JSX.Element => {
    if (tasks.length) {
      return <></>;
    }

    return (
      <div className={styles["task-content"]}>
        <img
          src={clipboard}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <br />
        <span style={{ color: "#808080", fontWeight: 700, fontSize: "16px" }}>
          Você ainda não tem tarefas cadastradas
        </span>
        <span style={{ color: "#808080", fontSize: "16px" }}>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    );
  };

  return (
    <>
      <TaskBar setTask={setTask} />
      <div className={styles.tasks}>{taskSummary()}</div>
    </>
  );
}
