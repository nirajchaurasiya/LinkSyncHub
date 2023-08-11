"use client";
import React, { useEffect, useState } from "react";
import styles from "./video.module.css";
import Link from "next/link";
import { HiMiniPause } from "react-icons/hi2";
import { BsFillPlayFill } from "react-icons/bs";
import { MdReplay, MdVerified } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { Player } from "video-react";
import { BiFullscreen } from "react-icons/bi";
import "node_modules/video-react/dist/video-react.css";
export default function Video() {
  const [url, setUrl] = useState("");
  const [theme, setTheme] = useState("light");
  const [isNotPlaying, setIsNotPlaying] = useState(false);
  const [replay, setReplay] = useState(false);
  const [changeSubscriptionText, setChangeSubscriptionText] =
    useState("Subscribe");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    // const url = `${pathname}?${searchParams}`; Full URL
    const full_Url = `${pathname}?${searchParams}`;
    const id = full_Url.split("=")[1].split("&")[0];
    setUrl(id);
  }, [searchParams, pathname, url]);

  useEffect(() => {
    if (localStorage) {
      const theme_mode = localStorage?.getItem("linksynchub");
      setTheme(theme_mode || "light");
    } else {
      setTheme("light");
    }
  }, [theme]);
  const fullscreen = () => {
    const myvideo = document.getElementById("myvideo");
    myvideo?.requestFullscreen();
  };

  const updateTotalAndRemainingTime = () => {
    const myvideo = document.getElementById("myvideo");
    if (myvideo) {
      const totalDuration = Math.floor(myvideo.duration); // in seconds
      const currentTime = Math.floor(myvideo.currentTime); // in seconds
      const remainingTime = totalDuration - currentTime;
      if (myvideo.played) {
        setReplay(false);
      }
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      };

      const totalTimeElement = document.querySelector(".total_time");
      const currentTimeElement = document.querySelector(".current_time");
      // const remainingTimeElement = document.querySelector(".remaining_time");
      // if (totalTimeElement && currentTimeElement && remainingTimeElement) {
      //   totalTimeElement.textContent = formatTime(totalDuration);
      //   currentTimeElement.textContent = formatTime(currentTime);
      //   remainingTimeElement.textContent = formatTime(remainingTime);
      // }
      if (totalTimeElement && currentTimeElement) {
        totalTimeElement.textContent = formatTime(totalDuration);
        currentTimeElement.textContent = formatTime(currentTime);
      }
      if (currentTime >= totalDuration) {
        setIsNotPlaying(false);
        console.log(replay);
        setReplay(true);
      }
    }
  };
  // Add event listener to update times whenever the video time changes
  useEffect(() => {
    const myvideo = document.getElementById("myvideo");
    if (myvideo) {
      myvideo.addEventListener("timeupdate", updateTotalAndRemainingTime);
    } else {
      console.log("Loading");
    }
  }, []);

  const playPause = () => {
    const myvideo = document.getElementById("myvideo") as HTMLElement;
    if (myvideo.paused) {
      setIsNotPlaying(true);
      myvideo.play();
    } else {
      setIsNotPlaying(false);
      myvideo.pause();
    }
  };
  return (
    <div className={styles.video_recommendation}>
      <div className={styles.video_flex}>
        <div className={styles.video_box}>
          <div className={styles.actual_video_box}>
            {theme === "light" ? (
              <div className={`${styles.no_shadow}`}></div>
            ) : (
              <div className={`${styles.change_box_shadow}`}></div>
            )}

            {/* <video id="myvideo" src="/others/video.mp4" autoPlay></video> */}
            <Player
              playsInline
              poster="/others/img.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            {/* <div className={styles.video_controls}>
              <div className={styles.time_line}>
                <p></p>
                <p></p>
              </div>
              <div className={styles.control_btn}>
                <div className={styles.play_pause_btn}>
                  {isNotPlaying ? (
                    <span onClick={playPause}>
                      <BsFillPlayFill />
                    </span>
                  ) : replay ? (
                    <span onClick={playPause}>
                      <MdReplay />
                    </span>
                  ) : (
                    <span onClick={playPause}>
                      <HiMiniPause />
                    </span>
                  )}
                  <p className={styles.total_time}>
                    <span className="current_time">00:00</span> /{" "}
                    <span className="total_time">00:00</span>{" "}
                  </p>
                </div>
                <div className={styles.right_controls}>
                  <div className={styles.BiFullscreen}>
                    <p>
                      <BiFullscreen onClick={fullscreen} />
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/*  */}
          <div className={styles.video_descriptions}>
            <div className={styles.video_header}>
              <p>
                Taarak Mehta Ka Ooltah Chashmah - Episode 2627 - Full Episode
              </p>
            </div>
            <div className={styles.video_profile}>
              {/*  */}
              <div className={styles.video_logo}>
                <Link href={`/profile/TarakMehtaKaOoltahChashmah`}>
                  <img src="/assests/user.png" alt="logo" />
                </Link>
                <div className={styles.channel_name}>
                  <Link href={`/profile/TarakMehtaKaOoltahChashmah`}>
                    <p title="Tarak Mehta Ka Ooltah Chashmah">
                      Taarak Mehta Ka Ooltah Chashmah
                      <span title="Verified">
                        <MdVerified />
                      </span>
                    </p>
                  </Link>
                  <span className={styles.subscribe_count}>
                    2.81M subscribers
                  </span>
                </div>
              </div>
              {/*  */}
              <div className={styles.essential_btns}>
                <div className={styles.like_unlike_btn}>
                  <button>
                    <p>141</p>
                    <span>
                      <AiTwotoneLike />
                    </span>
                  </button>
                  <button>
                    <p>141</p>
                    <span>
                      <AiTwotoneDislike />
                    </span>
                  </button>
                </div>
                <div className={styles.subscribe_btn}>
                  <button
                    onClick={() =>
                      changeSubscriptionText === "Subscribe"
                        ? setChangeSubscriptionText("Subscribed")
                        : setChangeSubscriptionText("Subscribe")
                    }
                  >
                    {changeSubscriptionText}
                  </button>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className={styles.recommended_videos}>
          <div className={styles.recommended_video_topic}>
            <button>New</button>
            <button>Same Channel</button>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, index) => {
            return (
              <div key={index} className={styles.recommended_video}>
                <Link
                  href={`/video?src=${e}&channel=TarakMehtaKaOoltahChashmahEpisodes`}
                >
                  <div className={styles.recommended_video_image}>
                    <img src="/others/img.png" alt="video" />
                  </div>
                </Link>
                <Link
                  href={`/video?src=${e}&channel=TarakMehtaKaOoltahChashmahEpisodes`}
                >
                  <div className={styles.video_details}>
                    <div className={styles.video_title}>
                      <p>
                        Taarak Mehta Ka Ooltah Chashmah - Episode 2626 - Full
                        Episode
                      </p>
                    </div>
                    <div className={styles.video_channel}>
                      <p>Tarak Mehta Ka Ooltah Chashmah </p>
                    </div>
                    <div className={styles.video_views}>
                      <p>905k views</p> .<p> 2 years ago</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
