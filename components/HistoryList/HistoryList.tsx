import React, { useEffect, useState } from "react";
import { db } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";
import { format } from "date-fns";
import styles from "./HistoryList.module.css";

const HistoryList = () => {
  const [histories, setHistories] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            const data = doc.data();
            console.log(data);
            setHistories(data.donate);
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

  const historiesList = histories?.map((history, idx) => (
    <div key={idx} className={styles.listContainer}>
      <p className={styles.date}>
        {format(history.date.toDate(), "E, dd MMMM yyyy")}
      </p>
      <p className={styles.place}>At {history.place}</p>
    </div>
  ));

  return (
    <div>
      <h2 className={styles.title}>Donor History List</h2>
      <img
        src="/image/heart-icon.svg"
        alt="heartIcon"
        className={styles.icon}
      />
      {historiesList ? (
        historiesList
      ) : (
        <p className={styles.notfound}>No donation before</p>
      )}
    </div>
  );
};

export default HistoryList;
