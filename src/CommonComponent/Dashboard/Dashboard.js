import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Dashboard({ data }) {
  console.log(data);
  return (

     
        <div className='container-full'>
          {/* <!-- Main content --> */}
          <section className='content'>
            <div className='row'>
              <div className='col-xl-8 col-12'>
                <div className='row'>
                  <div className='col-xl-3 col-md-6 col-6'>
                    <div className='box'>
                      <div className='box-body text-center'>
                        <div className='bg-primary-light rounded10 p-20 mx-auto w-100 h-100'>
                          <img src='fonts/icon-1.svg' alt='' />
                        </div>
                        <p className='text-fade mt-15 mb-5'>Total Patients</p>
                        <h2 className='mt-0'>1,548</h2>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-md-6 col-6'>
                    <div className='box'>
                      <div className='box-body text-center'>
                        <div className='bg-danger-light rounded10 p-20 mx-auto w-100 h-100'>
                          <img src='fonts/icon-2.svg' alt='' />
                        </div>
                        <p className='text-fade mt-15 mb-5'>Consulation</p>
                        <h2 className='mt-0'>448</h2>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-md-6 col-6'>
                    <div className='box'>
                      <div className='box-body text-center'>
                        <div className='bg-warning-light rounded10 p-20 mx-auto w-100 h-100'>
                          <img src='fonts/icon-3.svg' alt='' />
                        </div>
                        <p className='text-fade mt-15 mb-5'>Staff</p>
                        <h2 className='mt-0'>848</h2>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-md-6 col-6'>
                    <div className='box'>
                      <div className='box-body text-center'>
                        <div className='bg-info-light rounded10 p-20 mx-auto w-100 h-100'>
                          <img src='fonts/icon-4.svg' alt='' />
                        </div>
                        <p className='text-fade mt-15 mb-5'>Total Rooms</p>
                        <h2 className='mt-0'>3,100</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xl-6 col-12'>
                    <div className='box'>
                      <div className='box-header'>
                        <h4 className='box-title'>Daily Revenue Report</h4>
                      </div>
                      <div className='box-body'>
                        <h3 className='text-primary mt-0'>
                          $32,485 <small className='text-muted'>$12,458</small>
                        </h3>
                        <div id='recent_trend'></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-6 col-12'>
                    <div className='box'>
                      <div className='box-header'>
                        <h4 className='box-title'>Payments history</h4>
                      </div>
                      <div className='box-body'>
                        <div className='inner-user-div2'>
                          <div>
                            <div className='d-flex justify-content-between align-items-end'>
                              <div>
                                <a to='#' className='text-muted hover-primary'>
                                  <i className='fa fa-link'></i> Dr. Johen Doe
                                </a>
                                <h5 className='my-5'>Kidney function test</h5>
                              </div>
                              <div>
                                <h5 className='my-5'>$ 25.15</h5>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                              <div>
                                <p className='mb-0 text-muted'>
                                  <i className='fa fa-clock-o'></i> Sunday, 16
                                  May
                                </p>
                              </div>
                              <div>
                                <div className='dropdown'>
                                  <a
                                    data-bs-toggle='dropdown'
                                    to='#'
                                    className='base-font'
                                  >
                                    <i className='ti-more-alt text-muted'></i>
                                  </a>
                                  <div className='dropdown-menu dropdown-menu-end'>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-import'></i> Import
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-export'></i> Export
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-printer'></i> Print
                                    </a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-settings'></i> Settings
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className='d-flex justify-content-between align-items-end'>
                              <div>
                                <a to='#' className='text-muted hover-primary'>
                                  <i className='fa fa-link'></i> Dr. Michael Doe
                                </a>
                                <h5 className='my-5'>Emergency appointment</h5>
                              </div>
                              <div>
                                <h5 className='my-5'>$ 99.15</h5>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                              <div>
                                <p className='mb-0 text-muted'>
                                  <i className='fa fa-clock-o'></i> Sunday, 16
                                  May
                                </p>
                              </div>
                              <div>
                                <div className='dropdown'>
                                  <a
                                    data-bs-toggle='dropdown'
                                    to='#'
                                    className='base-font'
                                  >
                                    <i className='ti-more-alt text-muted'></i>
                                  </a>
                                  <div className='dropdown-menu dropdown-menu-end'>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-import'></i> Import
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-export'></i> Export
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-printer'></i> Print
                                    </a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-settings'></i> Settings
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className='d-flex justify-content-between align-items-end'>
                              <div>
                                <a to='#' className='text-muted hover-primary'>
                                  <i className='fa fa-link'></i> Dr. Bertie
                                  Maxwell
                                </a>
                                <h5 className='my-5'>Complementation test</h5>
                              </div>
                              <div>
                                <h5 className='my-5'>$ 40.45</h5>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                              <div>
                                <p className='mb-0 text-muted'>
                                  <i className='fa fa-clock-o'></i> Sunday, 16
                                  May
                                </p>
                              </div>
                              <div>
                                <div className='dropdown'>
                                  <a
                                    data-bs-toggle='dropdown'
                                    to='#'
                                    className='base-font'
                                  >
                                    <i className='ti-more-alt text-muted'></i>
                                  </a>
                                  <div className='dropdown-menu dropdown-menu-end'>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-import'></i> Import
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-export'></i> Export
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-printer'></i> Print
                                    </a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-settings'></i> Settings
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className='d-flex justify-content-between align-items-end'>
                              <div>
                                <a to='#' className='text-muted hover-primary'>
                                  <i className='fa fa-link'></i> Dr. Clyde
                                  Morales
                                </a>
                                <h5 className='my-5'>USG + Consultation</h5>
                              </div>
                              <div>
                                <h5 className='my-5'>$ 29.90</h5>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                              <div>
                                <p className='mb-0 text-muted'>
                                  <i className='fa fa-clock-o'></i> Sunday, 16
                                  May
                                </p>
                              </div>
                              <div>
                                <div className='dropdown'>
                                  <a
                                    data-bs-toggle='dropdown'
                                    to='#'
                                    className='base-font'
                                  >
                                    <i className='ti-more-alt text-muted'></i>
                                  </a>
                                  <div className='dropdown-menu dropdown-menu-end'>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-import'></i> Import
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-export'></i> Export
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-printer'></i> Print
                                    </a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-settings'></i> Settings
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className='d-flex justify-content-between align-items-end'>
                              <div>
                                <a to='#' className='text-muted hover-primary'>
                                  <i className='fa fa-link'></i> Dr. Michael Doe
                                </a>
                                <h5 className='my-5'>Emergency appointment</h5>
                              </div>
                              <div>
                                <h5 className='my-5'>$ 99.15</h5>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                              <div>
                                <p className='mb-0 text-muted'>
                                  <i className='fa fa-clock-o'></i> Sunday, 16
                                  May
                                </p>
                              </div>
                              <div>
                                <div className='dropdown'>
                                  <a
                                    data-bs-toggle='dropdown'
                                    to='#'
                                    className='base-font'
                                  >
                                    <i className='ti-more-alt text-muted'></i>
                                  </a>
                                  <div className='dropdown-menu dropdown-menu-end'>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-import'></i> Import
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-export'></i> Export
                                    </a>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-printer'></i> Print
                                    </a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' to='#'>
                                      <i className='ti-settings'></i> Settings
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-6 col-12'>
                    <div className='box'>
                      <div className='box-header with-border'>
                        <h4 className='box-title'>Doctor List</h4>
                        <p className='mb-0 pull-right'>Today</p>
                      </div>
                      <div className='box-body'>
                        <div className='inner-user-div3'>
                          <div className='d-flex align-items-center mb-30'>
                            <div className='me-15'>
                              <img
                                src='images/avatar-1.png'
                                className='avatar avatar-lg rounded10 bg-primary-light'
                                alt=''
                              />
                            </div>
                            <div className='d-flex flex-column flex-grow-1 fw-500'>
                              <a
                                to='#'
                                className='text-dark hover-primary mb-1 fs-16'
                              >
                                Dr. Jaylon Stanton
                              </a>
                              <span className='text-fade'>Dentist</span>
                            </div>
                            <div className='dropdown'>
                              <a
                                className='px-10 pt-5'
                                to='#'
                                data-bs-toggle='dropdown'
                              >
                                <i className='ti-more-alt'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Inbox</span>
                                  <span className='badge badge-pill badge-info'>
                                    5
                                  </span>
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Sent
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Spam
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Draft</span>
                                  <span className='badge badge-pill badge-default'>
                                    1
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex align-items-center mb-30'>
                            <div className='me-15'>
                              <img
                                src='images/avatar-10.png'
                                className='avatar avatar-lg rounded10 bg-primary-light'
                                alt=''
                              />
                            </div>
                            <div className='d-flex flex-column flex-grow-1 fw-500'>
                              <a
                                to='#'
                                className='text-dark hover-danger mb-1 fs-16'
                              >
                                Dr. Carla Schleifer
                              </a>
                              <span className='text-fade'>Oculist</span>
                            </div>
                            <div className='dropdown'>
                              <a
                                className='px-10 pt-5'
                                to='#'
                                data-bs-toggle='dropdown'
                              >
                                <i className='ti-more-alt'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Inbox</span>
                                  <span className='badge badge-pill badge-info'>
                                    5
                                  </span>
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Sent
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Spam
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Draft</span>
                                  <span className='badge badge-pill badge-default'>
                                    1
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex align-items-center mb-30'>
                            <div className='me-15'>
                              <img
                                src='images/avatar-11.png'
                                className='avatar avatar-lg rounded10 bg-primary-light'
                                alt=''
                              />
                            </div>
                            <div className='d-flex flex-column flex-grow-1 fw-500'>
                              <a
                                to='#'
                                className='text-dark hover-success mb-1 fs-16'
                              >
                                Dr. Hanna Geidt
                              </a>
                              <span className='text-fade'>Surgeon</span>
                            </div>
                            <div className='dropdown'>
                              <a
                                className='px-10 pt-5'
                                to='#'
                                data-bs-toggle='dropdown'
                              >
                                <i className='ti-more-alt'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Inbox</span>
                                  <span className='badge badge-pill badge-info'>
                                    5
                                  </span>
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Sent
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Spam
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Draft</span>
                                  <span className='badge badge-pill badge-default'>
                                    1
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex align-items-center mb-30'>
                            <div className='me-15'>
                              <img
                                src='images/avatar-12.png'
                                className='avatar avatar-lg rounded10 bg-primary-light'
                                alt=''
                              />
                            </div>
                            <div className='d-flex flex-column flex-grow-1 fw-500'>
                              <a
                                to='#'
                                className='text-dark hover-info mb-1 fs-16'
                              >
                                Dr. Roger George
                              </a>
                              <span className='text-fade'>
                                General Practitioners
                              </span>
                            </div>
                            <div className='dropdown'>
                              <a
                                className='px-10 pt-5'
                                to='#'
                                data-bs-toggle='dropdown'
                              >
                                <i className='ti-more-alt'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Inbox</span>
                                  <span className='badge badge-pill badge-info'>
                                    5
                                  </span>
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Sent
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Spam
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Draft</span>
                                  <span className='badge badge-pill badge-default'>
                                    1
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex align-items-center'>
                            <div className='me-15'>
                              <img
                                src='images/avatar-15.png'
                                className='avatar avatar-lg rounded10 bg-primary-light'
                                alt=''
                              />
                            </div>
                            <div className='d-flex flex-column flex-grow-1 fw-500'>
                              <a
                                to='#'
                                className='text-dark hover-warning mb-1 fs-16'
                              >
                                Dr. Natalie doe
                              </a>
                              <span className='text-fade'>Physician</span>
                            </div>
                            <div className='dropdown'>
                              <a
                                className='px-10 pt-5'
                                to='#'
                                data-bs-toggle='dropdown'
                              >
                                <i className='ti-more-alt'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Inbox</span>
                                  <span className='badge badge-pill badge-info'>
                                    5
                                  </span>
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Sent
                                </a>
                                <a className='dropdown-item' to='#'>
                                  Spam
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item flexbox' to='#'>
                                  <span>Draft</span>
                                  <span className='badge badge-pill badge-default'>
                                    1
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-6 col-12'>
                    <div className='box'>
                      <div className='box-header'>
                        <h4 className='box-title'>Balance</h4>
                      </div>
                      <div className='box-body'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='d-flex align-items-center'>
                            <div className='icon'>
                              <i className='fa fa-arrow-up text-primary me-10 fs-20 bg-primary-light rounded-circle text-center w-70 h-70 l-h-70'></i>
                            </div>
                            <div>
                              <p className='text-muted mb-5'>Income</p>
                              <h4 className='my-0'>$142K</h4>
                            </div>
                          </div>
                          <div id='balance1'></div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='d-flex align-items-center'>
                            <div className='icon'>
                              <i className='fa fa-arrow-down text-danger me-10 fs-20 bg-danger-light rounded-circle text-center w-70 h-70 l-h-70'></i>
                            </div>
                            <div>
                              <p className='text-muted mb-5'>Outcome</p>
                              <h4 className='my-0'>$43K</h4>
                            </div>
                          </div>
                          <div id='balance2'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-6 col-12'>
                    <div className='box'>
                      <div className='box-header'>
                        <h4 className='box-title'>Patient Statistics</h4>
                      </div>
                      <div className='box-body'>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex align-items-center me-30'>
                            <div className='bg-gradient-success overflow-h me-10 rounded10 w-50 h-50 l-h-50 fs-18 text-center text-white'>
                              <i className='fa fa-hospital-o'></i>
                            </div>
                            <div>
                              <p className='fs-14 text-fade mb-0'>Admit</p>
                              <h5 className='mb-0'>2158</h5>
                            </div>
                          </div>
                          <div className='d-flex align-items-center'>
                            <div className='bg-gradient-primary overflow-h me-10 rounded10 w-50 h-50 l-h-50 fs-18 text-center text-white'>
                              <i className='fa fa-home'></i>
                            </div>
                            <div>
                              <p className='fs-14 text-fade mb-0'>Discharge</p>
                              <h5 className='mb-0'>1112</h5>
                            </div>
                          </div>
                        </div>
                        <div id='overview_trend'></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-6 col-12'>
                    <div className='box'>
                      <div className='box-header with-border'>
                        <h4 className='box-title'>Patient Review</h4>
                      </div>
                      <div className='box-body p-0'>
                        <div className='inner-user-div'>
                          <div className='media-list bb-1 bb-dashed border-light'>
                            <div className='media align-items-center'>
                              <a
                                className='avatar avatar-lg status-success'
                                to='#'
                              >
                                <img
                                  src='images/1.jpg'
                                  className='bg-success-light'
                                  alt='...'
                                />
                              </a>
                              <div className='media-body'>
                                <p className='fs-16'>
                                  <a className='hover-primary' to='#'>
                                    Theron Trump
                                  </a>
                                </p>
                                <span className='text-muted'>2 day ago</span>
                              </div>
                              <div className='media-right'>
                                <div className='d-flex'>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star-o'></i>
                                </div>
                              </div>
                            </div>
                            <div className='media pt-0'>
                              <p className='text-fade'>
                                Vestibulum tincidunt sit amet sapien et
                                eleifend. Fusce pretium libero enim, nec lacinia
                                est ultrices id. Duis nibh sapien, ultrices in
                                hendrerit ac, pulvinar ut mauris. Quisque eu
                                condimentum justo.{' '}
                              </p>
                            </div>
                          </div>
                          <div className='media-list bb-1 bb-dashed border-light'>
                            <div className='media align-items-center'>
                              <a
                                className='avatar avatar-lg status-success'
                                to='#'
                              >
                                <img
                                  src='images/3.jpg'
                                  className='bg-success-light'
                                  alt='...'
                                />
                              </a>
                              <div className='media-body'>
                                <p className='fs-16'>
                                  <a className='hover-primary' to='#'>
                                    Johen Doe
                                  </a>
                                </p>
                                <span className='text-muted'>5 day ago</span>
                              </div>
                              <div className='media-right'>
                                <div className='d-flex'>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star-half-o'></i>
                                </div>
                              </div>
                            </div>
                            <div className='media pt-0'>
                              <p className='text-fade'>
                                Praesent venenatis viverra turpis quis varius.
                                Nullam ullamcorper congue urna, in sodales eros
                                placerat non.
                              </p>
                            </div>
                          </div>
                          <div className='media-list'>
                            <div className='media align-items-center'>
                              <a
                                className='avatar avatar-lg status-success'
                                to='#'
                              >
                                <img
                                  src='images/4.jpg'
                                  className='bg-success-light'
                                  alt='...'
                                />
                              </a>
                              <div className='media-body'>
                                <p className='fs-16'>
                                  <a className='hover-primary' to='#'>
                                    Tyler Mark
                                  </a>
                                </p>
                                <span className='text-muted'>7 day ago</span>
                              </div>
                              <div className='media-right'>
                                <div className='d-flex'>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                </div>
                              </div>
                            </div>
                            <div className='media pt-0'>
                              <p className='text-fade'>
                                Pellentesque a pretium orci. In hac habitasse
                                platea dictumst. Nulla mattis odio enim, id
                                euismod neque bibendum non.
                              </p>
                            </div>
                          </div>
                          <div className='media-list bb-1 bb-dashed border-light'>
                            <div className='media align-items-center'>
                              <a
                                className='avatar avatar-lg status-success'
                                to='#'
                              >
                                <img
                                  src='images/5.jpg'
                                  className='bg-success-light'
                                  alt='...'
                                />
                              </a>
                              <div className='media-body'>
                                <p className='fs-16'>
                                  <a className='hover-primary' to='#'>
                                    Theron Trump
                                  </a>
                                </p>
                                <span className='text-muted'>2 day ago</span>
                              </div>
                              <div className='media-right'>
                                <div className='d-flex'>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star-half-o'></i>
                                </div>
                              </div>
                            </div>
                            <div className='media pt-0'>
                              <p className='text-fade'>
                                Curabitur condimentum molestie ligula iaculis
                                euismod. Fusce nulla lectus, tincidunt eu
                                consequat.
                              </p>
                            </div>
                          </div>
                          <div className='media-list bb-1 bb-dashed border-light'>
                            <div className='media align-items-center'>
                              <a
                                className='avatar avatar-lg status-success'
                                to='#'
                              >
                                <img
                                  src='images/6.jpg'
                                  className='bg-success-light'
                                  alt='...'
                                />
                              </a>
                              <div className='media-body'>
                                <p className='fs-16'>
                                  <a className='hover-primary' to='#'>
                                    Johen Doe
                                  </a>
                                </p>
                                <span className='text-muted'>5 day ago</span>
                              </div>
                              <div className='media-right'>
                                <div className='d-flex'>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star'></i>
                                  <i className='text-warning fa fa-star-o'></i>
                                </div>
                              </div>
                            </div>
                            <div className='media pt-0'>
                              <p className='text-fade'>
                                Proin lacinia eleifend nulla eu ornare. Integer
                                commodo elit purus. Suspendisse mattis gravida
                                interdum. In laoreet nisi eget felis ornare,
                                tempus luctus nulla pellentesque. Donec maximus
                                lobortis ullamcorper.{' '}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='box-footer'>
                        <a
                          to='#'
                          className='waves-effect waves-light d-block w-p100 btn btn-primary'
                        >
                          See More Reviews
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-12'>
                <div className='box'>
                  <div className='box-header'>
                    <h4 className='box-title'>Upcoming Appointments</h4>
                  </div>
                  <div className='box-body'>
                    <div id='paginator1'></div>
                  </div>
                  <div className='box-body'>
                    <div className='inner-user-div4'>
                      <div>
                        <div className='d-flex align-items-center mb-10'>
                          <div className='me-15'>
                            <img
                              src='images/avatar-1.png'
                              className='avatar avatar-lg rounded10 bg-primary-light'
                              alt=''
                            />
                          </div>
                          <div className='d-flex flex-column flex-grow-1 fw-500'>
                            <p className='hover-primary text-fade mb-1 fs-14'>
                              Shawn Hampton
                            </p>
                            <span className='text-dark fs-16'>
                              Emergency appointment
                            </span>
                          </div>
                          <div>
                            <a
                              to='#'
                              className='waves-effect waves-circle btn btn-circle btn-primary-light btn-sm'
                            >
                              <i className='fa fa-phone'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                          <div>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-clock-o me-5'></i> 10:00{' '}
                              <span className='mx-20'>$ 30</span>
                            </p>
                          </div>
                          <div>
                            <div className='dropdown'>
                              <a
                                data-bs-toggle='dropdown'
                                to='#'
                                className='base-font mx-10'
                              >
                                <i className='ti-more-alt text-muted'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-import'></i> Import
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-export'></i> Export
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-printer'></i> Print
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-settings'></i> Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='d-flex align-items-center mb-10'>
                          <div className='me-15'>
                            <img
                              src='images/avatar-2.png'
                              className='avatar avatar-lg rounded10 bg-primary-light'
                              alt=''
                            />
                          </div>
                          <div className='d-flex flex-column flex-grow-1 fw-500'>
                            <p className='hover-primary text-fade mb-1 fs-14'>
                              Polly Paul
                            </p>
                            <span className='text-dark fs-16'>
                              USG + Consultation
                            </span>
                          </div>
                          <div>
                            <a
                              to='#'
                              className='waves-effect waves-circle btn btn-circle btn-primary-light btn-sm'
                            >
                              <i className='fa fa-phone'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                          <div>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-clock-o me-5'></i> 10:30{' '}
                              <span className='mx-20'>$ 50</span>
                            </p>
                          </div>
                          <div>
                            <div className='dropdown'>
                              <a
                                data-bs-toggle='dropdown'
                                to='#'
                                className='base-font mx-10'
                              >
                                <i className='ti-more-alt text-muted'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-import'></i> Import
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-export'></i> Export
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-printer'></i> Print
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-settings'></i> Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='d-flex align-items-center mb-10'>
                          <div className='me-15'>
                            <img
                              src='images/avatar-3.png'
                              className='avatar avatar-lg rounded10 bg-primary-light'
                              alt=''
                            />
                          </div>
                          <div className='d-flex flex-column flex-grow-1 fw-500'>
                            <p className='hover-primary text-fade mb-1 fs-14'>
                              Johen Doe
                            </p>
                            <span className='text-dark fs-16'>
                              Laboratory screening
                            </span>
                          </div>
                          <div>
                            <a
                              to='#'
                              className='waves-effect waves-circle btn btn-circle btn-primary-light btn-sm'
                            >
                              <i className='fa fa-phone'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                          <div>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-clock-o me-5'></i> 11:00{' '}
                              <span className='mx-20'>$ 70</span>
                            </p>
                          </div>
                          <div>
                            <div className='dropdown'>
                              <a
                                data-bs-toggle='dropdown'
                                to='#'
                                className='base-font mx-10'
                              >
                                <i className='ti-more-alt text-muted'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-import'></i> Import
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-export'></i> Export
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-printer'></i> Print
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-settings'></i> Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='d-flex align-items-center mb-10'>
                          <div className='me-15'>
                            <img
                              src='images/avatar-4.png'
                              className='avatar avatar-lg rounded10 bg-primary-light'
                              alt=''
                            />
                          </div>
                          <div className='d-flex flex-column flex-grow-1 fw-500'>
                            <p className='hover-primary text-fade mb-1 fs-14'>
                              Harmani Doe
                            </p>
                            <span className='text-dark fs-16'>
                              Keeping pregnant
                            </span>
                          </div>
                          <div>
                            <a
                              to='#'
                              className='waves-effect waves-circle btn btn-circle btn-primary-light btn-sm'
                            >
                              <i className='fa fa-phone'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                          <div>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-clock-o me-5'></i> 11:30{' '}
                            </p>
                          </div>
                          <div>
                            <div className='dropdown'>
                              <a
                                data-bs-toggle='dropdown'
                                to='#'
                                className='base-font mx-10'
                              >
                                <i className='ti-more-alt text-muted'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-import'></i> Import
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-export'></i> Export
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-printer'></i> Print
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-settings'></i> Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='d-flex align-items-center mb-10'>
                          <div className='me-15'>
                            <img
                              src='images/avatar-5.png'
                              className='avatar avatar-lg rounded10 bg-primary-light'
                              alt=''
                            />
                          </div>
                          <div className='d-flex flex-column flex-grow-1 fw-500'>
                            <p className='hover-primary text-fade mb-1 fs-14'>
                              Mark Wood
                            </p>
                            <span className='text-dark fs-16'>
                              Primary doctor consultation
                            </span>
                          </div>
                          <div>
                            <a
                              to='#'
                              className='waves-effect waves-circle btn btn-circle btn-primary-light btn-sm'
                            >
                              <i className='fa fa-phone'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                          <div>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-clock-o me-5'></i> 12:00{' '}
                              <span className='mx-20'>$ 30</span>
                            </p>
                          </div>
                          <div>
                            <div className='dropdown'>
                              <a
                                data-bs-toggle='dropdown'
                                to='#'
                                className='base-font mx-10'
                              >
                                <i className='ti-more-alt text-muted'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-import'></i> Import
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-export'></i> Export
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-printer'></i> Print
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-settings'></i> Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='d-flex align-items-center mb-10'>
                          <div className='me-15'>
                            <img
                              src='images/avatar-6.png'
                              className='avatar avatar-lg rounded10 bg-primary-light'
                              alt=''
                            />
                          </div>
                          <div className='d-flex flex-column flex-grow-1 fw-500'>
                            <p className='hover-primary text-fade mb-1 fs-14'>
                              Shawn Marsh
                            </p>
                            <span className='text-dark fs-16'>
                              Emergency appointment
                            </span>
                          </div>
                          <div>
                            <a
                              to='#'
                              className='waves-effect waves-circle btn btn-circle btn-primary-light btn-sm'
                            >
                              <i className='fa fa-phone'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-end mb-15 py-10 bb-dashed border-bottom'>
                          <div>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-clock-o me-5'></i> 13:00{' '}
                              <span className='mx-20'>$ 90</span>
                            </p>
                          </div>
                          <div>
                            <div className='dropdown'>
                              <a
                                data-bs-toggle='dropdown'
                                to='#'
                                className='base-font mx-10'
                              >
                                <i className='ti-more-alt text-muted'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-end'>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-import'></i> Import
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-export'></i> Export
                                </a>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-printer'></i> Print
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' to='#'>
                                  <i className='ti-settings'></i> Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='box'>
                  <div className='box-header no-border'>
                    <h4 className='box-title'>Appointments Overview</h4>
                  </div>
                  <div className='box-body'>
                    <div id='chart432'></div>
                  </div>
                </div>
                <div className='box'>
                  <div className='box-header'>
                    <h4 className='box-title'>Recovery rate</h4>
                  </div>
                  <div className='box-body'>
                    <div className='mb-30'>
                      <div className='d-flex align-items-center justify-content-between mb-5'>
                        <h5>80 %</h5>
                        <h5>Cold</h5>
                      </div>
                      <div className='progress  progress-xs'>
                        <div
                          className='progress-bar progress-bar-primary'
                          role='progressbar'
                          aria-valuenow='80'
                          aria-valuemin='0'
                          aria-valuemax='100'
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>
                    <div className='mb-30'>
                      <div className='d-flex align-items-center justify-content-between mb-5'>
                        <h5>24 %</h5>
                        <h5>Fracture</h5>
                      </div>
                      <div className='progress  progress-xs'>
                        <div
                          className='progress-bar progress-bar-success'
                          role='progressbar'
                          aria-valuenow='24'
                          aria-valuemin='0'
                          aria-valuemax='100'
                          style={{ width: '24%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex align-items-center justify-content-between mb-5'>
                        <h5>91 %</h5>
                        <h5>Ache</h5>
                      </div>
                      <div className='progress  progress-xs'>
                        <div
                          className='progress-bar progress-bar-info'
                          role='progressbar'
                          aria-valuenow='91'
                          aria-valuemin='0'
                          aria-valuemax='100'
                          style={{ width: '91%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex align-items-center justify-content-between mb-5'>
                        <h5>50 %</h5>
                        <h5>Hematoma</h5>
                      </div>
                      <div className='progress  progress-xs'>
                        <div
                          className='progress-bar progress-bar-danger'
                          role='progressbar'
                          aria-valuenow='50'
                          aria-valuemin='0'
                          aria-valuemax='100'
                          style={{ width: '50%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex align-items-center justify-content-between mb-5'>
                        <h5>72 %</h5>
                        <h5>Caries</h5>
                      </div>
                      <div className='progress  progress-xs'>
                        <div
                          className='progress-bar progress-bar-warning'
                          role='progressbar'
                          aria-valuenow='72'
                          aria-valuemin='0'
                          aria-valuemax='100'
                          style={{ width: '72%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- /.content --> */}
        </div>
    

   
      
  
  );
}

export default Dashboard;
