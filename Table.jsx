function Table() {
  return (
    <div className="rounded-2xl bg-[#fff] p-10 shadow-[0px_8px_16px_0px_#00000026]">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <div className="rounded w-4 h-8 bg-[#2E6D5D]"></div>
          <h1 className="text-[#1A202C] font-[800] text-xl leading-[27px]">
            Mails Phishing
          </h1>
        </div>

        <div>
          <table className="w-full">
            <thead className="font-bold text-sm leading-[21px] text-[#fff] bg-[#50A08C]">
              <td className="rounded-l-lg px-6 py-4">Email Address</td>
              <td className="px-6 py-4">Subject</td>
              <td className="px-6 py-4">Reason</td>
              <td className="rounded-r-lg px-6 py-4">User interactions</td>
            </thead>
            <tbody className="text-sm leading-[21px] text-[#1A202C] w-full">
              {Array.from({ length: 8 }, (_, i) => (
                <tr className="border-b border-b[#E2E8F0]">
                  <td className="px-6 py-4 rounded-ss-lg">
                    alex.taylor01@gmail.com
                  </td>
                  <td className="px-6 py-4">Subject content</td>
                  <td className="px-6 py-4">Reason content</td>
                  <td className="px-6 py-4 rounded-se-lg">Unopened</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
