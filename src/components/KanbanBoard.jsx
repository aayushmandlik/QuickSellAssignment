import React, { useContext } from "react";
import { priorityLabels, statusLabels } from "../config";
import TicketColumn from "./TicketColumn";
import { AppContext } from "../feature/appContext";

const KanbanBoard = () => {
  const { tickets, grouping, users } = useContext(AppContext);

  const groupedTickets = tickets && Object.groupBy(tickets, (t) => t[grouping]);

  const getColumnHeaders = () => {
    if (grouping === "status") {
      return statusLabels;
    } else if (grouping === "userId") {
      const userMap = {};

      if (users && users.length > 0) {
        users.forEach((user) => {
          userMap[user.id] = user.name;
        });
      }
      return Array.from(
        new Set(Object.keys(groupedTickets).map((userId) => userMap[userId]))
      );
    } else if (grouping === "priority") {
      const priorityLevels = Array.from(
        new Set(
          Object.values(groupedTickets)
            .flat()
            .map((ticket) => ticket.priority)
        )
      );
      return priorityLevels
        .map((level) => priorityLabels[level])
        .filter((label) => label !== undefined);
    }
  };

  const colHeaders = tickets ? getColumnHeaders() : [];

  return (
    <div className="kanban-board">
      <div className="kanban-grid">
        {colHeaders.map((header, index) => {
          const key =
            grouping === "userId"
              ? users.find((user) => user.name === header)?.id
              : grouping === "priority"
              ? index
              : header;

          return (
            <div key={key} className="kanban-column">
              <TicketColumn
                tickets={groupedTickets[key]}
                header={header}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
