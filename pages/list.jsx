import { useContext, useEffect } from "react";
import AppContext from "../src/AppContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { TimeoutWarning } from "../src/components/timeoutWarning/TimeoutWarning";
import EmptyConfig from "../src/components/utils/EmptyConfig";
import { useStyletron } from "baseui";
import TableOptions from "../src/components/tableOptions/TableOptions";
import { ConfigTable } from "../src/components/table/ConfigTable";
import { CreateEditor } from "../src/components/Editor/createEditor";
import { LoadingMessage } from "../src/components/loadingMessage/LoadingMessage";
import getSortFilterConfigs from "../firebase/getSortFilterConfigs";

const List = () => {
  const context = useContext(AppContext);
  const isLoggedIn = context.state.isLoggedIn;
  const setIsLoggedIn = context.setIsLoggedIn;
  const setUserDetails = context.setUserDetails;
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalContent, setModalContent] = useState(EmptyConfig);
  const [isAdd, setIsAdd] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [lastVisible, setLastVisible] = useState("");
  const [firstVisible, setFirstVisible] = useState("");
  const [isTableDataLoading, setIsTableDataLoading] = useState(false);
  const router = useRouter();
  const [css, theme] = useStyletron();

  const fetchFilteredConfigs = async () => {
    const filterByTag = JSON.parse(localStorage.getItem("filterByTag"));
    const filterByModule = JSON.parse(localStorage.getItem("filterByModule"));
    const filterByGroup = JSON.parse(localStorage.getItem("filterByGroup"));
    setIsTableDataLoading(true);
    const sortfilterData = await getSortFilterConfigs(
      filterByTag,
      filterByModule,
      filterByGroup,
      lastVisible,
      setLastVisible,
      firstVisible,
      setFirstVisible,
      ""
    );
    setTableData([...sortfilterData]);
    setIsTableDataLoading(false);
  };

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  });
  useEffect(() => {
    fetchFilteredConfigs();
  }, []);

  if (isLoggedIn) {
    return (
      <div className={css({ backgroundColor: theme.colors.backgroundPrimary })}>
        <TableOptions
          openModal={setOpenEditModal}
          setModalContent={setModalContent}
          setIsAdd={setIsAdd}
          setTableData={setTableData}
          tableData={tableData}
          firstVisible={firstVisible}
          setFirstVisible={setFirstVisible}
          lastVisible={lastVisible}
          setLastVisible={setLastVisible}
          isTableDataLoading={isTableDataLoading}
          setIsTableDataLoading={setIsTableDataLoading}
          fetchFilteredConfigs={fetchFilteredConfigs}
        />
        <ConfigTable
          data={tableData}
          openModal={setOpenEditModal}
          setModalContent={setModalContent}
          setIsAdd={setIsAdd}
          isTableDataLoading={isTableDataLoading}
          fetchFilteredConfigs={fetchFilteredConfigs}
        />
        {openEditModal && (
          <CreateEditor
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            listContent={modalContent}
            isAdd={isAdd}
            fetchConfigs={fetchFilteredConfigs}
          />
        )}
        <TimeoutWarning />
      </div>
    );
  } else {
    return (
      <div
        className={css({
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <LoadingMessage />
      </div>
    );
  }
};

export default List;
