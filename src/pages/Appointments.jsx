import AppointmentStats from "../components/appointments/AppointmentStats"
import BookingLink from "../components/appointments/BookingLink"
import AppointmentsTable from "../components/appointments/AppointmentsTable"

function Appointments() {
  return (
    <div
      className="min-h-screen -m-6 lg:-m-8 p-6 lg:p-8"
      style={{
        background: "linear-gradient(137.23deg, rgba(1.89, 5.94, 23.59, 1) -34.38%, rgba(22.25, 36.5, 85.6, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      <div className="space-y-6">
        <AppointmentStats />
        <BookingLink />
        <AppointmentsTable />
      </div>
    </div>
  )
}

export default Appointments
