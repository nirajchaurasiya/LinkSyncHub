"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  BiSearch,
  BiSolidMoon,
  BiSolidVideoPlus,
  BiVideoPlus,
} from "react-icons/bi";
import {
  AiFillHome,
  AiFillSetting,
  AiOutlineHistory,
  AiFillLike,
} from "react-icons/ai";
import { RiVideoFill } from "react-icons/ri";
import {
  MdOutlineRecommend,
  MdSpaceDashboard,
  MdFeedback,
  MdLibraryAdd,
  MdOutlineLogout,
  MdSettings,
  MdHelp,
} from "react-icons/md";
import { IoNotificationsSharp, IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <div className={styles.main_nav}>
      {/* Navbar */}
      <div className={styles.nav}>
        {/* First Components */}
        <div className={styles.first_component}>
          <div
            className={styles.three_line}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.nav_logo}>
            <Link href="/" style={{ color: "var(--text-color)" }}>
              LinkSyncHub
            </Link>
          </div>
        </div>

        {/* Second Navbar : Search bar */}

        <div className={styles.second_component}>
          <div className={styles.navbar_searchinput}>
            <input type="text" placeholder="Search" />
            <button>
              <BiSearch />
            </button>
          </div>
          <div className={styles.color_mode}>
            <BiSolidVideoPlus />
          </div>
        </div>

        {/* Third Component */}

        <div className={styles.third_component}>
          <div
            onClick={() => {
              setShowProfile(false);
              setShowNotification(!showNotification);
            }}
            className={styles.notification_bell}
          >
            <IoNotificationsSharp />
            <p className={styles.notification_count}>9+</p>
          </div>
          <div
            onClick={() => {
              setShowNotification(false);
              setShowProfile(!showProfile);
            }}
            className={styles.profile_picture}
          >
            <img src="/assests/user.png" alt="" />
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className={!showMenu ? styles.sidebar : styles.hideSidebar}>
        <div className={styles.sidebar_content}>
          {/* First Content */}
          <div className={styles.sidebar_first_content}>
            <Link style={{ color: "var(--text-color)" }} href="/">
              <div>
                <p>
                  <AiFillHome />
                </p>
                <span>HOME</span>
              </div>
            </Link>
            <Link
              style={{ color: "var(--text-color)" }}
              href="/recommended/videos"
            >
              <div>
                <p>
                  <MdOutlineRecommend />
                </p>
                <span>RECOMMENDED</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/new/videos">
              <div>
                <p>
                  <RiVideoFill />
                </p>
                <span>NEW</span>
              </div>
            </Link>
          </div>
          <div className={styles.vertical_line}></div>
          {/* Second Content */}
          <div className={styles.sidebar_first_content}>
            <Link style={{ color: "var(--text-color)" }} href="/history">
              <div>
                <p>
                  <AiOutlineHistory />
                </p>
                <span>HISTORY</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/videos/liked">
              <div>
                <p>
                  <AiFillLike />
                </p>
                <span>LIKED</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/playlist">
              <div>
                <p>
                  <MdLibraryAdd />
                </p>
                <span>PLAYLIST</span>
              </div>
            </Link>
          </div>
          <div className={styles.vertical_line}></div>
          {/* Third Contend */}
          <div className={styles.sidebar_subscriptions_content}>
            <h1>SUBSCRIPTIONS</h1>
            {[1, 2, 3, 4, 5, 6].map((e, index) => (
              <Link
                href={`/profile/nirajkumarchaurasiya${e}`}
                key={index}
                style={{ color: "var(--text-color)" }}
              >
                <div className={styles.content}>
                  <img src="/assests/user.png" alt="" />
                  <span>NIRAJ KUMAR CHAURASIYA</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.vertical_line}></div>
          {/* MORE */}
          <div className={styles.sidebar_first_content}>
            <Link style={{ color: "var(--text-color)" }} href="/settings">
              <div>
                <p>
                  <AiFillSetting />
                </p>
                <span>SETTING</span>
              </div>
            </Link>
            <div>
              <p>
                <MdFeedback />
              </p>
              <span>SEND FEEDBACK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Component */}
      <div
        className={
          showProfile
            ? styles.main_profile_options + " " + styles.shadow
            : styles.hide_main_profile_options + " " + styles.shadow
        }
      >
        <div className={styles.profile_options}>
          {/* profile */}
          <div className={styles.main_profile_image_username}>
            <div className={styles.right_profile}>
              <img src="/assests/user.png" alt="profile" />
            </div>
            <div className={styles.name_username}>
              <p>Niraj Chaurasiya</p>
              <span>@Niraj.Chaurasiya</span>
            </div>
          </div>
          <div className={styles.vertical_line}></div>
          {/* end profile */}

          {/* More in profile */}
          <div className={styles.more_options}>
            {/* Profile */}
            <div className={styles.more_option}>
              <p>
                <FaUserAlt />
              </p>
              <span>Your profile</span>
            </div>

            {/*  */}
            <div className={styles.more_option}>
              <p>
                <MdSpaceDashboard />
              </p>
              <span>Dashboard</span>
            </div>
            {/*  */}
            {/* Toggle Theme */}
            <div onClick={toggleTheme} className={styles.more_option}>
              <p>
                <BiSolidMoon />
              </p>
              <span>Toggle theme</span>
            </div>
            {/*  */}
            <div className={styles.more_option}>
              <p>
                <MdOutlineLogout />
              </p>
              <span>Logout</span>
            </div>
            {/*  */}
          </div>
          <div className={styles.vertical_line}></div>

          {/* Setting */}
          <div className={styles.more_options}>
            {/* Setting */}
            <div className={styles.more_option}>
              <p>
                <MdSettings />
              </p>
              <span>Settings</span>
            </div>
            {/*  */}
          </div>
          <div className={styles.vertical_line}></div>
          {/* Setting */}
          <div className={styles.more_options}>
            {/* Setting */}
            <div className={styles.more_option}>
              <p>
                <MdHelp />
              </p>
              <span>Help</span>
            </div>
            {/*  */}
          </div>

          {/*  */}

          {/* Setting */}
          <div className={styles.more_options}>
            {/* Setting */}
            <div className={styles.more_option}>
              <p>
                <MdFeedback />
              </p>
              <span>Send feedback</span>
            </div>
            {/*  */}
          </div>

          {/*  */}
          <div className={styles.vertical_line}></div>
        </div>
      </div>
      {/* Notification */}
      <div
        className={
          showNotification
            ? styles.main_notification_options + " " + styles.shadow
            : styles.hide_main_notification_options + " " + styles.shadow
        }
      >
        <div className={styles.notification_options}>
          {/* First Component */}
          <div className={styles.notification_first_component}>
            <span>Alerts</span>
            <p>
              <MdSettings />
            </p>
          </div>
          <div className={styles.vertical_line}></div>
          {/* All notifications */}
          <div className={styles.all_notifications}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, index) => {
              return (
                <div key={index} className={styles.single_notification}>
                  {/* notification channel img */}
                  <div className={styles.channel_img}>
                    <div>
                      <div className={styles.notification_bg}></div>
                      <img src="/assests/user.png" alt="channel" />
                    </div>
                  </div>
                  {/* Notification title */}
                  <div className={styles.notification_title}>
                    <p>
                      The Daily Show ले The Rise of Vaping - If You Don&apos;t
                      Know, Now You Know | The Daily Show अपलोड गरेको
                    </p>
                    <p>{e} hours ago</p>
                  </div>
                  {/* Notification video image */}
                  <div className={styles.notification_image}>
                    <img src="/others/img.png" alt="channel" />
                  </div>
                  {/*  */}
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
