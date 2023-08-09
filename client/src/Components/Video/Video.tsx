"use client";
import React, { useEffect, useState } from "react";
import styles from "./video.module.css";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
export default function Video() {
  const [url, setUrl] = useState("");
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
  return (
    <div className={styles.video_recommendation}>
      <div className={styles.video_flex}>
        <div className={styles.video_box}>
          <div className={styles.actual_video_box}>
            <video src="/others/video.mp4" autoPlay controls></video>
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
