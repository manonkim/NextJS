import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      title='First Meetup'
      address='Some Street'
      description='This is a first meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    //fallback-paths 배열이 모든 지원되는 매개변수를 저장할지, 일부만 저장할지 설정
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      }, //dynamic page당  객체 하나
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      mettupData: {
        image:
          "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "First Meetup",
        id: meetupId,
        address: "Some Street",
        description: "This is a first meetup",
      },
    },
  };
}
