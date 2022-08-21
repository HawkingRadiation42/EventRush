import React from "react";
const { AuthContext } = require("../AuthContext");

const Calender = () => {
  const { register } = React.useContext(AuthContext);
  const [register1, setRegister] = register;

  return (
    <div class="flex items-center justify-center py-8 px-4">
      <div class="max-w-sm w-full shadow-lg">
        <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div class="px-4 flex items-center justify-between">
            <span
              tabindex="0"
              class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
            >
              August 2022
            </span>
            <div class="flex items-center">
              <button
                aria-label="calendar backward"
                class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between pt-12 overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Mo
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Tu
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        We
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Th
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Fr
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Sa
                      </p>
                    </div>
                  </th>
                  <th>
                    <div class="w-full flex justify-center">
                      <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Su
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        1
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        2
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium mt-[1.4em]">
                        3
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        4
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        5
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        6
                      </p>
                    </div>
                  </td>
                  <td class="pt-6">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        7
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        8
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        9
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        10
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="w-full h-full">
                      <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          11
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        12
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        13
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        14
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        15
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        16
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        17
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        18
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        19
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        20
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        <a
                          role="link"
                          tabindex="0"
                          class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                        >
                          21
                        </a>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        <a
                          role="link"
                          tabindex="0"
                          class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus:bg-orange-300 hover:bg-orange-300 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-orange-400 rounded-full"
                        >
                          22
                        </a>
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        23
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        24
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        <a
                          role="link"
                          tabindex="0"
                          class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:bg-red-500 hover:bg-red-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-red-700 rounded-full"
                        >
                          25
                        </a>
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        26
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        27
                      </p>
                    </div>
                  </td>
                  <td className="">
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center  rounded-lg">
                      <p class="text-base text-gray-500 dark:text-gray-100">
                        {register1 ? (
                          <a
                            role="link"
                            tabindex="0"
                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full"
                          >
                            28
                          </a>
                        ) : (
                          <a
                            role="link"
                            tabindex="0"
                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus:bg-orange-300 hover:bg-orange-300 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-orange-400 rounded-full"
                          >
                            28
                          </a>
                        )}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        29
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        30
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                        31
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium"></p>
                    </div>
                  </td>
                  <td>
                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p class="text-base text-gray-500 dark:text-gray-100 font-medium"></p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
