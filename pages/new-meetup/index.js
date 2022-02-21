//our-domain.com/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  //데이터를 수집해서 db로 보내는 함수
  //fetch function이나 axios 등을 사용하여 보낸다.
  async function addMeetupHandler(enteredMeetupData) {
    //api폴더/폴더이름  파일로가서 함수를 trigger
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      //body에 내용을 입력데이터 넣어줌
      headers: {
        "Content-Type": "application/json",
      },
      //JSON 데이터 보내는 것을 명확하게 하기위해 header추가
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
