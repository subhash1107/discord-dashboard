import { XMarkIcon } from "@heroicons/react/24/solid";
import SideBar from "./SideBar";

const SideBarOverlay = ({
  className,
  onClose,
}: {
  className?: string;
  onClose: () => void;
}) => {
  return (
    <div className={`fixed inset-0 z-40 flex ${className}`}>
      <div
        className="bg-black opacity-70 w-full h-full absolute inset-0"
        onClick={onClose}
      />
      <div className="relative z-40 max-w-[70%] w-full">
        <SideBar onClose={onClose} className="w-full pt-14" />
        <XMarkIcon
          aria-label="close slidebar button"
          onClick={onClose}
          className=" text-white w-7 h-7 absolute top-2 right-2"
        />
      </div>
    </div>
  );
};

export default SideBarOverlay;
