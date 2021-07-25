import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";
import logo from "../../assets/hungLee.jfif";
import bbc from "../../assets/bbc.jfif";
import medium from "../../assets/medium.png";
import { FiInbox, FiLock, FiMoreHorizontal } from "react-icons/fi";
import Tags from "../Tags/Tags";

const Content = (props) => {
  return (
    <div>
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
          <img
            src={props.data.thumbnail}
            alt="img"
            className={styles.contentImg}
          />
          <div className={styles.info}>
            <div className={styles.contentHeading}>{props.data.title}</div>
            <p className={styles.desc}>{props.data.description}</p>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Tag
              </a>
              {props.data.tags.map((el, i) => {
                return <Tags data={el} classes={`${styles.contentMenu} `} />;
              })}
            </div>
            <div className={styles.tags}>
              <a href="#" className={`${styles.contentMenu} ${styles.tag}`}>
                + Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
