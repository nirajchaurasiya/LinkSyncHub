"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import {
  BiMessageAlt,
  BiPodcast,
  BiPopsicle,
  BiRepost,
  BiSearch,
  BiSolidMoon,
  BiSolidPopsicle,
  BiSolidVideoPlus,
} from "react-icons/bi";
import { BsPostcardHeart, BsPostcardHeartFill } from "react-icons/bs";
import {
  AiFillHome,
  AiFillSetting,
  AiOutlineHistory,
  AiFillLike,
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineLike,
  AiOutlineAppstore,
  AiOutlineSetting,
  AiOutlineAppstoreAdd,
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
  MdOutlineLibraryAdd,
  MdPostAdd,
  MdOutlineFeedback,
} from "react-icons/md";
import {
  IoNotifications,
  IoNotificationsOff,
  IoNotificationsOutline,
} from "react-icons/io5";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
export default function Navbar(props: any) {
  const [showMenu, setShowMenu] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [className, setClassName] = useState("transparent");
  const [crossNavDiv, setCrossNavDiv] = useState(false);
  const toggleTheme = () => {
    const theme = localStorage.getItem("linksynchub");
    // const toSet = theme === "light" ? "dark" : "light";
    if (theme === "light" || theme === "" || theme === undefined) {
      localStorage.setItem("linksynchub", "dark");
      setClassName("transparent");
      window.location.reload();
    } else {
      localStorage.setItem("linksynchub", "light");
      setClassName("no_transparent");
      window.location.reload();
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const theme = localStorage.getItem("linksynchub");
      // Means scroll to top == true
      if (scrollTop > 0) {
        // console.log("Scrolled");
        if (theme === "light") {
          setClassName("no_transparent");
        } else {
          setClassName("no_transparent");
        }
      } else {
        // console.log("Scrolled to top");
        if (theme === "light") {
          setClassName("no_transparent");
        } else {
          setClassName("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log("object");
    const theme = localStorage.getItem("linksynchub");

    if (theme) {
      const body = document.body;
      body.classList.remove("light", "dark"); // Remove any existing theme classes
      body.classList.add(theme); // Add the new theme class
    }
  }, []);
  // const navbarClassName = !showBackground ? "no_transparent" : "transparent";
  const showSideMenu = () => {
    const background_blur = document.getElementById("background_blur");
    console.log(background_blur);
    setShowMenu(!showMenu);
    const div = document.createElement("div");
    div.className = "fixed_the_background";
    if (showMenu) {
      document.body.style.overflow = "hidden";
      background_blur?.classList.add("background_blur");
      background_blur?.appendChild(div);
      setCrossNavDiv(true);
    } else {
      document.body.style.overflowY = "scroll";
      setCrossNavDiv(false);
      background_blur?.classList.remove("background_blur");
      const div = background_blur?.querySelector(".fixed_the_background");
      if (div) {
        background_blur?.removeChild(div);
      }
    }
  };

  return (
    <div id="main_navbar" className={className}>
      {/* Navbar */}
      <div className={styles.nav}>
        {/* First Components */}
        <div className={styles.first_component}>
          <div
            className={
              crossNavDiv
                ? styles.opened + " " + styles.three_line
                : styles.three_line
            }
            onClick={showSideMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.nav_logo}>
            <Link href="/" style={{ color: "var(--text-color)" }}>
              {props.title}
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
            {!showNotification ? (
              <IoNotificationsOutline />
            ) : (
              <IoNotifications />
            )}
            <p className={styles.notification_count}>9+</p>
          </div>
          <div className={styles.profile_picture}>
            <Image
              width={30}
              height={30}
              onClick={() => {
                setShowNotification(false);
                setShowProfile(!showProfile);
              }}
              src="/assests/user.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={!showMenu ? styles.sidebar : styles.hideSidebar}
      >
        <div className={styles.sidebar_content}>
          {/* First Content */}
          <div className={styles.sidebar_first_content}>
            <Link style={{ color: "var(--text-color)" }} href="/">
              <div>
                <p>
                  <AiOutlineHome />
                </p>
                <span>HOME</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/new/videos">
              <div>
                <p>
                  <AiOutlineVideoCamera />
                </p>
                <span>NEW VIDEOS</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/new/posts">
              <div>
                <p>
                  <MdPostAdd />
                </p>
                <span>NEW POSTS</span>
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
            <Link style={{ color: "var(--text-color)" }} href="/liked/videos">
              <div>
                <p>
                  <AiOutlineLike />
                </p>
                <span>LIKED VIDEOS</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/liked/posts">
              <div>
                <p>
                  <BsPostcardHeart />
                </p>
                <span>LIKED POSTS</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/playlist">
              <div>
                <p>
                  <MdOutlineLibraryAdd />
                </p>
                <span>PLAYLIST</span>
              </div>
            </Link>

            <Link style={{ color: "var(--text-color)" }} href="/upload/video">
              <div>
                <p>
                  <AiOutlineVideoCamera />
                </p>
                <span>UPLOAD VIDEO</span>
              </div>
            </Link>
            <Link style={{ color: "var(--text-color)" }} href="/upload/post">
              <div>
                <p>
                  <BiPodcast />
                </p>
                <span>UPLOAD POST</span>
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
                  <Image
                    width={30}
                    height={30}
                    src="/assests/user.png"
                    alt=""
                  />
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
                  <AiOutlineSetting />
                </p>
                <span>SETTING</span>
              </div>
            </Link>
            <Link href="/send-feedbacks" style={{ color: "var(--text-color)" }}>
              <div>
                <p>
                  <MdOutlineFeedback />
                </p>
                <span>SEND FEEDBACK</span>
              </div>
            </Link>
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
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className={styles.main_profile_image_username}
          >
            <div className={styles.right_profile}>
              <Image
                width={30}
                height={30}
                src="/assests/user.png"
                alt="profile"
              />
            </div>
            <div className={styles.name_username}>
              <p>Niraj Chaurasiya</p>
              <span>@Niraj.Chaurasiya</span>
            </div>
          </div>
          <div className={styles.vertical_line}></div>
          {/* end profile */}

          {/* More in profile */}
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className={styles.more_options}
          >
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
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className={styles.more_options}
          >
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
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className={styles.more_options}
          >
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
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className={styles.more_options}
          >
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
                <div
                  onClick={() => {
                    setShowNotification(!showNotification);
                  }}
                  key={index}
                  className={styles.single_notification}
                >
                  {/* notification channel img */}
                  <div className={styles.channel_img}>
                    <div>
                      {/* <div className={styles.notification_bg}></div> */}
                      <Link href={`/profile/TarakMehtaKaOoltahChashmah${e}`}>
                        <Image
                          width={30}
                          height={30}
                          src="/assests/user.png"
                          alt="channel"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Notification title */}
                  <div
                    onClick={() => {
                      window.open(
                        `/video?src=${e}&channel=TarakMehtaKaOoltahChashmah`,
                        "_blank"
                      );
                    }}
                    className={styles.notification_title}
                  >
                    <p>
                      The Daily Show ले The Rise of Vaping - If You Don&apos;t
                      Know, Now You Know | The Daily Show अपलोड गरेको
                    </p>
                    <p>{e} hours ago</p>
                  </div>
                  {/* Notification video image */}
                  <div
                    onClick={() => {
                      window.open(
                        `/video?src=${e}&channel=TarakMehtaKaOoltahChashmah`,
                        "_blank"
                      );
                    }}
                    className={styles.notification_image}
                  >
                    <Image
                      width={60}
                      height={50}
                      src="/others/img.png"
                      alt="channel"
                    />
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
