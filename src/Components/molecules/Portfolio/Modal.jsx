import React from 'react';
import ReactDOM from 'react-dom';
import { FaRegMehRollingEyes } from "react-icons/fa";


const Modal = ({ isShowing, hide, projectModal }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-gray-900 opacity-50" />
        <div className="fixed top-0 left-0 z-20 w-full h-full overflow-x-hidden overflow-y-auto outline-none">
            <div className="bg-white relative my-8 mx-auto rounded-md p-8" style={{ zIndex: '2', maxWidth: "800px" }}>
                <div className="flex w-full bg-gray-200">
                    <div className="md:w-2/4 bg-gray-600 mr-2 relative">
                        <img alt="gallery" className="absolute w-full h-full object-cover object-center inset-0" src={projectModal.image} />
                        <a href={projectModal.deployed_url} target="blank" className="absolute z-10 w-full h-full rounded bg-gray-900 opacity-0 hover:opacity-75 transition delay-100 duration-300 ease-in shadow-md flex items-center justify-center flex-col cursor-pointer">
                            <FaRegMehRollingEyes className="text-6xl text-second" />
                        </a>
                    </div>
                    <div className="md:w-3/4 py-4 mx-2">
                        <h1 className="text-3xl font-bold font-second">{projectModal.name}</h1>
                        <p className="mt-6 font-second text-base">{projectModal.description}</p>
                        <div className="mt-12">
                            <div className="flex flex-wrap">
                                {projectModal.stack.map(name => (
                                    <p className="px-3 py-1 bg-second text-indigo-500 text-sm  rounded-md mr-2 font-primary"># {name} </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex justify-start mt-6">
                            <button type="button" className="text-base font-normal bg-gray-700 cursor-pointer border-none px-6 py-2 rounded text-white hover:bg-gray-900" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </React.Fragment >, document.body
) : null;

export default Modal;