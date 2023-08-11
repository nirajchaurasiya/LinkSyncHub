"use client";
import React from "react";
import styles from "./loading.module.css";
export default function Loading() {
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
                <div className={styles.image}></div>
                <div className={styles.description}>
                  <div className={styles.flex}>
                    <div className={styles.video_img}></div>

                    <p className={styles.title}></p>
                  </div>
                  <div className={styles.author}>
                    <div className={styles.views}></div>
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
