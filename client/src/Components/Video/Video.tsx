"use client";
import React, { useEffect, useState } from "react";
import styles from "./video.module.css";
import Link from "next/link";
import { MdOutlineSort } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import {
  AiTwotoneLike,
  AiTwotoneDislike,
  AiOutlineLike,
  AiOutlineDisconnect,
  AiOutlineDislike,
} from "react-icons/ai";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import Image from "next/image";
export default function Video() {
  const [url, setUrl] = useState("");

  const [theme, setTheme] = useState("light");
  const [changeSubscriptionText, setChangeSubscriptionText] =
    useState("Subscribe");
  const searchParams = useSearchParams();
  useEffect(() => {
    const vid = searchParams.get("src");
    setUrl(vid || "");
  }, [url]);

  useEffect(() => {
    if (localStorage) {
      const theme_mode = localStorage?.getItem("linksynchub");
      setTheme(theme_mode || "light");
    } else {
      setTheme("light");
    }
  }, [theme]);
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

            <Player
              playsInline
              poster="/others/img.png"
              src="/others/video.mp4"
            />
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
                  <Image
                    width={40}
                    height={40}
                    src="/assests/channel.png"
                    alt="logo"
                  />
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
                      <AiOutlineLike />
                    </span>
                  </button>
                  <button>
                    <span>
                      <AiOutlineDislike />
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
            {/* Comment div Start*/}
            <div className={styles.comment_div}>
              <div className={styles.comment_count}>
                <p>393 Comments</p>
                <span>
                  <MdOutlineSort />
                </span>
              </div>
              {/* Comment Box */}
              <div className={styles.comment_box}>
                {/* Comment user image */}
                <div className={styles.comment_user_img}>
                  <img src="/assests/user.png" alt="" />
                </div>
                <div className={styles.comment_input_btn}>
                  {/* Cmt input */}
                  <div className={styles.comment_input}>
                    <input type="text" placeholder="Enter a comment" />
                  </div>
                  <div className={styles.comment_btn}>
                    <button>Cancel</button>
                    <button>Comment</button>
                  </div>
                </div>
              </div>
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
                    <Image
                      width={150}
                      height={90}
                      src="/others/img.png"
                      alt="video"
                    />
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
