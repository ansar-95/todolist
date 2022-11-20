import { data } from "../Model/data";

export const addListToModel = (todo, list) => {
  const index = data.findIndex((x) => x.title === todo);

  data[index].list.push(list);
};

export const listFrom = (todo) => {
  console.log(todo);
  return data.filter((x) => x.title === todo)[0].list;
};
