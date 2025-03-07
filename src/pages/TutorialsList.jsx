import TutorialGrid from "../components/ListTutorialComponent";
import ListBuilder from "../data_provider/TutorialList";
import Navbar from "../layout/Navbar";

function TutorialsList() {
  return (
    <>
      <TutorialGrid tutorials={ListBuilder} title="My awesome tutorials" />
    </>
  );
}

export default TutorialsList;
