import {
  Chat,
  DotsThreeCircle,
  Key,
  Shapes,
  SignOut,
  User,
  UserCircle,
  Users,
} from "@phosphor-icons/react";
import DarkMode from "../../components/DarkMode";

const NAVIGATION = [
  {
    Key: 0,
    title: "DMs",
    Icon: <Chat size={24} />,
  },
  {
    Key: 1,
    title: "Groups",
    Icon: <Users size={24} />,
  },
  {
    Key: 2,
    title: "Profile",
    Icon: <UserCircle size={24} />,
  },
  {
    Key: 3,
    title: "More",
    Icon: <DotsThreeCircle size={24} />,
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col border-r border-stroke p-2 dark:border-strokedark">
      {/* <div className="mx-auto border rounded-md border-stroke p-3 dark:border-strokedark">
        <Chat size={24} />
      </div> */}

      <div className="flex flex-col items-center space-y-5 ">

        <div className="space-y-2 flex flex-col text-center">
          <div className="mx-auto border rounded-md border-stroke p-2 dark:border-strokedark">
           <Shapes size={24} /> 
        </div>

          {NAVIGATION.map(({Icon,Key, title}) => (
            <div key={Key} className="space-y-2 flex flex-col text-center hover:cursor-pointer hover:text-primary">
              {Icon}
              <span>{title}</span>
            </div>
          ))}
        </div>
      <div className="flex flex-col grow" />
        <span className="font-medium text-sm">Workspan</span>

      <div className="flex flex-col grow"></div>

      <div className="">
        <DarkMode />

        <div className="mx-auto border rounded-md border-stroke p-3 dark:border-strokedark hover:bg-stone-300 hover:cursor-pointer">
          <SignOut size={24} />
        </div>
      </div>
      </div>
    </div>
  );
}
