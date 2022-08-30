import React from "react"
import { useState } from "react"
import {
  Form,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
  Button,
} from "reactstrap"

const StudentPage = () => {
  const [singlebtn, setSinglebtn] = useState(false)
  const course = ["Python", "C++", "CMS", "Full Stack", "React", "All Classes"]
  const option = ["Python", "C++", "CMS", "Full Stack", "React", "All Classes"]

  return (
    // Main section (like a parent that holds multiple childs)
    <main className="p-3 w-75 mx-auto my-0 pt-3 justify-content-center d-flex">
      {/* left Drop Down for My Classes */}
      <section className="p-3 rounded mx-2 bg-light d-none w-25 d-sm-block">
        <Dropdown
          isOpen={singlebtn}
          toggle={() => setSinglebtn(!singlebtn)}
          className=" bg-light d-inline-block"
        >
          <DropdownToggle className="btn btn-secondary" caret>
            My Classes <i className="mdi mdi-chevron-down"></i>
          </DropdownToggle>
          <DropdownMenu>
            {course.map(course => (
              <DropdownItem>{course}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </section>
      {/* centeral section (select a groups or post) */}
      <section className="w-50 p-3 mx-2 rounded bg-light flex flex-col">
        <h3>Note</h3>
        <input
          type="text"
          id="inputPassword5"
          class="form-control mb-3 rounded"
          aria-describedby="passwordHelpBlock"
          placeholder="Type your note here..."
        />
        <div class="input-group mb-3 rounded">
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Select a group...</option>
            {option.map(option => (
              <option>{option}</option>
            ))}
          </select>
        </div>
      </section>
      {/* Right section for Assignment section */}
      <section className="p-3 mx-2 rounded bg-light w-25">
        <h4>Upcomming</h4>
        <div className="d-flex">
          <div className="d-flex gap-3">
            <img src="" alt="image" />
            <div className="">
              <h6>q1</h6>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StudentPage
