import { useState } from "react";
import getSortFilterConfigs from "../../../firebase/getSortFilterConfigs";
import getSearchResult from "../../../firebase/getSearchResult";
// import TableHeader from "../tableHeaderComponents/TableHeader";
// import TableSubheader from "../tableHeaderComponents/TableSubheader";
// import TableHeader from "./tableHeaderComponents/tableHeader/TableHeader";
// import TableSubheader from "./tableHeaderComponents/tableSubHeader/TableSubheader";
import TableHeader from "./tableHeaderComponents/tableHeader/TableHeader";
import TableSubheader from "./tableHeaderComponents/tableSubHeader/TableSubheader";

const TableOptions = ({
  openModal,
  setModalContent,
  setIsAdd,
  setTableData,
  firstVisible,
  setFirstVisible,
  lastVisible,
  setLastVisible,
  setIsTableDataLoading,
  fetchFilteredConfigs,
}) => {
  const [searchValue, setSearchValue] = useState([]);
  const fetchSortFilterData = async (
    filterByTag,
    filterByModule,
    filterByGroup,
    lastVisible,
    setLastVisible,
    firstVisible,
    setFirstVisible,
    type
  ) => {
    setIsTableDataLoading(true);
    const sortfilterData = await getSortFilterConfigs(
      filterByTag,
      filterByModule,
      filterByGroup,
      lastVisible,
      setLastVisible,
      firstVisible,
      setFirstVisible,
      type
    );
    setTableData(sortfilterData);
    setIsTableDataLoading(false);
  };
  const fetchSearch = async (searchTerm) => {
    setIsTableDataLoading(true);
    const searchResult = await getSearchResult(searchTerm);
    setTableData(searchResult);
    setIsTableDataLoading(false);
  };
  return (
    <div>
      <TableHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fetchSearch={fetchSearch}
        setModalContent={setModalContent}
        setIsAdd={setIsAdd}
        openModal={openModal}
        fetchFilteredConfigs={fetchFilteredConfigs}
      />
      <TableSubheader
        firstVisible={firstVisible}
        setFirstVisible={setFirstVisible}
        lastVisible={lastVisible}
        setLastVisible={setLastVisible}
        fetchSortFilterData={fetchSortFilterData}
      />
    </div>
  );
};

export default TableOptions;
