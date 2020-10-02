import React, { useEffect, useState } from "react";
import { db } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";
import { format } from "date-fns";
import styles from "./RequestList.module.css";

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
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
    }
  }, [user]);

  const requestList = requests.map((req, idx) => (
    <div key={idx} className={styles.listContainer}>
      <p className={styles.date}>
        {format(req.date.toDate(), "E, dd MMMM yyyy")}
      </p>
      <p className={styles.content}>At {req.place}</p>
    </div>
  ));

  return (
    <div>
      <h2 className={styles.title}>Blood Request List</h2>
      {requestList}
    </div>
  );
};

export default RequestList;
