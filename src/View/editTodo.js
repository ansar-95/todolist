import { createEl, addAttribute } from "./generic";
import { editTodoTitle } from "../Controller/todoController";
export const editTodo = (parent) => {
  const modal = document.createElement("div");
  modal.classList =
    "modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto";
  addAttribute(
    modal,
    ["id", "editTodoModal"],
    ["tabindex", "-1"],
    ["aria-labelledby", "exampleModalFullscreenLabel"],
    ["aria-hidden", "true"]
  );
  const modalDialog = createEl(
    "div",
    undefined,
    "modal-dialog modal-fullscreen relative w-auto min-h-screen pointer-events-none",
    modal
  );
  const modalContent = createEl(
    "div",
    undefined,
    "modal-content border-none  relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current",
    modalDialog
  );
  const modalHeader = createEl(
    "div",
    undefined,
    "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
    modalContent
  );
  const modalTitle = createEl(
    "h5",
    "Edit todo",
    "text-xl font-medium leading-normal text-gray-800",
    modalHeader
  );
  const button = createEl(
    "button",
    undefined,
    "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
    modalHeader
  );
  const modalBody = createEl(
    "div",
    undefined,
    "modal-body p-4  h-[80vh]",
    modalContent
  );

  createEl(
    "span",
    "description",
    "block text-sm font-medium text-slate-700",
    modalBody
  );
  const inputDescription = createEl(
    "input",
    undefined,
    "border-solid border-2 border-sky-500 rounded  ",
    modalBody
  );
  addAttribute(inputDescription, ["type", "text"]);
  const modalFooter = createEl(
    "div",
    undefined,
    "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md",
    modalContent
  );
  const closeButton = createEl(
    "button",
    "close",
    "inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out",
    modalFooter
  );
  const addButton = createEl(
    "button",
    "Add",
    "inline-block px-6 mx-2 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out",
    modalFooter
  );
  addAttribute(closeButton, ["data-bs-dismiss", "modal"]);

  closeButton.addEventListener("click", (event) => {
    modal.classList.add("hidden");
  });

  addButton.addEventListener("click", (event) => {
    document.querySelectorAll("#todoItems > h5").forEach((element) => {
      if (element.ariaSelected === "true") {
        editTodoTitle(element.textContent, inputDescription.value);
        element.textContent = inputDescription.value;
      }
    });
    modal.classList.add("hidden");
  });

  parent.append(modal);
  return modal;
};
