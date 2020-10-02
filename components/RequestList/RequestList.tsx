import React, { useEffect, useState } from "react";
import { db } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";
import { format } from "date-fns";
import styles from "./RequestList.module.css";

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    db.collection("requests")
      .get()
      .then(function (querySnapshot) {
        const newList = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          newList.push(doc.data());
        });
        setRequests(newList);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const requestList = requests.map((req, idx) => (
    <div key={idx} className={styles.listContainer}>
      <p className={styles.date}>
        for {req.fullname} <span> &#183; </span>
        {format(req.date.toDate(), "E, dd MMMM yyyy")}
      </p>
      <p className={styles.content}>
        Type {req.bloodtype}, {req.place},{" "}
        {req.bloodbagsamount === 1
          ? `${req.bloodbagsamount} bag`
          : `${req.bloodbagsamount} bags`}
      </p>
    </div>
  ));

  return (
    <div>
      <h2 className={styles.title}>Blood Request List</h2>
      {requestList ? (
        requestList
      ) : (
        <p className={styles.notfound}>No requests before</p>
      )}
    </div>
  );
};

export default RequestList;
