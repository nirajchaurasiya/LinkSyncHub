import Video from "@/Components/Video/Video";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tarak Mehta Ka Ooltah Chashmah - LinkSyncHub - An All-In-One-Social-Hub",
  description:
    "LinkSynHub is the ultimate social media fusion app that brings together the power of video watching, news posting, and chatting in one seamless platform. Say goodbye to switching between apps – with LinkSynHub, you can enjoy all your favorite social media experiences in a single, convenient hub.",
};

export default function page() {
  return (
    <>
      <Video />
    </>
  );
}
