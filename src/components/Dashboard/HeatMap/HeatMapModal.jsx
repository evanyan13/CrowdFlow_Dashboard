import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const HeatMapModal = ({ open, hideModal }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={hideModal}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-[70vw] h-[80vh]">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 h-[80%] flex justify-center">
                  <div className="sm:flex sm:items-start h-full">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left h-full w-full">
                      <Dialog.Title
                        as="h1"
                        className="text-base font-semibold leading-6 text-gray-900 text-3xl ml-12"
                      >
                        Heat Map
                      </Dialog.Title>
                      <div className="mt-2 w-full h-full">
                        <iframe
                          src="https://console-intl.huaweicloud.com/dlv/vision/share/?id=eed82f9d98a0473e9a2e676fd7b78e85&locale=en-us&region=ap-southeast-3"
                          height="100%"
                          width="800vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 absolute bottom-4 right-4">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={hideModal}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HeatMapModal;