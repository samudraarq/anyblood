import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import DonateFormik from "../Formik/DonateFormik";
import styles from "./Donate.module.css";
import { db } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";
import { useRouter } from "next/router";

const Donate = () => {
  const [isAbleDonate, setIsAbleDonate] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const nextDate = data.nextBloodDonation.toDate();
            console.log(nextDate);
            if (nextDate < new Date()) {
              setIsAbleDonate(true);
            } else {
              setIsAbleDonate(false);
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        });
    }
  }, [user]);

  const handleSubmit = (e) => {
    const uid = user.uid;
    const newData = { uid, ...e };
    const nextBloodDonation = addDays(e.date, 90);

    db.collection("users")
      .doc(uid)
      .update({
        nextBloodDonation,
      })
      .then(function (docRef) {
        // go to success page
        console.log("success change date");
      })
      .catch(function (error) {
        // display error
        console.log(error);
      });

    db.collection("users")
      .doc(uid)
      .collection("donate")
      .add(newData)
      .then(function (docRef) {
        // go to success page
        console.log("success add donation");
        router.push("/donate/success");
      })
      .catch(function (error) {
        // display error
        console.log(error);
      });
  };

  return (
    <div className={styles.form}>
      <h2>Donor Form</h2>
      <p>Please fill the form to donate your blood.</p>
      {isAbleDonate ? (
        <DonateFormik handleSubmit={handleSubmit} />
      ) : (
        <h3 className={styles.reminder}>
          You already donate, please wait until your next donation
        </h3>
      )}
    </div>
  );
};

export default Donate;
