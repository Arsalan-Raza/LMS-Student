import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

// Importing custom sass for styling

const Dashboard = () => {
  // state for the menu
  const [menu, setMenu] = useState(false)

  // making a state for the Dropdown of post
  const [showModel, setShowModel] = useState(false)
  const onClick = () => setShowModel(!showModel)

  // An array to render the data dynamically for My classes section
  const option = ["Python", "C++", "CMS", "Full Stack", "React", "All Classes"]

  // an array to render the Assignment dynamically
  const assignmemnt = [
    { status: "Late", Date: "Aug 22", course: "Python" },
    { status: "Late", Date: "March 22", course: "C++" },
    // { status: "Late", Date: "Aug 22", course: "Front-end" },
  ]

  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment>
      <div className="page-content d-flex">
        <MetaTags>
          <title>
            Dashboard | TeachOverflow - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-start parent">
              {/* centeral section (select a groups or post) */}
              <div className="child_01">
                <div className="bg-white rounded shadow-lg p-3">
                  <h6 className="page-title fw-normal">Post here </h6>
                  <textarea
                    type="text"
                    id="inputPassword5"
                    className="form-control mb-3"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Type your note here..."
                  />
                  <div className="breadcrumb m-0">
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Select a group...</option>
                      {option.map(option => (
                        <option>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex mt-3 align-start justify-content-between">
                    <form action="#">
                      <abbr title="Attach Files or Images">
                        <label for="file-input" className="btn">
                          {" "}
                          <i className="ion h4 ion-md-image"></i>
                        </label>
                      </abbr>
                      <input className="d-none" id="file-input" type="file" />
                    </form>

                    <div className="">
                      {/* <span className="m-1 btn text-decoration-underline">
                      Cancel
                    </span> */}
                      {/* <span className="m-1 mr-1">or</span> */}
                      <a href="#" className="m-1 btn bg-light outline-none">
                        post
                      </a>
                    </div>
                  </div>
                </div>
                {/* making the post that will render on giving some info to it*/}
                <div className="post">
                  {/* post info */}
                  <div className="post_info">
                    {/* avatar */}
                    <div className="post_info_img">
                      <img src="" alt="image" />
                    </div>
                    {/* text */}
                    <div className="post_info_text">
                      <div>
                        {" "}
                        <h1>
                          <span>Arslan </span>Posted in <span>Python</span>
                        </h1>
                        <p>24 Aug . 11:35 PM</p>
                      </div>
                      {/* Dropdown */}
                      <div className="Dropdown">
                        <button onClick={onClick}>...</button>
                        {showModel ? (
                          <div>
                            <div className="dropmenu-list">
                              <ul>
                                <li class="__dropmenu-list-item " role="button">
                                  <span class="option">
                                    <span>Link to Post</span>
                                  </span>
                                </li>
                                <li class="__dropmenu-list-item " role="button">
                                  <span class="option">
                                    <span>Add Post to Backpack</span>
                                  </span>
                                </li>
                                <li class="__dropmenu-list-item" role="button">
                                  <span class="option">
                                    Turn On Notifications For This Post
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  {/* the content that users will post */}
                  <div className="users_content">
                    <p>hi dear</p>
                    <img src="" alt="image" />
                  </div>
                  {/* Reaction bar (like and comment) */}
                  <hr />
                  <div className="reaction_bar">
                    <div className="like">
                      <i className="ion ion-md-thumbs-up"></i>
                      Like
                    </div>
                    <div className="comment">
                      <i className="fas fa-comment-alt"></i>
                      Comment
                    </div>
                  </div>
                  <hr />
                  <div className="comment"></div>
                </div>
              </div>
              {/* Right section for Assignment section */}

              <div className="float-start child_02">
                <div className="Assigenment-area mx-2 shadow-lg bg-white">
                  <h5 className="fw-normal pb-2 ">Upcoming</h5>
                  <hr className="m-0" />
                  {assignmemnt.map(assignmemnt => (
                    <div>
                      <div className="Assignment-content d-flex">
                        <div className="Assignment-sec d-flex gap-3">
                          <a href="#">
                            <i className="Assignment-icon h3 d-flex justify-content-center ion ion-md-list-box"></i>
                          </a>
                          <div className="Assignment">
                            <h6>Assignmemnt</h6>

                            <div>
                              <p className="data my-0 d-flex ">
                                <span>
                                  <i className="fas time-icon fa-clock"></i>{" "}
                                  {assignmemnt.status}
                                </span>
                                <p className="d-flex mx-1 align-items-center">
                                  <small className="circle-red"></small>
                                  <span className="text-danger my-0">
                                    {" "}
                                    Due {assignmemnt.Date} |
                                  </span>
                                </p>
                                <p className="d-flex align-items-center">
                                  <small className="circle-green mx-0"></small>
                                  <span className="mx-3 my-0">
                                    {assignmemnt.course}
                                  </span>
                                </p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="m-0" />
                    </div>
                  ))}
                  <div className="calander"></div>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
