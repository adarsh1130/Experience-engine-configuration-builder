import { useStyletron } from "baseui";
import { Plus } from "baseui/icon";
import { Button } from "baseui/button";
import { Select, TYPE, SIZE } from "baseui/select";
import EmptyConfig from "../../../utils/EmptyConfig";
import { useState, useEffect } from "react";
import AppContext from "../../../../AppContext";
import { useContext } from "react";
import searchUserId from "../../../../../firebase/searchUserId";
import RefreshIcon from "./refreshIcon/RefreshIcon";

const TableHeader = ({
  searchValue,
  setSearchValue,
  fetchSearch,
  setIsAdd,
  openModal,
  setModalContent,
  fetchFilteredConfigs,
}) => {
  const [css, theme] = useStyletron();

  const context = useContext(AppContext);
  const [canEdit, setCanEdit] = useState(false);
  searchUserId(
    "editPermission",
    context.state.userDetails.email,
    canEdit,
    setCanEdit
  );

  useEffect(() => {
    const savedSearch = JSON.parse(localStorage.getItem("searchValue"));
    if (savedSearch) {
      setSearchValue([{ label: savedSearch, id: savedSearch }]);
    }
  }, []);

  useEffect(() => {
    if (searchValue != "")
      localStorage.setItem("searchValue", JSON.stringify(searchValue[0].id));
  }, [searchValue]);
  return (
    <div
      className={css({
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <div
        className={css({
          width: "70vw",
        })}
      >
        <Select
          value={searchValue}
          openOnClick={false}
          type={TYPE.search}
          placeholder="Search Config"
          onInputChange={(params) => {
            setSearchValue([
              { label: params.target.value, id: params.target.value },
            ]);
            fetchSearch(params.target.value);
          }}
          size={SIZE.compact}
          overrides={{
            Dropdown: {
              style: {
                display: "none",
              },
            },
            Root: {
              style: ({ $theme }) => ({
                width: "50vw",
              }),
            },
            ControlContainer: {
              style: ({ $theme, $isFocused }) => ({
                width: "50vw",
                backgroundColor: $theme.colors.backgroundSecondary,
                borderTopLeftRadius: $theme.borders.radius300,
                borderTopRightRadius: $theme.borders.radius300,
                borderBottomLeftRadius: $theme.borders.radius300,
                borderBottomRightRadius: $theme.borders.radius300,
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
                  borderTopColor: !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                  borderBottomColor: !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                  borderLeftColor: !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                  borderRightColor: !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                },
              }),
            },
            SearchIconContainer: {
              style: {
                width: "24px",
                height: "36px",
              },
            },
            ClearIcon: {
              props: {
                overrides: {
                  Svg: {
                    style: ({ $theme }) => ({
                      display: "none",
                    }),
                  },
                },
              },
            },
            SearchIcon: {
              props: {
                overrides: {
                  Svg: {
                    style: ({ $theme }) => ({
                      color: theme.colors.backgroundOverlayDark,
                    }),
                  },
                },
              },
            },
          }}
        />
      </div>
      <div
        className={css({
          display: "flex",
          width: "25vw",
          alignItems: "center",
          justifyContent: "flex-end",
        })}
      >
        <div
          className={css({
            marginRight: "20px",
            cursor: "pointer",
          })}
          onClick={() => {
            fetchFilteredConfigs();
          }}
        >
          <RefreshIcon />
        </div>
        {canEdit ? (
          <Button
            size={SIZE.compact}
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  borderTopLeftRadius: $theme.borders.radius300,
                  borderTopRightRadius: $theme.borders.radius300,
                  borderBottomLeftRadius: $theme.borders.radius300,
                  borderBottomRightRadius: $theme.borders.radius300,
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "8px",
                }),
              },
            }}
            className={css({
              width: "9vw",
            })}
            onClick={() => {
              setModalContent(EmptyConfig);
              setIsAdd(true);
              openModal(true);
            }}
          >
            <Plus size={20} />
            Add Config
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TableHeader;
