import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./UploadModal.css"

const UploadModal = () => {
    const [modalClose, setModalClose] = useState(true)
    const closeModal = () => {
        setModalClose(false)
    }
    return (
        <>
            {modalClose &&
                <div className='divPosition'>
                    <div className='cancelModal' onClick={closeModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="#F8F7FB" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1919 12L8.16737 8.97549C7.94421 8.75233 7.94421 8.39052 8.16737 8.16737C8.39052 7.94421 8.75233 7.94421 8.97549 8.16737L12 11.1919L15.0245 8.16737C15.2477 7.94421 15.6095 7.94421 15.8326 8.16737C16.0558 8.39052 16.0558 8.75233 15.8326 8.97549L12.8081 12L15.8326 15.0245C16.0558 15.2477 16.0558 15.6095 15.8326 15.8326C15.6095 16.0558 15.2477 16.0558 15.0245 15.8326L12 12.8081L8.97549 15.8326C8.75233 16.0558 8.39052 16.0558 8.16737 15.8326C7.94421 15.6095 7.94421 15.2477 8.16737 15.0245L11.1919 12Z" fill="#667085" />
                            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#EAECF0" />
                        </svg>
                    </div>
                    <div className="upload_div">
                        <div className="upload_header">
                            <h3>Upload</h3>
                            <p>Choose what you want to upload</p>
                        </div>
                        <div className="upload_body">
                            <Link to="/upload-course">
                                <div className="upload_body_div">
                                    <div className="upload_body_icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5.2V21M12 5.2C12 5.2 9.25 3 6.5 3C3.75 3 1 5.2 1 5.2V21C1 21 3.75 18.8 6.5 18.8C9.25 18.8 12 21 12 21M12 5.2C12 5.2 14.75 3 17.5 3C20.25 3 23 5.2 23 5.2V21C23 21 20.25 18.8 17.5 18.8C14.75 18.8 12 21 12 21" stroke="#7777F9" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="upload_body_content">
                                        <div className="upload_content_left">
                                            <h4>Course</h4>
                                            <p>Upload your course</p>
                                        </div>
                                        <div className="upload_content_right">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z" fill="#3F3F44" fill-opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/upload-video">
                                <div className="upload_body_div">
                                    <div className="upload_body_icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.86667 6H14.1333C15.1643 6 16 6.76751 16 7.71429V10.2L21 7V17L16 13.8V16.2857C16 17.2325 15.1643 18 14.1333 18H4.86667C3.83574 18 3 17.2325 3 16.2857V7.71429C3 6.76751 3.83574 6 4.86667 6Z" stroke="#7777F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8 6V18" stroke="#7777F9" stroke-width="2" />
                                        </svg>
                                    </div>
                                    <div className="upload_body_content">
                                        <div className="upload_content_left">
                                            <h4>Video</h4>
                                            <p>Upload your videos</p>
                                        </div>
                                        <div className="upload_content_right">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z" fill="#3F3F44" fill-opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/upload-course">
                                <div className="upload_body_div">
                                    <div className="upload_body_icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7158 16.9736H8.49585C8.08185 16.9736 7.74585 16.6376 7.74585 16.2236C7.74585 15.8096 8.08185 15.4736 8.49585 15.4736H15.7158C16.1298 15.4736 16.4658 15.8096 16.4658 16.2236C16.4658 16.6376 16.1298 16.9736 15.7158 16.9736Z" fill="#7777F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7158 12.7874H8.49585C8.08185 12.7874 7.74585 12.4514 7.74585 12.0374C7.74585 11.6234 8.08185 11.2874 8.49585 11.2874H15.7158C16.1298 11.2874 16.4658 11.6234 16.4658 12.0374C16.4658 12.4514 16.1298 12.7874 15.7158 12.7874Z" fill="#7777F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2505 8.61035H8.49548C8.08148 8.61035 7.74548 8.27435 7.74548 7.86035C7.74548 7.44635 8.08148 7.11035 8.49548 7.11035H11.2505C11.6645 7.11035 12.0005 7.44635 12.0005 7.86035C12.0005 8.27435 11.6645 8.61035 11.2505 8.61035Z" fill="#7777F9" />
                                            <mask id="mask0_1520_23544" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="20">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.00024H21.1647V21.91H3V2.00024Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_1520_23544)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9088 3.5L8.21976 3.504C5.89176 3.518 4.49976 4.958 4.49976 7.357V16.553C4.49976 18.968 5.90476 20.41 8.25576 20.41L15.9448 20.407C18.2728 20.393 19.6648 18.951 19.6648 16.553V7.357C19.6648 4.942 18.2608 3.5 15.9088 3.5ZM8.25676 21.91C5.11276 21.91 2.99976 19.757 2.99976 16.553V7.357C2.99976 4.124 5.04676 2.023 8.21476 2.004L15.9078 2H15.9088C19.0528 2 21.1648 4.153 21.1648 7.357V16.553C21.1648 19.785 19.1178 21.887 15.9498 21.907L8.25676 21.91Z" fill="#7777F9" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="upload_body_content">
                                        <div className="upload_content_left">
                                            <h4>Document</h4>
                                            <p>Upload your document</p>
                                        </div>
                                        <div className="upload_content_right">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z" fill="#3F3F44" fill-opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/upload-course">
                                <div className="upload_body_div">
                                    <div className="upload_body_icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18V5L21 3V16" stroke="#7777F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="#7777F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z" stroke="#7777F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="upload_body_content">
                                        <div className="upload_content_left">
                                            <h4>Audio</h4>
                                            <p>Upload your audio</p>
                                        </div>
                                        <div className="upload_content_right">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z" fill="#3F3F44" fill-opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/upload-course">
                                <div className="upload_body_div">
                                    <div className="upload_body_icon">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6667 3.33325C12.3131 3.33325 11.9739 3.47373 11.7239 3.72378C11.4739 3.97382 11.3334 4.31296 11.3334 4.66659C11.3334 5.02021 11.4739 5.35935 11.7239 5.60939C11.9739 5.85944 12.3131 5.99992 12.6667 5.99992H15.3334C15.687 5.99992 16.0261 5.85944 16.2762 5.60939C16.5262 5.35935 16.6667 5.02021 16.6667 4.66659C16.6667 4.31296 16.5262 3.97382 16.2762 3.72378C16.0261 3.47373 15.687 3.33325 15.3334 3.33325H12.6667Z" fill="#7777F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.33341C6 6.62617 6.28095 5.94789 6.78105 5.4478C7.28115 4.9477 7.95942 4.66675 8.66667 4.66675C8.66667 5.72761 9.08809 6.74503 9.83824 7.49518C10.5884 8.24532 11.6058 8.66675 12.6667 8.66675H15.3333C16.3942 8.66675 17.4116 8.24532 18.1618 7.49518C18.9119 6.74503 19.3333 5.72761 19.3333 4.66675C20.0406 4.66675 20.7189 4.9477 21.219 5.4478C21.719 5.94789 22 6.62617 22 7.33341V22.0001C22 22.7073 21.719 23.3856 21.219 23.8857C20.7189 24.3858 20.0406 24.6667 19.3333 24.6667H8.66667C7.95942 24.6667 7.28115 24.3858 6.78105 23.8857C6.28095 23.3856 6 22.7073 6 22.0001V7.33341ZM10 12.6667C9.64638 12.6667 9.30724 12.8072 9.05719 13.0573C8.80714 13.3073 8.66667 13.6465 8.66667 14.0001C8.66667 14.3537 8.80714 14.6928 9.05719 14.9429C9.30724 15.1929 9.64638 15.3334 10 15.3334H10.0133C10.367 15.3334 10.7061 15.1929 10.9561 14.9429C11.2062 14.6928 11.3467 14.3537 11.3467 14.0001C11.3467 13.6465 11.2062 13.3073 10.9561 13.0573C10.7061 12.8072 10.367 12.6667 10.0133 12.6667H10ZM14 12.6667C13.6464 12.6667 13.3072 12.8072 13.0572 13.0573C12.8071 13.3073 12.6667 13.6465 12.6667 14.0001C12.6667 14.3537 12.8071 14.6928 13.0572 14.9429C13.3072 15.1929 13.6464 15.3334 14 15.3334H18C18.3536 15.3334 18.6928 15.1929 18.9428 14.9429C19.1929 14.6928 19.3333 14.3537 19.3333 14.0001C19.3333 13.6465 19.1929 13.3073 18.9428 13.0573C18.6928 12.8072 18.3536 12.6667 18 12.6667H14ZM10 18.0001C9.64638 18.0001 9.30724 18.1406 9.05719 18.3906C8.80714 18.6407 8.66667 18.9798 8.66667 19.3334C8.66667 19.687 8.80714 20.0262 9.05719 20.2762C9.30724 20.5263 9.64638 20.6667 10 20.6667H10.0133C10.367 20.6667 10.7061 20.5263 10.9561 20.2762C11.2062 20.0262 11.3467 19.687 11.3467 19.3334C11.3467 18.9798 11.2062 18.6407 10.9561 18.3906C10.7061 18.1406 10.367 18.0001 10.0133 18.0001H10ZM14 18.0001C13.6464 18.0001 13.3072 18.1406 13.0572 18.3906C12.8071 18.6407 12.6667 18.9798 12.6667 19.3334C12.6667 19.687 12.8071 20.0262 13.0572 20.2762C13.3072 20.5263 13.6464 20.6667 14 20.6667H18C18.3536 20.6667 18.6928 20.5263 18.9428 20.2762C19.1929 20.0262 19.3333 19.687 19.3333 19.3334C19.3333 18.9798 19.1929 18.6407 18.9428 18.3906C18.6928 18.1406 18.3536 18.0001 18 18.0001H14Z" fill="#7777F9" />
                                        </svg>
                                    </div>
                                    <div className="upload_body_content">
                                        <div className="upload_content_left">
                                            <h4>Assignment</h4>
                                            <p>Upload your assignment</p>
                                        </div>
                                        <div className="upload_content_right">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z" fill="#3F3F44" fill-opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default UploadModal