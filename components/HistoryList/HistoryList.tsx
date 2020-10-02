import React, { useEffect, useState } from "react";
import { db } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";
import {
  format,
  addDays,
  formatDistanceToNow,
  isAfter,
  isTomorrow,
  isToday,
  isBefore,
} from "date-fns";
import styles from "./HistoryList.module.css";

const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  const [nextDonation, setNextDonation] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            const data = doc.data().donate.reverse();
            setHistories(data);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [user]);

  useEffect(() => {
    getNextDonation();
  }, [histories]);

  const historiesList = histories?.map((history, idx) => (
    <div key={idx} className={styles.listContainer}>
      <p className={styles.date}>
        {format(history.date.toDate(), "E, dd MMMM yyyy")}
      </p>
      <p className={styles.place}>At {history.place}</p>
    </div>
  ));

  const getNextDonation = () => {
    if (histories.length > 0) {
      if (isToday(histories[0].date.toDate())) {
        setNextDonation("Your next blood donation is today");
      } else if (isTomorrow(histories[0].date.toDate())) {
        setNextDonation("Your next blood donation is tomorrow");
      } else if (isAfter(histories[0].date.toDate(), new Date())) {
        const newDate = addDays(histories[0].date.toDate(), 1);
        const distance = formatDistanceToNow(newDate);
        setNextDonation("Your next blood donation will be in " + distance);
      } else {
        const newDate = addDays(histories[0].date.toDate(), 91);
        if (isBefore(newDate, new Date())) {
          setNextDonation("Get your blood donate");
        } else {
          const distance = formatDistanceToNow(newDate);
          setNextDonation("Your next blood donation will be in " + distance);
        }
      }
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Donor History List</h2>
      <img
        src="/image/heart-icon.svg"
        alt="heartIcon"
        className={styles.icon}
      />
      {histories.length ? (
        <p className={styles.next}>{nextDonation}</p>
      ) : (
        <p className={styles.next}>Get your first blood donation</p>
      )}
      <p></p>
      {historiesList ? (
        historiesList
      ) : (
        <p className={styles.notfound}>No donation before</p>
      )}
    </div>
  );
};

export default HistoryList;
