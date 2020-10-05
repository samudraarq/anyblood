import React, { useEffect, useState } from "react";
import { db } from "../../config/fbConfig";
import { format } from "date-fns";
import RequestBtn from "./RequestBtn/RequestBtn";
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

const NotFound = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 2.4rem;
`;

const Post = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 1.2rem;
`;

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    db.collection("requests")
      .get()
      .then(function (querySnapshot) {
        const newList = [];
        querySnapshot.forEach(function (doc) {
          const newData = { ...doc.data(), id: doc.id };
          newList.push(newData);
        });
        setRequests(newList);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const requestList = requests.map((req) => (
    <ListContainer key={req.id}>
      <Date>
        for {req.fullname} <span> &#183; </span>
        {format(req.date.toDate(), "E, dd MMMM yyyy")}
      </Date>
      <StyledPara>
        Type {req.bloodtype}, {req.place},{" "}
        {req.bloodbagsamount === 1
          ? `${req.bloodbagsamount} bag`
          : `${req.bloodbagsamount} bags`}
      </StyledPara>
    </ListContainer>
  ));

  return (
    <div>
      <Title>Blood Request List</Title>
      <Post>Post a request</Post>
      <RequestBtn />
      {requestList ? requestList : <NotFound>No requests before</NotFound>}
    </div>
  );
};

export default RequestList;
