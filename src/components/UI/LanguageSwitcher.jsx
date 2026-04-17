import { Dropdown, DropdownItem } from "flowbite-react";
import theUk from "@assets/svg/the-UK.svg";
function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 border-r pr-4 border-gray-300">
      <img src={theUk} alt="" />
      <Dropdown label="ENG" inline>
        <DropdownItem>UZB</DropdownItem>
        <DropdownItem>RUS</DropdownItem>
      </Dropdown>
    </div>
  );
}

export default LanguageSwitcher;
