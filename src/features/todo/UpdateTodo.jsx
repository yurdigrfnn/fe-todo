import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalEdit,
  setName,
  actionSelector,
  todoEdit,
} from "./actionSlice";
import { getAllTodo } from "./getTodoSlice";

export default function UpdateTodo({ page, limit }) {
  const dispatch = useDispatch();
  const actionCreate = useSelector(actionSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoEdit({ id: actionCreate.editId, name: actionCreate.nameTodo })).then(() =>
      dispatch(
        getAllTodo({
          page: page,
          limit: limit,
        })
      )
    );
  };
  return (
    <>
      <Transition appear show={actionCreate.isOpenEdit} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(closeModalEdit())}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Todo
                  </Dialog.Title>
                  <form action="" onSubmit={handleSubmit}>
                    <div className="mt-2">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          className="py-1 px-3 focus:outline-none border-gray-300 focus:border-blue-300 border rounded-md"
                          value={actionCreate.nameTodo}
                          onChange={(e) => dispatch(setName(e.target.value))}
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex gap-2">
                      <button
                        type="submit"
                        className="bg-red-600 border border-red-600 px-4 py-2 text-sm font-medium rounded-md text-white"
                      >
                        Edit Todo
                      </button>
                      <button
                        className="border border-gray-300  px-4 py-2 text-sm font-medium rounded-md"
                        onClick={() => dispatch(closeModalEdit())}
                        type="button"
                      >
                        Cancle
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
