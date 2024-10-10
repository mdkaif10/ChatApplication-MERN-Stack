import React from "react";
import { ChatList, Sidebar } from "../section/chat";

export default function Messages() {
  return (
    <div className="h-screen overflow-hidden">
        <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex'>
            {/* Sidebar */}
            <Sidebar />

            {/* ChatList */}
            <ChatList />

            {/* Index */}



        </div>
    </div>
  )
}
