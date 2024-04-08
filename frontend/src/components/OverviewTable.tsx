export default function OverviewTable() {
  return (
    <div className="overflow-x-auto">
        <div className="flex items-left">
            <select className="border border-gray-400 bg-gray-400 rounded bg-transparent text-white font-bold outline-0 px-4 py-2">
                <option className="text-black">January</option>
                <option className="text-black">February</option>
                <option className="text-black">March</option>
                <option className="text-black">April</option>
                <option className="text-black">May</option>
                <option className="text-black">June</option>
                <option className="text-black">July</option>
                <option className="text-black">August</option>
                <option className="text-black">September</option>
                <option className="text-black">October'</option>
                <option className="text-black">November</option>
                <option className="text-black">December</option>
                {/* Add other months */}
            </select>
        </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-white font-bold border-b border-gray-500 px-4 py-2">Your Requests</th>
            <th className="text-white font-bold border-b border-gray-500 px-4 py-2">$</th>
            <th className="text-white font-bold border-b border-gray-500 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <TableRow request="Fix leaky faucet" cost="55" status="Finished" />
          <TableRow request="Replace carpet" cost="135" status="Approved" />
          <TableRow request="Install security system" cost="65" status="Pending" />
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ request, cost, status }) => {
  return (
    <tr>
      <td className="border-b border-gray-500 px-4 py-2 text-white font-bold">{request}</td>
      <td className="border-b border-gray-500 px-4 py-2 text-white font-bold">${cost}</td>
      <td className="border-b border-gray-500 px-4 py-2 text-white font-bold">{status}</td>
    </tr>
  );
};