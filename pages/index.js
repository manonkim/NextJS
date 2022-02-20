import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "A First meetup",
    address: "서울시 마포구",
    description: "첫 meetup",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "A Second meetup",
    address: "서울시 봉천동",
    description: "첫 meetup",
  },
];
export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     //페이지 주기적으로 업데이트 할 시간
//     revalidate: 1,
//   };
// }

export function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
