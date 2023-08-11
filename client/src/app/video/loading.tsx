"use client";
import React, { useEffect, useState } from "react";
import styles from "./loading.module.css";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import "node_modules/video-react/dist/video-react.css";
export default function Loading() {
  const [url, setUrl] = useState("");
  const [theme, setTheme] = useState("light");
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

            <img src="/others/img.png" />
          </div>
          {/*  */}
          <div className={styles.video_descriptions}>
            <div className={styles.video_header}>
              <p></p>
            </div>
            <div className={styles.video_profile}>
              {/*  */}
              <div className={styles.video_logo}>
                <Link href={`#`}>
                  <img
                    width={40}
                    height={40}
                    src="/assests/user.png"
                    alt="logo"
                  />
                </Link>
                <div className={styles.channel_name}>
                  <Link href={`#`}>
                    <p title="Tarak Mehta Ka Ooltah Chashmah"></p>
                  </Link>
                  <span className={styles.subscribe_count}></span>
                </div>
              </div>
              {/*  */}
              <div className={styles.essential_btns}>
                <div className={styles.like_unlike_btn}>
                  <button></button>
                  <button></button>
                </div>
                <div className={styles.subscribe_btn}>
                  <button></button>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className={styles.recommended_videos}>
          <div className={styles.recommended_video_topic}>
            <button></button>
            <button></button>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, index) => {
            return (
              <div key={index} className={styles.recommended_video}>
                <div className={styles.recommended_video_image}></div>

                <div className={styles.video_details}>
                  <div className={styles.video_title}>
                    <p></p>
                  </div>
                  <div className={styles.video_channel}>
                    <p></p>
                  </div>
                  <div className={styles.video_views}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
