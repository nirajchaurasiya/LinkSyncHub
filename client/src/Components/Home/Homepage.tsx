"use client";
import React from "react";
import styles from "./page.module.css";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
export default function Homepage() {
  return (
    <div className={styles.home_component}>
      <div className={styles.home_main_component}>
        <div className={styles.filter_menu}></div>
        {/* Video components */}
        <div className={styles.video_components}>
          {/* Video component */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11].map((e, index) => {
            return (
              <div key={index} className={styles.video}>
                <div className={styles.image}>
                  <Link
                    href={`/video?src=${e}&channel=TarakMehtaKaOoltahChashmahEpisodes`}
                  >
                    <img src="/others/img.png" alt="" />
                  </Link>
                </div>
                <div className={styles.description}>
                  <div className={styles.flex}>
                    <div className={styles.video_img}>
                      <Link
                        style={{ color: "var(--text-color)" }}
                        href="/profile/TarakMehtaKaOoltahChashmah"
                      >
                        <img src="/assests/user.png" alt="" />
                      </Link>
                    </div>
                    <Link
                      href={`/video?src=${e}&channel=TarakMehtaKaOoltahChashmahEpisodes`}
                      style={{ color: "var(--text-color)" }}
                    >
                      <p className={styles.title}>
                        Taarak Mehta Ka Ooltah Chashmah - Episode 2622 - Full
                        Episode
                      </p>
                    </Link>
                  </div>
                  <div className={styles.author}>
                    <Link
                      style={{ color: "var(--text-color)" }}
                      href="/profile/TarakMehtaKaOoltahChashmah"
                    >
                      <span>
                        Tarak Mehta Ka Ooltah Chashmah <MdVerified />{" "}
                      </span>
                    </Link>
                    <div className={styles.views}>
                      <p>141k views</p>.<p>1 year ago</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
