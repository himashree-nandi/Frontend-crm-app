import React from "react";
import Sidebar from "../components/Sidebar";
import StatusDashBoard from "../components/StatusDashBoard";
import { useFetchTickets } from "../hooks/useFetchTickets";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { useUserUpdate } from "../hooks/useUserUpdate";
import { useTicketUpdate } from "../hooks/useTicketUpdate";
import TicketsTable from "../components/TicketsTable/ticketsTable";
import TicketUpdateModal from "../components/ticketspdateModal/ticketUpdateModal";
import UsersTable from "../components/usersTable/usersTable";
import UserUpdateModal from "../components/userUpdateModal/userUpdateModal";
import constants from "../utils/constants";
export default function Admin() {
  const [ticketDetails] = useFetchTickets();
  const [userDetails] = useFetchUsers();

  const [
    editUsers,
    closeUserUpdateModal,
    changeUserDetails,
    submitUserDetail,
    userUpdateModal,
    selectCurrentUsers,
  ] = useUserUpdate();

  const [
    selectCurrentTickets,
    ticketUpdateModal,
    editTickets,
    closeModal,
    onChangeTickets,
    submitTickets,
  ] = useTicketUpdate();
  const userType = localStorage.getItem("userType");
  if (userType !== constants.constUserTypes.admin) {
    return <h1>Insufficient permissions to access this page</h1>;
  }
  return (
    <div
      className="row text-align-center"
      style={{
        background: "linear-gradient(to right ,white,rgb(173, 222, 232))",
      }}
    >
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="col my-4 vh-100%">
        <div className="container">
          <StatusDashBoard ticketDetails={ticketDetails} />
          <br />
          <div style={{ maxWidth: "100%", cursor: "pointer" }}>
            <UsersTable
              userDetails={userDetails}
              editUsers={editUsers}
              title="USER RECORDS"
            />
          </div>
          <UserUpdateModal
            editUsers={editUsers}
            closeUserUpdateModal={closeUserUpdateModal}
            changeUserDetails={changeUserDetails}
            submitUserDetail={submitUserDetail}
            userUpdateModal={userUpdateModal}
            selectCurrentUsers={selectCurrentUsers}
          />
          <br />
          <hr />
          <div style={{ maxWidth: "100%" }}>
            <TicketsTable
              ticketDetails={ticketDetails}
              editTickets={editTickets}
              title="TICKET RECORDS"
            />
          </div>
          <TicketUpdateModal
            selectCurrentTickets={selectCurrentTickets}
            ticketUpdateModal={ticketUpdateModal}
            closeModal={closeModal}
            onChangeTickets={onChangeTickets}
            submitTickets={submitTickets}
          />
        </div>
      </div>
    </div>
  );
}
