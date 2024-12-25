import {
  Chat,
  DotsThreeCircle,
  Shapes,
  Share,
  SignOut,
  UserCircle,
  Users,
} from "@phosphor-icons/react";
import DarkMode from "../../components/DarkMode";

const NAVIGATION = [
  {
    key: 0,
    title: "DMs",
    icon: <Chat size={24} />,
  },
  {
    key: 1,
    title: "Groups",
    icon: <Users size={24} />,
  },
  {
    key: 2,
    title: "Profile",
    icon: <UserCircle size={24} />,
  },
  {
    key: 3,
    title: "More",
    icon: <DotsThreeCircle size={24} />,
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col border-r border-stroke p-2 dark:border-strokedark">
      {/* <div className="mx-auto border rounded-md border-stroke p-2 dark:border-strokedark">
        <Chat size={24} />
      </div>*/}

      <div className="flex flex-col items-center space-y-5">
        <div className="space-y-2 flex flex-col text-center">
          <div className="mx-auto border rounded-md border-stroke p-2 dark:border-strokedark">
            <Share size={24} />
          </div>
          <span className="font-medium text-sm">Workspace</span>
        </div>

        {NAVIGATION.map(({ icon, key, title }) => (
          <div
            key={key}
            className="space-y-2 flex flex-col text-center hover:coursor-pointer hover:text-primary"
            onClick={() => {}}
          >
           
           <div className="mx-auto border rounded-md border-stroke p-2 dark:border-strokedark">
            {icon}



          </div>
          <span className="font-medium text-sm">{title}</span>



          </div>
        ))}
      </div>

      <div className="flex flex-col grow"></div>

      <div className="space-y-4.5">
        <DarkMode />

        <div className="mx-auto border rounded-md border-stroke p-3 dark:border-strokedark hover:bg-stone-300 hover:cursor-pointer">
          <SignOut size={24} />
        </div>
      </div>
    </div>
  );
}
