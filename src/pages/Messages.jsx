import React from "react";
import { ChatList, MessageInbox, Sidebar } from "../section/chat";
import GiftModal from "../components/GiftModal";
import VoiceRecorder from "../components/VoiceRecorder";

export default function Messages() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
        {/* Sidebar */}
        <Sidebar />

        {/* ChatList */}
        <ChatList />

        {/* Index */}
        <MessageInbox />
      </div>

      <GiftModal />
      <VoiceRecorder/>
    </div>
  );
}
