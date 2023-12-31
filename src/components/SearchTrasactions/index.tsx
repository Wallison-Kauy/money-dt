"use client";

export const SearchTransactions = () => {
  return (
    <div className="flex flex-row gap-4">
      <input
        type="text"
        className="flex w-full bg-backgroud2 p-4 text-lg text-searchText"
        placeholder="Busque uma transação"
      />
      <button className="flex flex-row items-center gap-3 rounded-lg border border-greenDT-default px-8 py-4 font-bold text-greenDT-light hover:bg-greenDT-light hover:text-white">
        {/* <Search size={20} className="hover:bg-white" /> */}
        Buscar
      </button>
    </div>
  );
};
