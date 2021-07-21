import React from "react";
import styles from "./SavedContent.module.css";
import logo from "../../assets/hungLee.jfif";
import bbc from "../../assets/bbc.jfif";
import medium from "../../assets/medium.png";
import { FiInbox, FiLock, FiMoreHorizontal } from "react-icons/fi";

const SavedContent = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentDetails}>
          <div className={styles.contentAbout}>
            <a href="#" className={`${styles.contentType} highlight-blue`}>
              Social
            </a>
            <a href="#" className={`${styles.contentFrom}`}>
              Medium
            </a>
          </div>
          <div className={styles.contentInfo}>
            <a href="#" className={styles.contentMenu}>
              <FiInbox />
              <span>Inbox</span>
            </a>
            <a href="#" className={styles.contentMenu}>
              <FiLock />
              <span>Private</span>
            </a>
            <a href="#" className={styles.contentMenu}>
              <FiMoreHorizontal />
            </a>
          </div>
        </div>
        <div className={styles.contentDescription}>
          <img src={logo} alt="img" className={styles.contentImg} />
          <div className={styles.info}>
            <div className={styles.contentHeading}>
              HOW TO HIRE MORE WOMEN INTO ENGINEERING? Last week, I started
              conversation on how to hire more women engineers. Hundreds of
              people - Tech Recruiters, women engineers...
            </div>
            <p className={styles.desc}>Hung Lee on Twitter</p>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Tag
              </a>
            </div>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Notes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentDetails}>
          <div className={styles.contentAbout}>
            <a href="#" className={`${styles.contentType} highlight-blue`}>
              Social
            </a>
            <a href="#" className={`${styles.contentFrom}`}>
              Medium
            </a>
          </div>
          <div className={styles.contentInfo}>
            <a href="#" className={styles.contentMenu}>
              <FiInbox />
              <span>Inbox</span>
            </a>
            <a href="#" className={styles.contentMenu}>
              <FiLock />
              <span>Private</span>
            </a>
            <a href="#" className={styles.contentMenu}>
              <FiMoreHorizontal />
            </a>
          </div>
        </div>
        <div className={styles.contentDescription}>
          <img src={bbc} alt="img" className={styles.contentImg} />
          <div className={styles.info}>
            <div className={styles.contentHeading}>
              Ghana basks in Twitter's surprise choice as Africa HQ
            </div>
            <p className={styles.desc}>
              Start-ups in the West African nation celebrate as other ponder why
              their countries were snubbed.
            </p>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Tag
              </a>
              <a href="#" className={`${styles.contentMenu} `}>
                africa <span>&#215;</span>
              </a>
            </div>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Notes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentDetails}>
          <div className={styles.contentAbout}>
            <a href="#" className={`${styles.contentType} highlight-blue`}>
              Social
            </a>
            <a href="#" className={`${styles.contentFrom}`}>
              Medium
            </a>
          </div>
          <div className={styles.contentInfo}>
            <a href="#" className={styles.contentMenu}>
              <FiInbox />
              <span>Inbox</span>
            </a>
            <a href="#" className={styles.contentMenu}>
              <FiLock />
              <span>Private</span>
            </a>
            <a href="#" className={styles.contentMenu}>
              <FiMoreHorizontal />
            </a>
          </div>
        </div>
        <div className={styles.contentDescription}>
          <img src={medium} alt="img" className={styles.contentImg} />
          <div className={styles.info}>
            <div className={styles.contentHeading}>
              Off to a flying start: who should you hire to raise a €10M +
              Series A?
            </div>
            <p className={styles.desc}>
              Analysis of the early hires of top 15 B2B software companies in
              Europe.
            </p>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Tag
              </a>
            </div>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedContent;
