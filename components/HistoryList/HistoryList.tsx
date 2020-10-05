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
import DonateBtn from "./DonateBtn/DonateBtn";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 52rem;
  height: 12rem;
  background-color: #e9e7fc;
  border: 2px solid #18191f;
  box-shadow: 0px 2px 0px 0px #18191f;
  border-radius: 1.6rem;
  padding: 3.2rem 2.4rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Date = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const StyledPara = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
  margin-top: 0.8rem;
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
`;

const Icon = styled.icon`
  margin-top: 2.4rem;
`;

const NotFound = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 2.4rem;
`;

const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  const [nextDonation, setNextDonation] = useState("");
  const [isAbleDonate, setIsAbleDonate] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("donate")
        .orderBy("date", "desc")
        .get()
        .then(function (querySnapshot) {
          const newList = [];
          querySnapshot.forEach(function (doc) {
            const newData = { ...doc.data(), id: doc.id };
            newList.push(newData);
          });
          setHistories(newList);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [user]);

  useEffect(() => {
    getNextDonation();
  }, [histories]);

  const historiesList = histories?.map((history) => (
    <ListContainer key={history.id}>
      <Date>{format(history.date.toDate(), "E, dd MMMM yyyy")}</Date>
      <StyledPara>At {history.place}</StyledPara>
    </ListContainer>
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
          setIsAbleDonate(true);
        } else {
          const distance = formatDistanceToNow(newDate);
          setNextDonation("Your next blood donation will be in " + distance);
        }
      }
    }
  };

  return (
    <div>
      <Title>Donor History List</Title>
      <Icon src="/image/heart-icon.svg" alt="heartIcon" />
      {histories.length ? (
        <StyledPara>{nextDonation}</StyledPara>
      ) : (
        <>
          <StyledPara>Get your first blood donation</StyledPara>
          <DonateBtn />
        </>
      )}
      {isAbleDonate && <DonateBtn />}
      {historiesList.length ? (
        historiesList
      ) : (
        <NotFound>No donation before</NotFound>
      )}
    </div>
  );
};

export default HistoryList;
