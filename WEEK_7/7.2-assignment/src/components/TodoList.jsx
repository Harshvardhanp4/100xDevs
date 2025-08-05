import { useRecoilValue } from "recoil";
import { filteredTodoSelector } from "../store/atom";
export function TodoList() {
  const todos = useRecoilValue(filteredTodoSelector);

  return (
    <ul>
      {todos.map((t, i) => (
        <li key={i}>
          <strong>{t.title}</strong> - {t.description}
        </li>
      ))}
    </ul>
  );
}