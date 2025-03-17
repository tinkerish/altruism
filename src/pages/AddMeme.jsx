import { useCallback, useMemo, useState } from "react";
import { Tabs } from "../components/Tabs.jsx";
import EditComponent from "../components/MultiStepForm/index.jsx";
import PreviewComponent from "../components/Preview/index.jsx";
const AddMemePageComponent = () => {
  const [memeData, setMemeData] = useState();
  const [tab, setTab] = useState(0);
  const handleMemeData = useCallback((meme) => {
    setMemeData(meme);
  }, []);
  const tabChangeHandler = (index) => {
    setTab(index);
  };
  const tabs = useMemo(
    () => [
      {
        title: "Edit",
        component: EditComponent,
        props: {
          id: "tabpanel",
          ariaLabelledBy: "tab",
          handleMemeData: handleMemeData,
        },
      },
      {
        title: "Preview",
        component: PreviewComponent,
        props: {
          id: "tabpanel",
          ariaLabelledBy: "tab",
          memeData: memeData,
        },
      },
    ],
    [handleMemeData, memeData]
  );

  return (
    <div className="flex flex-col items-center py-14">
      <Tabs value={tab} onChange={tabChangeHandler} tabs={tabs}></Tabs>
    </div>
  );
};

export default AddMemePageComponent;
