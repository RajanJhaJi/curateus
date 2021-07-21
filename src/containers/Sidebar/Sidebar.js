import React from "react";
import styles from "./Sidebar.module.css";
import {
  FiBookmark,
  FiBook,
  FiList,
  FiFileText,
  FiHeadphones,
  FiUsers,
  FiFilm,
  FiAnchor,
  FiAlertCircle,
  FiInbox,
  FiPlay,
  FiCheckCircle,
  FiArchive,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} side-bar`}>
      <ul className={styles.sideUpperMenu}>
        <li>
          <a href="#" className={`${styles.sideItem} highlight-yellow`}>
            <FiBookmark className={styles.sideLogo} /> BookMarks
          </a>
        </li>
        <li>
          <a href="#" className={styles.sideItem}>
            <FiList className={styles.sideLogo} /> Collections
          </a>
        </li>
      </ul>
      <div className={styles.sideTags}>
        <div className={styles.sideHeading}>Tags</div>
        <a href="#" className={`${styles.sideItem} highlight-blue`}>
          Select
        </a>
      </div>
      <div className={styles.sideType}>
        <div className={styles.sideHeading}>Type</div>
        <ul>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiFileText className={styles.sideLogo} />
              Articles <span className="notification highlight-blue">99</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiBook className={styles.sideLogo} />
              Books <span className="notification highlight-blue">6</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiHeadphones className={styles.sideLogo} />
              Podcasts <span className="notification highlight-blue">2</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiUsers className={styles.sideLogo} />
              Social <span className="notification highlight-blue">13</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiFilm className={styles.sideLogo} />
              videos <span className="notification highlight-blue">20</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiAnchor className={styles.sideLogo} />
              websites <span className="notification highlight-blue">35</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.sideStatus}>
        <div className={styles.sideHeading}>
          Status <FiAlertCircle className={styles.alert} />
        </div>
        <ul>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiInbox className={styles.sideLogo} />
              Inbox <span className="notification highlight-blue">99</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiPlay className={styles.sideLogo} />
              In Progress <span className="notification highlight-blue">6</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiCheckCircle className={styles.sideLogo} />
              Done <span className="notification highlight-blue">2</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideItem}>
              <FiArchive className={styles.sideLogo} />
              Archieve <span className="notification highlight-blue">13</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
