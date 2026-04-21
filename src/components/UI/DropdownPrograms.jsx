import { Dropdown, DropdownItem } from "flowbite-react";
import { Link } from "react-router-dom";
const dropDownArr = [
  {
    id: 1,
    title: "International educational programs",
    href: "inter-edu-program",
  },
  {
    id: 2,
    title: "Specialized courses",
    href: "special-courses",
  },
  {
    id: 3,
    title: "Islamic Finance Literacy Course",
    href: "islamic-finance",
  },
  {
    id: 4,
    title: "Certification program",
    href: "certification",
  },
];
function DropdownPrograms() {
  return (
    <div>
      <Dropdown
        className="text-black font-normal text-sm leading-5 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg"
        label="Programs"
        dismissOnClick={false}
      >
        {dropDownArr.map((drop) => {
          return (
            <Link key={drop.id} to={`/${drop.href}`}>
              <DropdownItem>{drop.title}</DropdownItem>
            </Link>
          );
        })}
      </Dropdown>
    </div>
  );
}

export default DropdownPrograms;
