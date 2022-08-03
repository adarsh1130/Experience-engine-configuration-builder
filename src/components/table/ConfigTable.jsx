import * as React from "react";
import {
  StatefulDataTable,
  CustomColumn,
  StringColumn,
} from "baseui/data-table";
import { useStyletron } from "baseui";
import { useRef, useState } from "react";
import { SnackbarProvider, PLACEMENT } from "baseui/snackbar";
import { CloneModal } from "./tableComponents/cloneModal/CloneModal";
import { ActionMenu } from "./tableComponents/actionMenu/ActionMenu";
import { TagCell } from "./tableComponents/tagCell/TagCell";
import { LoadingMessage } from "../loadingMessage/LoadingMessage";
import { StatefulPopover, TRIGGER_TYPE } from "baseui/popover";
import { useEffect } from "react";
import { HeadingMedium } from "baseui/typography";
import { TextCell } from "./tableComponents/textCell/TextCell";
import { getCloneVal } from "./utils/helpers";
import searchUserId from "../../../firebase/searchUserId";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { TableFooter } from "./tableComponents/tableFooter/tableFooter";

import {
  SNACKBAR_OVERRIDES,
  POPOVER_OVERRIDES,
  DATE_OPTIONS,
} from "./utils/constants";
import { TooltipCell } from "./tableComponents/tooltipCell/TooltipCell";

export const ConfigTable = ({
  openModal,
  setModalContent,
  setIsAdd,
  data,
  isTableDataLoading,
  fetchFilteredConfigs,
}) => {
  const columns = [
    CustomColumn({
      title: "",
      mapDataToValue: (data) => data,
      minWidth: 52,
      cellBlockAlign: "center",
      renderCell: function Cell(props) {
        const val = JSON.stringify(props.value.jsonobj, null, 4);
        const [css, theme] = useStyletron();
        const [isOpen, setIsOpen] = useState(false);
        const [cloneModalOpen, setCloneModalOpen] = useState(false);
        const [cloneModalVal, setCloneModalVal] = useState(
          getCloneVal(props.value)
        );
        const [canEdit, setCanEdit] = useState(false);
        const context = useContext(AppContext);
        searchUserId(
          "editPermission",
          context.state.userDetails.email,
          canEdit,
          setCanEdit
        );

        return (
          <div>
            <StatefulPopover
              overrides={POPOVER_OVERRIDES}
              popoverMargin={0}
              content={() => (
                <>
                  <SnackbarProvider
                    placement={PLACEMENT.bottom}
                    overrides={SNACKBAR_OVERRIDES}
                  >
                    <ActionMenu
                      setIsOpen={setIsOpen}
                      val={val}
                      setModalContent={setModalContent}
                      setIsAdd={setIsAdd}
                      openModal={openModal}
                      setCloneModalOpen={setCloneModalOpen}
                      config={props.value}
                      canEdit={canEdit}
                      fetchFilteredConfigs={fetchFilteredConfigs}
                    />
                  </SnackbarProvider>
                </>
              )}
              triggerType={TRIGGER_TYPE.click}
              showArrow
              focusLock
              returnFocus
              autoFocus
            >
              <div
                className={css({
                  fontSize: "15px",
                  cursor: "pointer",
                })}
              >
                <Button
                  kind={KIND.tertiary}
                  size={SIZE.mini}
                  shape={SHAPE.circle}
                >
                  ⋮
                </Button>
              </div>
            </StatefulPopover>
            <CloneModal
              setCloneModalOpen={setIsOpen}
              cloneModalOpen={isOpen}
              cloneModalVal={val}
              config={props.value}
            />
            <CloneModal
              setCloneModalOpen={setCloneModalOpen}
              cloneModalOpen={cloneModalOpen}
              cloneModalVal={cloneModalVal}
              setCloneModalVal={setCloneModalVal}
              config={props.value}
            />
          </div>
        );
      },
    }),

    CustomColumn({
      title: "Name",
      minWidth: 350,
      sortable: true,
      sortFn: function (a, b) {
        return a.localeCompare(b);
      },
      mapDataToValue: (data) => data.name,
      renderCell: ({ value }) => <TooltipCell value={value} />,
    }),

    CustomColumn({
      title: "Description",
      minWidth: 250,
      sortable: true,
      sortFn: function (a, b) {
        return a.localeCompare(b);
      },
      mapDataToValue: (data) => data.description,
      renderCell: ({ value }) => <TooltipCell value={value} />,
    }),

    CustomColumn({
      title: "Module",
      minWidth: 250,
      sortable: true,
      sortFn: function (a, b) {
        return a.localeCompare(b);
      },
      mapDataToValue: (data) => data.module,
      renderCell: ({ value }) => <TextCell value={value} />,
    }),

    CustomColumn({
      title: "Group",
      minWidth: 250,
      sortable: true,
      sortFn: function (a, b) {
        return a.localeCompare(b);
      },
      mapDataToValue: (data) => data.group,
      renderCell: ({ value }) => <TextCell value={value} />,
    }),

    CustomColumn({
      title: "Type",
      minWidth: 250,
      sortable: true,
      sortFn: function (a, b) {
        return a.localeCompare(b);
      },
      mapDataToValue: (data) => data.type,
      renderCell: ({ value }) => <TextCell value={value} />,
    }),

    CustomColumn({
      title: "Tags",
      minWidth: 300,
      cellBlockAlign: "center",
      mapDataToValue: (data) => data.tags,
      renderCell: ({ value }) => <TagCell tags={value} />,
    }),

    StringColumn({
      title: "Created By",
      minWidth: 120,
      mapDataToValue: (data) => data.createdBy,
    }),

    CustomColumn({
      title: "Created Date",
      minWidth: 140,
      sortable: true,
      cellBlockAlign: "center",
      mapDataToValue: (data) => data.createdDate,
      renderCell: ({ value }) => (
        <div>{value.toLocaleString("en-US", DATE_OPTIONS)}</div>
      ),
      sortFn: function (a, b) {
        return a.getTime() < b.getTime() ? -1 : 1;
      },
    }),

    StringColumn({
      title: "Modified By",
      minWidth: 130,
      mapDataToValue: (data) => data.lastModifiedBy,
    }),

    CustomColumn({
      title: "Modified Date",
      minWidth: 140,
      sortable: true,
      cellBlockAlign: "center",
      mapDataToValue: (data) => data.modifiedDate,
      renderCell: ({ value }) => (
        <div>{value.toLocaleString("en-US", DATE_OPTIONS)}</div>
      ),
      sortFn: function (a, b) {
        return a.getTime() < b.getTime() ? -1 : 1;
      },
    }),
  ];

  useEffect(() => {
    setTimeout(() => setViewTable(true), 1);
  }, []);

  const [css, theme] = useStyletron();
  const [viewTable, setViewTable] = useState(false);

  return (
    <div
      className={css({
        marginLeft: "20px",
        marginRight: "20px",
        display: viewTable === true ? "flex" : "none",
        flexDirection: "column",
        height: "76vh",
      })}
    >
      <StatefulDataTable
        filterable={false}
        searchable={false}
        columns={columns}
        resizableColumnWidths={true}
        emptyMessage={() => (
          <div
            className={css({
              position: "absolute",
              left: "45vw",
              top: "30vh",
              height: "60vh",
            })}
          >
            <HeadingMedium>No data to show</HeadingMedium>
          </div>
        )}
        loading={isTableDataLoading}
        loadingMessage={() => (
          <div
            className={css({
              position: "absolute",
              left: "45vw",
              top: "30vh",
              height: "60vh",
            })}
          >
            <LoadingMessage />
          </div>
        )}
        rows={data.map((r) => ({ id: r.id, data: r }))}
      />
      <TableFooter length={data.length} />
    </div>
  );
};
