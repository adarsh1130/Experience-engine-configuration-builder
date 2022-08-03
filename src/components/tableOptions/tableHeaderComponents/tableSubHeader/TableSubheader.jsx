import { useStyletron } from "baseui";
import { Select, SIZE } from "baseui/select";
import { useState, useEffect } from "react";
import fetchList from "../../../../../firebase/fetchList";

const TableSubheader = ({
  fetchSortFilterData,
  firstVisible,
  setFirstVisible,
  lastVisible,
  setLastVisible,
}) => {
  const [css, theme] = useStyletron();

  const [filterByTagList, setFilterByTagList] = useState([]);
  const [filterByGroupList, setFilterByGroupList] = useState([]);
  const [filterByModuleList, setFilterByModuleList] = useState([]);
  const [filterByTag, setFilterByTag] = useState("");
  const [filterByGroup, setFilterByGroup] = useState("");
  const [filterByModule, setFilterByModule] = useState("");

  const fetchValues = async (value) => {
    const taglist = await fetchList("tag");
    setFilterByTagList(
      taglist.map((listItem) => ({ label: listItem, id: listItem }))
    );
    const modulelist = await fetchList("module");
    setFilterByModuleList(
      modulelist.map((listItem) => ({ label: listItem, id: listItem }))
    );
    const grouplist = await fetchList("group");
    setFilterByGroupList(
      grouplist.map((listItem) => ({ label: listItem, id: listItem }))
    );
  };

  useEffect(() => {
    if (filterByGroup != "")
      localStorage.setItem("filterByGroup", JSON.stringify(filterByGroup));
    if (filterByModule != "")
      localStorage.setItem("filterByModule", JSON.stringify(filterByModule));
    if (filterByTag != "")
      localStorage.setItem("filterByTag", JSON.stringify(filterByTag));
  }, [filterByGroup, filterByModule, filterByTag]);

  useEffect(() => {
    const groupFilter = JSON.parse(localStorage.getItem("filterByGroup"));
    if (groupFilter) {
      setFilterByGroup(groupFilter);
    }
    const moduleFilter = JSON.parse(localStorage.getItem("filterByModule"));
    if (moduleFilter) {
      setFilterByModule(moduleFilter);
    }
    const tagFilter = JSON.parse(localStorage.getItem("filterByTag"));
    if (tagFilter) {
      setFilterByTag(tagFilter);
    }
    fetchValues();
  }, []);

  const sortMenuStyles = {
    ControlContainer: {
      style: ({ $theme, $isFocused }) => ({
        backgroundColor: $theme.colors.backgroundPrimary,
        borderTopLeftRadius: $theme.borders.radius300,
        borderTopRightRadius: $theme.borders.radius300,
        borderBottomLeftRadius: $theme.borders.radius300,
        borderBottomRightRadius: $theme.borders.radius300,
        width: "12vw",
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderLeftStyle: "solid",
        borderRightStyle: "solid",
        borderTopColor: $isFocused
          ? `${theme.colors.primaryA}`
          : `${theme.colors.mono300}`,
        borderBottomColor: $isFocused
          ? `${theme.colors.primaryA}`
          : `${theme.colors.mono300}`,
        borderRightColor: $isFocused
          ? `${theme.colors.primaryA}`
          : `${theme.colors.mono300}`,
        borderLeftColor: $isFocused
          ? `${theme.colors.primaryA}`
          : `${theme.colors.mono300}`,
        borderTopLeftRadius: theme.borders.radius300,
        borderTopRightRadius: theme.borders.radius300,
        borderBottomLeftRadius: theme.borders.radius300,
        borderBottomRightRadius: theme.borders.radius300,
        ":hover": {
          borderTopColor: !$isFocused ? `${theme.colors.primaryA}` : "none",
          borderBottomColor: !$isFocused ? `${theme.colors.primaryA}` : "none",
          borderLeftColor: !$isFocused ? `${theme.colors.primaryA}` : "none",
          borderRightColor: !$isFocused ? `${theme.colors.primaryA}` : "none",
        },
      }),
    },
    Root: {
      style: {
        minWidth: "12vw",
        width: "12vw",
        margin: "0px 8px",
      },
    },
    Dropdown: {
      style: ({ $theme }) => ({
        borderTopLeftRadius: $theme.borders.radius300,
        borderTopRightRadius: $theme.borders.radius300,
        borderBottomLeftRadius: $theme.borders.radius300,
        borderBottomRightRadius: $theme.borders.radius300,
        width: "min-content",
        maxHeight: "50vh",
        marginTop: "4px",
      }),
    },
    DropdownListItem: {
      style: {
        fontSize: "12px",
        whiteSpace: "nowrap",
      },
    },
  };
  return (
    <div className={css({ margin: "8px 20px", display: "flex" })}>
      <div
        className={css({
          padding: "12px 8px",
          backgroundColor: theme.colors.backgroundSecondary,
          borderRadius: theme.borders.radius300,
          width: "100vw",
          display: "flex",
          alignItems: "center",
        })}
      >
        <Select
          overrides={sortMenuStyles}
          backspaceRemoves={false}
          options={filterByTagList}
          value={filterByTag}
          searchable={false}
          placeholder="Tag"
          onChange={(params) => {
            setFilterByTag(params.value);
            if (params.value.length === 0)
              localStorage.removeItem("filterByTag");
            fetchSortFilterData(
              params.value,
              filterByModule,
              filterByGroup,
              lastVisible,
              setLastVisible,
              firstVisible,
              setFirstVisible,
              ""
            );
          }}
          size={SIZE.mini}
        />
        <Select
          overrides={sortMenuStyles}
          backspaceRemoves={false}
          options={filterByModuleList}
          value={filterByModule}
          searchable={false}
          placeholder="Module"
          onChange={(params) => {
            setFilterByModule(params.value);
            if (params.value.length === 0)
              localStorage.removeItem("filterByModule");
            fetchSortFilterData(
              filterByTag,
              params.value,
              filterByGroup,
              lastVisible,
              setLastVisible,
              firstVisible,
              setFirstVisible,
              ""
            );
          }}
          size={SIZE.mini}
        />

        <Select
          overrides={sortMenuStyles}
          backspaceRemoves={false}
          options={filterByGroupList}
          value={filterByGroup}
          searchable={false}
          placeholder="Group"
          onChange={(params) => {
            setFilterByGroup(params.value);
            if (params.value.length === 0)
              localStorage.removeItem("filterByGroup");
            fetchSortFilterData(
              filterByTag,
              filterByModule,
              params.value,
              lastVisible,
              setLastVisible,
              firstVisible,
              setFirstVisible,
              ""
            );
          }}
          size={SIZE.mini}
        />
      </div>
    </div>
  );
};

export default TableSubheader;
