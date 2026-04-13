import { Dropdown, DropdownItem } from "flowbite-react";
function Programs() {
  return (
    <div>
      <Dropdown className="text-black " label="Programs" dismissOnClick={false}>
        <DropdownItem>International educational programs</DropdownItem>
        <DropdownItem>Specialized courses</DropdownItem>
        <DropdownItem>Islamic Finance Literacy Course</DropdownItem>
        <DropdownItem>Certification program</DropdownItem>
      </Dropdown>
    </div>
  );
}

export default Programs;
